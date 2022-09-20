import { createRouter, createWebHistory } from 'vue-router';
import mainPage from '/src/components/mainPage.vue';

let history = createWebHistory();
let routes = [
  {
    path: '/',
    name: 'mainpage',
    component: mainPage,
  },
];

export default createRouter({ history, routes });
