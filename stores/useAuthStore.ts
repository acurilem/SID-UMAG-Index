import { defineStore } from 'pinia'
import { UserTypes } from '@/models/user/user.model'

type KeysUserTypes = keyof typeof UserTypes

export interface AuthData {
	refresh_token?: string
	refreshToken?: string
	token: string
	user: {
		cod_persona: number
		Nombre: string
		Apellidos: string
		Rut: string
		nacionalidad: string
		mail_sid: string
		mail_institucional: string
		mail_opcional: string
		nombre_completo: string
		cod_sexo: number
		des_sexo: string
		fecha_nac: string
		ap1_persona: string
		ap2_persona: string
		Roles: Array<{
			cod_categoria: number
			description: string
			id_accesso: number
		}>
	}
}

async function logIn(userForm: { username: string; password: string }) {
	try {
		const runtimeConfig = useRuntimeConfig()

		const authData = await $fetch<AuthData>(`${runtimeConfig.public.authBaseUrl}/api/v1/auth/login`, {
			method: 'POST',
			body: userForm,
		})

		return authData
	} catch {
		throw new Error('Credenciales inválidas')
	}
}

async function logOut() {
	const { remove } = await useSession()
	await remove()
}

const useAuthStore = defineStore('auth', {
	state: () => ({
		isAuth: false,
		user: null as AuthData | null,
	}),
	getters: {
		getIsAuth(state) {
			return state.isAuth
		},
		getUser(state): AuthData | null {
			return state.user
		},
		getToken(state): string | null {
			return state.user?.token ?? null
		},
		getName(state): string | null {
			return state.user?.user.Nombre ?? null
		},
		getID(state): number | null {
			return state.user?.user.cod_persona ?? null
		},
		getRefreshToken(state): string | null {
			return state.user.refresh_token ?? state.user.refreshToken
		}
	},
	actions: {
		unsetAuth() {
			this.isAuth = false
			this.user = null
		},
		async login(userForm: { username: string; password: string }) {
			const authData = await logIn(userForm)
			await this.setAuth(authData)
		},
		async logOut() {
			await logOut()
			this.unsetAuth()
			useRouter().push('/login')
		},
		async setAuth(user: AuthData) {
			this.isAuth = true
			this.user = user

			const { overwrite } = await useSession()
			await overwrite(user)
		},
	},
})

export default useAuthStore