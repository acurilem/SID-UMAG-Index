import { defineNuxtPlugin } from '#app'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { useToast } from "vue-toastification";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast)
    const toast = useToast({
        timeout: 2000,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
    })
    return {
        provide: {
            toastService: toast,
        },
      };
})