export default defineNuxtRouteMiddleware(async (_to, from) => {
    if (process.server) return
    //Si no tiene sesion iniciada ignorar
    // Token
    const authStore = useAuthStore()
    if (!authStore.getToken) return
    // Fetch
    const runtimeConfig = useRuntimeConfig()
    const statusED = await $fetch<{
        result: boolean
    }>(`${runtimeConfig.public.authBaseUrl}/api/v1/encuesta-docente/status`, {
        headers: {
            Authorization: authStore.getToken,
        },
    })

    if (statusED.result)
        {
            console.log('Encuesta Docente Activa')
        }
})
