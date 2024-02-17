import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)
app.use(VueAxios, axios)

app.mount('#app')
