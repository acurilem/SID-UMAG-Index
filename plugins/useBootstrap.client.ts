import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(bootstrap)
    return {
        provide: {
            bootstrap: bootstrap
        }
    }
})
