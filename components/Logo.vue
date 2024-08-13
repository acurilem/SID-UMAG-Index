<template>
    <div class="container-fluid">
        <div class="row header-height">
            <div class="col-12 div-log">
                <a href="/">
                    <img class="logo-umag img-fluid" src="@/assets/img/logo_umag_sid3.png">
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.div-logo{
    -ms-flex: 0 0 $logo-width;
    flex: 0 0 $logo-width;
    margin-right: 0px;
}
.logo-umag {
    width: $logo-width;
}

.logo-text{ 
    padding-top:10px;
    font-size: 18px;
    line-height: 1.2em;
}

.header-height{
    height: $header-height;
}

@media (max-width: 445px) {
    .header-height{
        height: $header-height + 40px;
    }
    .logo-umag {
        width: $logo-width;
        border-right:none;
        padding-right: 0px;
        
    }
    .logo-text{ 
        padding-top:10px;
        font-size: 18px;
        line-height: 1.2em;
    }
    .header-height{
        text-align: center !important;
    }

    .div-logo{
        display: block;
        text-align: center;
        width: 100%;
    }
    
  }
</style>

<script>
    export default {
        name: 'Logo'
    };
</script>