<template>
  <div class="all-page">
    <div class="header-and-main">
      <UMAGHeader
        :name="useAuthStore().getName"
        :is-auth="useAuthStore().isAuth"
        :log-out="useAuthStore().logOut"
      />
      <div class="container-fluid main-container">
        <slot />
      </div>
    </div>
    <UMAGFooter />
  </div>
</template>

<style>
.all-page {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-container{
  padding: 20px 40px;
}

.header-and-main {
  flex-grow: 1;
}
</style>
