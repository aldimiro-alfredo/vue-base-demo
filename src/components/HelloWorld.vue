<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>{{ title }}</h2>
    <p>{{ toUpperCase('Dados do Usuário') }}</p>
    <br>
    <h4 v-if="user.status">Nome : {{ user.name }}</h4>
    <h4 v-if="user.status">Profissão: {{ user.job }}</h4>

    <button @click="listingUsers()">Listagem Usuarios</button>

    <table>
      <thead>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
      </thead>
      <tbody v-if="user.status">
        <tr v-for="item in users" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import userService from './Users/UserService'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      title: "Listagem de Usuários",
      user: {
        status: false,
        name: "Aldimiro Alfredo",
        job: "Programador"
      },
      users: []
    };
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
    // Chama o método iniciar quando o componente é montado
    this.listingUsers()
  },
  methods: {

    toUpperCase(str) {
      return str.toUpperCase()
    },
    async listingUsers() {
      try {
        const response = await userService.listingUsers()
        this.data = response.data;
        this.users = response.data
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
    async createUser() {

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
