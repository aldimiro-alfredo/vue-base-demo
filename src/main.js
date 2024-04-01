import { createApp } from 'vue'; // Importe o método createApp corretamente
import App from './App.vue';
import router from '../routes.js'; // Importe o arquivo de configuração do roteador
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle.js';


const app = createApp(App); // Crie a instância do aplicativo Vue

app.use(router); // Use o roteador no aplicativo Vue

app.mount('#app'); // Monte o aplicativo Vue na div com o id 'app' no seu HTML
