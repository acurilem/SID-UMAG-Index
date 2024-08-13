import axios from "axios";
import { useLoadingStore } from '~/store/loadingStore';

export default defineNuxtPlugin((nuxtApp) => {
    const loadingStore = useLoadingStore();
    const instance = axios.create({
        baseURL: "",
        headers: {
            "Content-Type": "application/json",
        },
    });

    instance.interceptors.request.use(function (config) {
        loadingStore.startLoading()
        const token = useAuthStore().getToken;
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;
        }
         return config;
        }, function (error) {
        return Promise.reject(error);
    });

    return {
        provide: {
            axiosService: instance,
        },
    };
});