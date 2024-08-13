<template>
    <div>
        <div class="bg-primary">
            <Logo />
        </div>
        <InfoTop />
        <MenuTop />
    </div>
</template>

<style scoped lang="scss">
.bg-primary {
    width: 100%;
    background-image: linear-gradient(to bottom, $color-primary, $color-secondary);
    padding: 20px;
    color: $color-primary-text;
}
</style>
