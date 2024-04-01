import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './src/components/HomePage.vue';
import UserList from './src/components/UserList.vue';
import HelloWorld from './src/components/HelloWorld.vue';

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
    },
    {
        path: '/HelloWorld',
        name: 'helloWorld',
        component: HelloWorld
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

