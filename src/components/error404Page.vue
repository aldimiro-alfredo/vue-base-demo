<template>
  <div>
    <h1>{{ titulo }}</h1>
    <p>{{ mensagem }}</p>

  </div>
</template>

<script>

import $ from 'jquery'

export default {
  name: 'error404Page',
  props: {
    msg: String
  },
  data() {
    return {
      titulo: 'Page Not found',
      mensagem: 'Page Not found!',
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
