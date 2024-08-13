<template>
  <div class="background-404 h-100">
    <div class="container-fluid">
      <div class="row">
          <div class="col-12 text-center">
              <img class="img img-fluid" src="@/assets/img/logo_umag_sid3.png">
              <br/>
              <h1>PÁGINA NO ENCONTRADA</h1>
              <button class="btn btn-info btn-lg text-white" @click="goBack">Volver</button>
          </div>
      </div>
    </div>
  </div>
</template> 

<script setup>
  const goBack = () => {
    location.href = '/'
  }
</script>

  <style scoped lang="scss">
  h1{
    color: #FFF;;
  }

  .img{
    max-width: 300px;
    margin-bottom: 2em;
  }
  .background-404{
    width: 100%;
    height: 100vh !important;
    background-image: linear-gradient(to bottom, $color-primary, $color-secondary) !important;
    padding-top: 10em;
  }
  </style>