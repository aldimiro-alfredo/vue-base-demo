<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-danger">
    <a class="navbar-brand" href="">
      <img id="logotipo" src="../assets/logo.png">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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

  <h1>{{ titulo }}</h1>
  <p>{{ mensagem }}</p>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" @click="showModal()">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
          <button type="button" class="close" aria-label="Close" @click="closeModal()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam nisi earum, voluptatem veniam natus
            quia beatae voluptatibus, distinctio fuga magni esse quod nam et modi? Voluptate illum consequuntur facilis
            minima.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal()">Close</button>
          <button type="button" class="btn btn-primary" @click="save()">Save changes</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import modalService from '../../src/components/Users/ModalService'

export default {

  name: 'ServicesUs',
  components:{

  },
  props: {
    msg: String
  },
  data() {
    return {
      titulo: 'ServicesUs',
      mensagem: 'ServicesUs',
      modalOpen: false,
      uniqueModal: null
    };
  },
  mounted() {
  },
  methods: {

    showModal() {
      this.uniqueModal = modalService.showModal("myModal")
      this.uniqueModal.show();
    },
    closeModal() {
      this.uniqueModal.hide();
    },
    save() {
      console.log("save............")
    }

  }
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

.modal-content{
  border-radius: 0px;
}
</style>
