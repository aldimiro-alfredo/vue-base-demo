<template>

<nav class="navbar fixed-top navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="">
            <!----<img id="logotipo" src="../assets/logo.png">-->
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#cortes_femeninos">Ínicio</a>
                    <!----<router-link :to="{ name: 'home' }" class="nav-link">Página Inicia</router-link>-->
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'aboutUs' }" class="nav-link">Sobre</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'servicesUs' }" class="nav-link">Serviços</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'contactUs' }" class="nav-link">Contactos</router-link>
                </li>
            </ul>
        </div>
    </nav>

</template>

<script>

export default {
  name: 'HeaderPage',
  props: {
    msg: String
  },
  data() {
    return {
      titulo: 'HeaderPage',
      mensagem: 'HeaderPage',
      modalOpen: false
    };
  },
  mounted() {
  },
  methods: {  }
};
</script>

<style scoped>
/* Estilos específicos do componente */
h1 {
  color: blue;
}

p {
  font-size: 18px;
}

nav{
  background-color: #1f2432;
  color: white;
}

.nav-link{
  text-transform: uppercase;
  color: white
}

.nav-link:hover {
    border-bottom: 4px solid #121214;
    color: white;
}

#logotipo{
    width: 35px;
    height: 35px;
    margin: 5;
}

</style>
