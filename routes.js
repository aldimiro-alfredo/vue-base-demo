import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './src/components/HomePage.vue';
import ContactUs from './src/components/ContactUs.vue';
import AboutUs from './src/components/AboutUs.vue'
import ServicesUs from './src/components/ServicesUs.vue'
import HelloWorld from './src/components/HelloWorld.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/contactUs',
        name: 'contactUs',
        component: ContactUs,
    },
    {
        path: '/aboutUs',
        name: 'aboutUs',
        component: AboutUs,
    },
    {
        path: '/servicesUs',
        name: 'servicesUs',
        component: ServicesUs,
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

