<template>

    <HeaderPage></HeaderPage>

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

    <div class="container cortes_femeninos" id="cortes_femeninos">
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

    <FooterPage></FooterPage>

</template>

<script>

import userService from './Users/UserService'
import HeaderPage from '../components/HeaderPage.vue'
import FooterPage from '../components/FooterPage.vue'

export default {
    name: "HomePage",
    components: {
        HeaderPage,
        FooterPage
    },
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
