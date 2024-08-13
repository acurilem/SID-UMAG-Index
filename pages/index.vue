<template>
  
  <div class="row">
    <div class="col-md-12">
      
      <ul class="nav nav-tabs  justify-content-center">
        <li class="nav-item" v-for="(role, index) in roles">
          <a :class="['nav-link', index == 0 ? 'active':'' ]" aria-current="page" href="#" id="nav-profile-tab" data-bs-toggle="tab" :data-bs-target="'#services_div_'+index">{{role.descripcion}}</a>
        </li>
      </ul>
      <div class="tab-content" id="nav-tabContent">
          <div v-for="(role, index) in roles" :class="['tab-pane', 'fade', index == 0 ? 'show active':'']" :id="'services_div_'+index" :key="'services_div_'+index">
            <div v-if="role.show">  
              <div class="services row text-center">
                <div class="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-1" v-for="service in role.services">
                  <div class="col-service  text-center">
                    <a :href="service.path" class="icon-link">
                      <div class="service">
                        <div class="icon text-center">
                          <i :class="[' icon-gradient fa-2x',service.icon] "></i>
                        </div>
                        <div class="icon-name text-center">
                          {{service.name}}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
          </div>

          </div>          
        </div>
      </div>
    </div>
    <Modal v-show="showModal" />
</template>

<style scoped lang="scss">
.services{
  padding: 40px;
}
.icon-gradient{
  background: linear-gradient(302deg,$color-primary 0%, $color-secondary 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
}
.col-service{
  width: 100%;
  min-width: $icon-width;
  color: $color-secondary;
  margin-bottom: 20px;
}
.icon{
  font-size: 30px;
}
.icon-name{
  font-size: 14px;
  font-weight: lighter;
  font-weight: normal;
}
.fa-2x {
    font-size: 1.5em;
}

.icon-link{
  transition: all 0.5s ease;
  padding-top: 10px;
  padding-bottom: 10px;
}
.icon-link:hover{
  text-decoration: none;
  color: $color-black;
  transition: all 0.5s ease;
}
</style>

<script>
import Modal from '~/components/ModalEncuesta.vue'
export default{
  components: { Modal },
  data(){
    return{
      roles: [],
      showModal: false,
      url: process.env.NUXT_PUBLIC_AUTH_BASE_URL,
      showDocente: false,
      showEstudiante: false,
      showJefeCarrera: false
    }
  },
  beforeMount(){
    let token = useAuthStore().getToken
    if(token){      
      // url = this.$config.public.authBaseUrl
      const runtimeConfig = useRuntimeConfig()
      const url = runtimeConfig.public.authBaseUrl
      console.log(url)
      this.$axiosService.get(url + "/api/v1/encuesta-docente/status")
      .then((r) => {
        this.showModal = r.data.response
      })
      .catch((e) => {
        console.log(e)
      })
      let rols = useAuthStore().getUser.user.Roles.map((r) => r.descripcion)
      if (rols.includes("ALUMNOS")) {
        this.showEstudiante = true
      }
      if (rols.includes("JEFE DE CARRERA")) {
        this.showJefeCarrera = true
      }
      if (rols.includes("DOCENTE")) {
        this.showDocente = true
      }
      this.roles = [
        { 
          descripcion: "Estudiante",
          show: this.showEstudiante,
          services: [
            {
              name: "Créditos Culturales y Deportivos",
              icon: "fa-solid fa-table-tennis-paddle-ball",
              path: "/culturales-deportivos"
            },
            {
              name: "Inscripción de Asignaturas",
              icon: "fa-solid fa-file-circle-plus",
              path: "/inscripcion-asignaturas"
            },
            {
              name: "Renuncia de Créditos",
              icon: "fa-solid fa-file-circle-xmark",
              path: "/renuncia-creditos"
            },
            {
              name: "Calificaciones",
              icon: "fa-solid fa-7",
              path: "/calificaciones/estudiante"
            },
            {
              name: "Solicitudes",
              icon: "fa-solid fa-envelope-open-text",
              path: "/solicitudes"
            },
            {
              name: "Certificados",
              icon: "fa-solid fa-file-signature",
              path: "/certificados"
            },
            {
              name: "Kárdex",
              icon: "fa-solid fa-box-archive",
              path: "/kardex"
            },
            {
              name: "Malla",
              icon: "fa-solid fa-diagram-project",
              path: "/mallas"
            },
            {
              name: "Horarios",
              icon: "fa-regular fa-calendar-days",
              path: "/horarios"
            },
            {
              name: "Resultados Encuesta Docente",
              icon: "fa-solid fa-chart-column",
              path: "/resultados-ed"
            },
            {
              name: "TNE",
              icon: "fa-solid fa-bus",
              path: "/tne",
            },
            {
              name: "Mi Perfil",
              icon: "fa-solid fa-address-card",
              path: "/perfilusuario"
            }
          ]
        },
        { 
          descripcion: "Jefe de Carrera",
          show: this.showJefeCarrera,
          services: [
            {
              name: "Renuncia de Créditos",
              icon: "fa-solid fa-file-circle-xmark",
              path: "/renuncia-creditos"
            },
            {
              name: "Calificaciones",
              icon: "fa-solid fa-7",
              path: "/estudiantes/calificaciones"
            }
          ]
        },
        { 
          descripcion: "Docente",
          show: this.showDocente,
          services: [
            {
              name: "Calificaciones",
              icon: "fa-solid fa-7",
              path: "/estudiantes/calificaciones"
            }
          ]
        }
      ];
      this.roles = this.roles.filter((r) => r.show)


      
      

    }
    else{
      this.$router.push('/login');
    }
  },
}
</script>
