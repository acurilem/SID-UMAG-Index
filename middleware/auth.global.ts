export default defineNuxtRouteMiddleware(async (_to, from) => {
	if (process.server) return
	let isAuth = true
	if (!useAuthStore().isAuth) {
		const { session } = await useSession()
		if (session.value?.token) {
			useAuthStore().setAuth({
				token: session.value?.token,
				user: session.value?.user,
				refresh_token: session.value?.refresh_token,
			})
		} else isAuth = false
	}
	const auth = _to.meta?.auth ?? true
	if (auth && !isAuth)
		return navigateTo('/login', {
			redirectCode: 301,
			external: true,
		})
})
