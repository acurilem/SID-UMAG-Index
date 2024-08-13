import { jwtDecode } from 'jwt-decode'

let timeoutInstance: NodeJS.Timeout | null = null

function refreshSession(executeInMs: number) {
	return setTimeout(async () => {
		const authStore = useAuthStore()
		const runtimeConfig = useRuntimeConfig()

        try {
            const res = await $fetch<AuthData>(`${runtimeConfig.public.authBaseUrl}/api/v1/auth/refresh`, {
                method: 'POST',
                body: {
                    refresh_token: authStore.getRefreshToken,
                },
            })
            authStore.setAuth(res)
            // Rexecute
            const decoded = jwtDecode(res.token)
            const dayjs = useDayjs()
            const diff = dayjs(new Date(decoded.exp * 1000)).diff(
                new Date(),
                'milliseconds',
            )
    
            timeoutInstance = refreshSession(diff - 60 * 5 * 1000)
        } catch (err) {
            await authStore.logOut()
        }
	}, executeInMs)
}

export default defineNuxtPlugin({
    async setup() {
        watch(() => useAuthStore().isAuth, (isAuth) => {
            if (isAuth && !timeoutInstance) {
                // Manage refresh token
                const decoded = jwtDecode(useAuthStore().getToken)

                const dayjs = useDayjs()
                const diff = dayjs(new Date(decoded.exp * 1000)).diff(
                    new Date(),
                    'milliseconds',
                )
                const executeIn = diff - 60 * 5 * 1000
                if (executeIn <= 1000 * 60 * 60 * 24 * 2)
                    timeoutInstance = refreshSession(diff - 60 * 5 * 1000)
            }
        })
    },
})
