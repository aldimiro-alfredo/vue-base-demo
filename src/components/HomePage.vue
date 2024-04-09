<template>

    <HeaderPage></HeaderPage>

    <div class="container bg-image">
        <h2>Aldimiro Alfredo</h2>
        <p>
            Seja bem-vindo(a) ao meu portfólio, aqui eu partilho as últimas<br>
            actualizações dos meus trabalhos favoritos.
        </p>
    </div>

    <div class="my_services">

        <h2>O que eu faço</h2>

        <div class="container container_services">

            <div class="item">
                <i class="bi bi-code custom-icon"></i>
                <h3>Desenvolvimento Responsivo</h3>
                <p>
                    Aplicação web responsiva, disponível para todos os dispositivos móveis, tornando o site mais prático
                    e acessível. Ou aplicações 100% mobile, como aplicativos.
                </p>
            </div>

            <div class="item">
                <i class="bi bi-code custom-icon"></i>
                <h3>Desenvolvedor Web</h3>
                <p>
                    Um desenvolvimento focado na criação de sites, páginas únicas, E-commerce ou outras aplicações.
                    Promovendo uma boa experiência e uma boa otimização do site.
                </p>
            </div>

            <div class="item">
                <i class="bi bi-person-bounding-box custom-icon"></i>
                <h3>Experiência do usuário</h3>
                <p>
                    Aplicações voltadas a um conjunto de elementos e fatores de um serviço, produto ou sistema que tem
                    como objetivo promover uma boa experiência para o usuário.
                </p>
            </div>

        </div>
    </div>

    <div class="skills">

        <h2>Habilidades</h2>

        <div class="container container_skills">

            <div class="item">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus ex debitis est,
                    corporis numquam doloremque quisquam eaque sapiente iste. Voluptatibus sunt, id fugiat dolore amet
                    optio dolorem sapiente obcaecati
                </p>
                <a href="#">Ver mais</a>
            </div>
            <div class="item">
                <p>HTML e CSS</p>
                <div style="width:80%; background-color:#00B37E;"><span>80%</span></div>
                <p>AngularJs</p>
                <div style="width:80%; background-color:#00B37E;"><span>80%</span></div>
                <p>VuesJs</p>
                <div style="width:80%; background-color:#00B37E;"><span>80%</span></div>
                <p>NodeJs</p>
                <div style="width:80%; background-color:#00B37E;"><span>80%</span></div>
                <p>JavaScript</p>
                <div style="width:90%; background-color:#00B37E;"><span>90%</span></div>
                <p>Docker</p>
                <div style="width:70%; background-color:#00B37E;"><span>70%</span></div>
                <p>Mysql</p>
                <div style="width:70%; background-color:#00B37E;"><span>70%</span></div>
                <p>C#</p>
                <div style="width:90%; background-color:#00B37E;"><span>90%</span></div>
                <p>Git</p>
                <div style="width:80%; background-color:#00B37E;"><span>80%</span></div>
            </div>
        </div>

    </div>

    <div class="networks">

        <h2>Tenho orgulho de ter colaborado nas seguintes empresas</h2>

        <div class="container container_networks">
            <div class="network_item">
                <img src="../assets/img/aldimiro_alfredo.png">
            </div>
            <div class="network_item">
                <img src="../assets/img/aldimiro_alfredo.png">
            </div>
            <div class="network_item">
                <img src="../assets/img/aldimiro_alfredo.png">
            </div>
            <div class="network_item">
                <img src="../assets/img/aldimiro_alfredo.png">
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
        //this.getUserAPI()
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

#logotipo {
    width: 35px;
    height: 35px;
    margin: 5;
}

.bg-image {
    background-image: url(../assets/img/aldimiro_alfredo.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.bg-image p{
    text-align: center;
}

.my_services {
    height: auto;
    padding-top: 20px;
    margin-bottom: 20px;
}

.my_services h2 {
    color: white;
    text-transform: uppercase;
}

.container_services {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.container_services .item {
    padding: 30px 30px;
    background-color: #121214;
    color: white;
}

.container_services .item p {
    text-align: justify;
}

.skills {
    height: auto;
    padding-top: 20px;
    margin-bottom: 20px;
}

.skills h2 {
    color: white;
    text-transform: uppercase;
}

.container_skills {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.container_skills .item {
    background-color: #121214;
    width: 100%;
    padding: 30px 30px;
}

.container_skills .item p {
    text-align: left;
    color: white;
}

.container_skills .item>div {
    text-align: left;
    color: white;
}

.custom-icon {
    font-size: 3em;
}

.networks{
    padding-top: 20px;
    height: 300px;
}

.container_networks{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.container_networks img{
    border: 1px solid #121214;
}

</style>
