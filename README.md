# Template
s

## Guía inicio

### Docker

Corra el aplicativo con el comando:

```bash
docker compose up
```

### Docker Compose

El `docker-compose.yaml` que se encuentra en la raíz del proyecto es de producción, es decir, no debe ni agregarse ni editar, ni agregar nada más de lo siguiente:

- `container_name`: Edite el nombre del contenedor con un nombre único que empiece por "SID-UMAG", y luego identifíquelo como estime conveniente.

- `labels`: Las etiquetas del contenedor son lo que van a permitir finalmente el enrutamiento por parte del Proxy para hacer acceso a este, lo que debe editar de estas son los siguientes aspectos:

    1. Puede darse cuenta que en este template está el nombre "template_frontend" tanto para routers como para service configuración del Proxy, modifíquelo por un nombre único que esté en minúsculas, sin números y con el único signo admitido "_".
    2. Cambie "domain.cl" como el dominio de producción a usar.
    3. Para las reglas de PathPrefix, cambie /front, como un PathPrefix único entre todos los módulos de micro-frontends. Para el segúndo PathPrefix, mantenga /api/X/session, haciendo solo el cambio en la X por el mismo nombre que eligió para el primer PathPrefix, es decir:
        - Si escogió como PathPrefix "/ejemplo", entonces el segundo PathPrefix queda como "/api/ejemplo/session"

### nuxt.config.ts

Para la configuración de Nuxt, debe considerar los siguientes aspectos:

- `baseUrl`: En el bloque de `$production` de la configuración, edite `baseUrl` por el mismo valor que PathPrefix para de esta forma hacer coincidir el prefijo de entrada del Proxy con el prefijo del servicio del frontend.

- `basePath`: En el mismo bloque de `$production` de la configuración, edite `basePath` por el mismo valor que el segúndo PathPrefix.

### Sesión

La arquitectura propuesta para esta aplicación se basa principalmente en micro-frontends. Por esto mismo se realizó una implementación a nivel de sesión con el proposito de mantenerla viva alrededor de todos los multiples micro-frontends.

El flujo está construido en base a dos herramientas:

- `Nuxt-Session`: Middleware de sesión para conservar datos del usuario en todas las solicitudes.
- `Pinia`: Vue Store para manejar estado global de la aplicación.

Mientras que `Nuxt-Session` permite manejar, a nivel práctico, datos del usuario por medio de multiples almacenes configurables, a los cuales accede por medio de la identificación del usuario, generalmente por cookies.

`Pinia` permite exponer una API, por medio de la declaración de una `PiniaStore`, a la cual se le cargan estos datos provenientes de `Nuxt-Session`, es decir, los datos del usuario, y pueden ser facilmente accedidos por medio de dicha Store.


#### Duración tokens

- `Access Token`: 1 Hrs.
- `Refresh Token`: 1 Dia.

#### Flujo sesión

1. Antes de nada, Nuxt-Session captura la sesión del usuario, en este caso de la Cookie, luego, va al almacén que se configuró (por defecto `Memory`) y se trae los datos del usuario anteriormente seteados.

2. Actualmente, existe un middleware programado en `middleware/auth.global.ts` de este mismo template. Este middleware captura todas las peticiones, hace llamado de `Nuxt-Session` con `useSession()` y ver qué datos están dentro de la sesión del usuario.

3. Hace un llamado a nuestra Store de autenticación del usuario, con `useAuthStore()`, y hace un set de los datos cargados por `Nuxt-Session` de la sesión.

4. Puede comenzar a usar la auth Store dentro de todo el aplicativo con `useAuthStore()`.

Como puede ver, este flujo permite manejar la sesión del usuario a nivel de todos los micro-frontends. Esto ya que la sesión se guarda en un almacén común, y para acceder a él se identifica la sesión del usuario con una Cookie, la cual vive dentro de un dominio, como `ejemplo.cl`, compartiendose así todos los recursos grabados en caché por todos los servidores.
por ejemplo

#### Uso

Ejemplos del uso de la sesión son por ejemplo:

```vue
<script setup>
// Store
const authStore = useAuthStore()
</script>

<template>
    <div>
        <p v-if="authStore.userRoleIs('admin')">Este texto solo lo puede ver el admin</p>
        <p v-if="authStore.userRoleIs('student')">Este texto solo lo puede ver un estudiante</p>
        <p v-if="authStore.isAuth">Este texto solo lo puede ver alguien logueado</p>
    </div>
</template>
```

```vue
<script setup>
// Metadata - Configuración por defecto
definePageMeta({
    auth: true,
})
</script>

<template>
    <div>
        Pág. que solo puede alguien loggeado
    </div>
</template>
```


```vue
<script setup>
// Metadata
definePageMeta({
    auth: false,
})
</script>

<template>
    <div>
        Pág. que solo puede cualquiera
    </div>
</template>
```

```vue
<script setup>
// Store
const authStore = useAuthStore()
</script>

<template>
    <div>
        ¡Hola {{ authStore.getName }}!
    </div>
</template>
```

```vue
<script setup>
// Store
const authStore = useAuthStore()
</script>

<template>
    <div>
        <button @click="authStore.logOut">Cerrar sesión</button>
    </div>
</template>
```
