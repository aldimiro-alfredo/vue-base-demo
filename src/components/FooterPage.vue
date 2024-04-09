<template>
  <div class="footer">
      <div class="container container-item">
          <div class="footer-item">
              <p style="margin-left: 120px;">Redes Sócias</p>
              <br />

              <a href="#" class="btn-socias">
                  <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="btn-socias">
                  <i class="bi bi-whatsapp"></i>
              </a>
              <a href="#" class="btn-socias">
                  <i class="bi bi-linkedin"></i>
              </a>
              <a href="#" class="btn-socias">
                  <i class="bi bi-linkedin"></i>
              </a>
          </div>

          <div class="footer-item">
              <p>Parceiros</p>
              <br />
              <p>
                  A LINUXtips desde 2014 vem compartilhando conhecimento e sendo uma re-evolução na forma de aprender sobre TI.
              </p>
          </div>

          <div class="footer-item">
              <p>Aprenda hoje!</p>
              <br />
              <p>
                  LINUXtips Edtech LTDA CNPJ 11.085.988/0001-55
              </p>
          </div>

          <div class="footer-item">
              <p>Contatos</p>
              <br />
              <p><i class="bi bi-envelope"></i> aldimiroalfredo@gmail.com</p>
              <p><i class="bi bi-phone"></i> 948 815 157</p>
              <p><i class="bi bi-list"></i> Termos de Uso</p>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
      name: "FooterPage",
      props: {
          msg: String,
      },
      data() {
          return {
              titulo: "FooterPage",
              mensagem: "FooterPage",
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

  .footer {
      background-color: #1f2432;
      height: 300px;
  }

  .container-item {
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      gap: 20px;
      color: white;
  }

  .footer-item {
      width: 100%;
      /*border: 1px solid red;*/
  }
  .footer-item p {
      text-align: justify;
  }

  .btn-socias {
      padding: 10px 10px;
      margin: 5px;
      background-color: white;
      color: black;
      border-radius: 10%;
  }
</style>
