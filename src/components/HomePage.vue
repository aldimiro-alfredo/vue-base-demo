<template>
  <div>
    <h1>{{ titulo }}</h1>
    <p>{{ mensagem }}</p>
  </div>

  <router-link :to="{ name: 'home' }">Home</router-link>
  <router-link :to="{ name: 'users' }">Listagem de Usuários</router-link>
  <!----<router-link :to="{ name: 'detail' }">Detalhes Usuário</router-link>-->
  <!----<router-link :to="{ name: 'helloWorld' }">helloWorld</router-link>-->
</template>
    
<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  mounted() {

  },
  data() {
    return {
      titulo: 'Home Page',
      mensagem: 'Este é o meu primeiro componente Vue!'
    };
  },
  methods: {

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
    