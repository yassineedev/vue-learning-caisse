import './assets/main.css'
import { createRouter,createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

const routes = [
    {path:'/', component: home},
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
createApp(App).use(router).mount('#app')
