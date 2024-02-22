<template>
  <div>
    <h1>{{ titulo }}</h1>
    <p>{{ mensagem }}</p>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" @click="openModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="myModalLabel">Modal title</h5>
            <button type="button" class="close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Modal body content goes here -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import $ from 'jquery'

export default {
  name: 'UserList',
  props: {
    msg: String
  },
  data() {
    return {
      titulo: 'Listagem de Usuários',
      mensagem: 'Este é o meu primeiro componente Vue!',
      modalOpen: false
    };
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    openModal() {
      $('#myModal').modal('show');
    },
    closeModal() {
      $('#myModal').modal('hide');
    },

    getUsers() {
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
</style>
