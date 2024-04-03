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

  <div class="title">
      <h3 style="text-transform: uppercase;font-weight: bold;">{{ titulo }}</h3>
  </div>

  <div class="container aboutUs">
      <div class="pic-perfile">
          <img src="../assets/logo.png" alt="" />

          <hr>

          <p>ENG. Aldimiro Alfredo</p>
      </div>
      <div class="content-perfile">
        <p style="text-transform: uppercase;"><b>Um pouco sobre mim</b></p>
          <p>
              Eu sou o Aldimiro Alfredo, Programador! Tenho 27 anos e actuo na área de desenvolvimento a mais de 4 anos. Possuo experiência como Desenvolvedor Web. Logo a baixo tem o meu currículo com informçôes mais detalhadas sobre mim.
              Se preferir, podemos marcar uma call atráves do meu e-mail que está disponibilizado.
          </p>

          <br>

          <p><i class="bi bi-telephone"></i> Tel: 999 999 99</p>
          <p><i class="bi bi-envelope"></i> Email: {{  user?.email }}</p>
      </div>
  </div>
</template>

<script>

import userService from '../../src/components/Users/UserService'

  export default {
      name: "AboutUs",
      components:{

      },
      props: {
          msg: String,
      },
      data() {
          return {
              titulo: "Sobre Mim",
              mensagem: "AboutUs",
              modalOpen: false,
              user:[]
          };
      },
      mounted() {
        this.getUser()
      },
      methods: {

        async getUser(){

          const response = userService.getUserAPI();

          this.user=(await response).data

          console.log(this.user)
        }
      },
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

  .title{
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .aboutUs {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      height: 500px;
      gap: 10px;
  }

  .pic-perfile {
      border-right: 2px solid orange;
      width: 45%;
  }

  .pic-perfile img{
      height: 300px;
      width: 300px;
  }

  .content-perfile {
      width: 45%;
  }

  .content-perfile p{
    text-align: justify;
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
