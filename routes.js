import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './src/components/HomePage.vue';
import UserList from './src/components/UserList.vue';
import HelloWorld from './src/components/HelloWorld.vue';
//import error404Page from './src/components/error404Page.vue';
//import UserDetail from './src/components/UserDetail.vue';

//construção de ficheiro rotas
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/users',
        name: 'users',
        component: UserList,
        /*children: [
            { path: ':detail', name: 'detail', component: UserDetail }
        ]*/
    },
    {
        path: '/HelloWorld',
        name: 'helloWorld',
        component: HelloWorld
    },
    {
        //path: '*', name: 'error404', component: error404Page
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

