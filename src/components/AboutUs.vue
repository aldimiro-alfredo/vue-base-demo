<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-danger">
      <a class="navbar-brand" href="">
          <img id="logotipo" src="../assets/logo.png" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <router-link :to="{ name: 'home' }" class="nav-link">Página Inicia</router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'servicesUs' }" class="nav-link">Serviços</router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'aboutUs' }" class="nav-link">Sobre Nós</router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'contactUs' }" class="nav-link">Contact Nos</router-link>
              </li>
          </ul>
      </div>
  </nav>

  <div>
      <h1>{{ titulo }}</h1>
      <p>{{ mensagem }}</p>
  </div>
</template>

<script>
  export default {
      name: "AboutUs",
      props: {
          msg: String,
      },
      data() {
          return {
              titulo: "AboutUs",
              mensagem: "AboutUs",
              modalOpen: false,
          };
      },
      mounted() {},
      methods: {},
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

  .nav-link:hover {
      background-color: black;
      color: white;
  }

  #logotipo {
      width: 35px;
      height: 35px;
      margin: 5;
  }
</style>
