import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'


createApp(App).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.min"