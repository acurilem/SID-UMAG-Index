<script setup lang="ts">
definePageMeta({
    auth: false,
})
</script>

<template>
    <div class="row gx-4">
        <div class="col-md-5 pt-4 pb-4">
            <div class="sticky-top">
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="umag-color-1 bold text-center">Iniciar Sesión</h4>
                    </div>
                </div>
                <div class="div-login">
                        <Login />
                </div>
            </div>
        </div>
        <div class="col-md-7">
            <div class="border-left">
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="umag-color-1 bold"><i class="fa fa-info-circle" aria-hidden="true"></i> Ayuda web docente</h4>
                        <p>
                            En caso de requerir ayuda en el uso de la nueva plataforma Web Docente contáctanos a cualquiera de los siguientes teléfonos:
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <ul>
                            <li>
                                <div class="umag-color-1 bold">Facultad de Ciencias</div>
                                Sr. Roberto Barrientos, 612209309<br/>
                                Sr. José Ampuero, 612207068
                            </li>
                            <li>
                                <div  class="umag-color-1 bold">Facultad de Ciencias Económicas y Jurídicas</div>
                                Sr. Jonathan Burgos, 612207633
                            </li>
                            <li>
                                <div  class="umag-color-1 bold">Facultad de Ingeniería</div>
                                Sr. Eduardo Covarrubias, 612207028<br/>
                                Sr. Gonzalo Abadié, 612207028
                            </li>
                            <li>
                                <div  class="umag-color-1 bold">Facultad de Educación y Ciencias Sociales</div>
                                Sr. Jonathan Burgos, 612207633<br/>
                                Sr. Manuel Miranda, 612207005
                            </li>
                            <li>
                                <div  class="umag-color-1 bold">Facultad de Ciencias de la Salud y Escuela de Medicina</div>
                                Sr. Diego Sobarzo, 612209372
                            </li>
                            <li>
                                <div  class="umag-color-1 bold">Instituto de la Patagonia</div>
                                Sr. Carlos Villarroel, 612207033
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <h4 class="umag-color-1 bold"><i class="fa fa-wifi" aria-hidden="true"></i> Zonas iluminadas</h4>
                        <p>
                            Muestra un mapa con todas las zonas WiFi de la Universidad. Para acceder al mapa haz <a href="http://sid.umag.cl/wifi/" target="_blank">click aquí</a>
                        </p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <h4 class="umag-color-1 bold"><i class="fa fa-phone" aria-hidden="true"></i> Informaciones: 61 2 207000 - 61 2 207010</h4>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped lang="scss">
.bold{
    font-weight: 700;
}
.div-login{
    padding-left: 30px;
    padding-right: 30px;
}

.border-left{
    border-left:1px solid $color-primary;
    height: 100%;
    padding: 20px 40px;
}
ul{
    list-style: square;
    padding-left: 16px;
}
ul li {
    margin-bottom: 10px;
}

</style>