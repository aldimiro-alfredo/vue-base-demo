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
                    <a class="nav-link" href="#">Página Inicial</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Serviços</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sobre</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contactos</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container bg-image">
        <h2>Salão <span style="color: orange;">UEVO</span></h2>
    </div>

    <h3 class="title">Cortes Masculinos</h3>

    <div class="container cortes_masculinos">
        <div class="card-images">
            <div class="image">
                <img src="./../assets/img/1.jpg" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
            <div class="image">
                <img src="./../assets/img/2.jpg" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
            <div class="image">
                <img src="./../assets/img/3.jpg" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
            <div class="image">
                <img src="./../assets/img/4.jpg" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
            <div class="image">
                <img src="./../assets/img/5.jpg" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
            <div class="image">
                <img src="./../assets/img/3.jpg" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
        </div>
    </div>

    <h3 class="title">Cortes Femeninos</h3>

    <div class="container cortes_femeninos">
        <div class="card-images">
            <div class="image">
                <img src="./../assets/img/menina1.jpg" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
            <div class="image">
                <img src="./../assets/img/menina2.jpg" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
            <div class="image">
                <img src="./../assets/img/menina3.jpg" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
            <div class="image">
                <img src="./../assets/logo.png" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
            <div class="image">
                <img src="./../assets/logo.png" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
            <div class="image">
                <img src="./../assets/logo.png" />
                <div class="card-content">
                    <p>Corte Francês</p>
                    <p>Preço 10.000</p>
                    <a id="btn_compar">Comprar</a>
                </div>
            </div>
        </div>
    </div>

    <!----<router-link :to="{ name: 'home' }">Home</router-link>
  <router-link :to="{ name: 'users' }">Listagem de Usuários</router-link>-->

</template>

<script>

import userService from './Users/UserService'

export default {
    name: "HomePage",
    props: {
        msg: String,
    },
    mounted() { 
        this.getUserAPI()
    },
    data() {
        return {
            titulo: "Home Page",
            mensagem: "Este é o meu primeiro componente Vue!",
            users: []
        };
    },
    methods: {

        async getUserAPI() {

            const response = await userService.getUserAPI()
            this.users = response.data

            console.log(this.users)
        }
    },
};
</script>

<style scoped>
/* Estilos específicos do componente */
p {
    font-size: 18px;
}

body{
    background-color: black;
}

.container>div {
    zoom: 75%;
}

#logotipo{
    width: 35px;
    height: 35px;
    margin: 5;
}

.bg-image {
    background-image: url(../assets/img/home1.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 60vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.nav-link:hover {
    background-color: black;
    color: white;
}

.card-images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}

.card-images .image {
    border: 1px solid black;
}

.card-images img {
    width: 300px;
    height: 300px;
}

.card-images .card-content {
    margin: 10px;
}

.card-content #btn_compar {
    padding: 10px 40px;
    background-color: black;
    color: white;
}

.cortes_masculinos, .cortes_femeninos {
    height: auto;
    background-color: #f3f3f4;
}
.title{
    margin-top: 20px;
    margin-bottom: 20px;
}

.card-content p{
    font-weight: bold;
}
</style>
