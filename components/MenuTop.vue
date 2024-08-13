<template>
    <ul class="nav justify-content-center menu-top justify-content-sm-end" v-show="authStore.isAuth">
        <li class="nav-item">
            <NuxtLink to="/"  active-class="active" class="nav-link">
                SERVICIOS
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>
const authStore = useAuthStore()
</script>

<style scoped lang="scss">
.menu-top{
    position: absolute;
    top: $header-height;
    width: 100%;
    font-size: 14px;
    padding-right: 20px;
}

.active{
    font-weight: bold;
    color: #FFF !important;
}

.menu-top a{
    color: var(--bs-gray-300);
}

.menu-top a:hover{
    color: #FFF;
    text-decoration: none;
}

@media (max-width: 445px) {
    .menu-top{
        top: $header-height+46px;
    }
    
}
</style>