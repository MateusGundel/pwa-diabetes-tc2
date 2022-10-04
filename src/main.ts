import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import i18n from './plugins/i18n'
import "bootstrap/dist/js/bootstrap.min"


const app = createApp(App)
app.use(router)
app.use(i18n)

app.mount('#app')

