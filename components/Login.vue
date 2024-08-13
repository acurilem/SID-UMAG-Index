<template>
    <div class="mb-3">
        <label for="username" class="form-label umag-color-1"><strong>Usuario</strong></label>
        <input type="text" class="form-control" id="username" placeholder="RUT o username" v-model="login.username" @keydown.enter="sendLogin">
    </div>
    <div class="mb-3">
        <label for="pass" class="form-label umag-color-1"><strong>Clave</strong></label>
        <input type="password" class="form-control" id="pass" placeholder="********" v-model="login.password"  @keydown.enter="sendLogin">
    </div>
    <div class="mb-3 text-center">
        <button type="button" class="btn btn-primary" @click="sendLogin" :disabled="disabledSubmit">Ingresar</button>
    </div>
    <div class="mb-3 text-center">
        <a href="">¿ Olvidó su contraseña ?</a>
    </div>
</template>

<script>
import { useLoadingStore } from '~/store/loadingStore';

export default{
    data() {
        return {
           login:{
            username: null,
            password: null
           },
           disabledSubmit: true,
           loadingStore: useLoadingStore(),
        }
    },
    methods:{
        sendLogin(){
            this.loadingStore.startLoading();
            useAuthStore().login(this.login)
            .then(() => {
                const nombre = useAuthStore().getUser.user.Nombre
                this.$router.push('/');
                this.$toastService.success("¡ Bienvenido "+nombre+" !");
            })
            .catch((r)=>{
                let error = 'No se obtuvo respuesta desde el servidor';
                if(r){
                    error = r.message;
                }
                this.$toastService.error(error);
            })
            .finally(()=>{
                this.loadingStore.stopLoading();
            })
        }
    },
    watch: {
        login: {
            handler(val) {
                let disabledButton = true
                if(val.username && val.password){
                    disabledButton = false
                }
                this.disabledSubmit = disabledButton
            },
            deep: true
        }
    }
}
</script>