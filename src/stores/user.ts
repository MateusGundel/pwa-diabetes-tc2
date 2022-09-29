import {reactive} from 'vue'
import router from "@/router";
import axios from "axios";

const state = reactive({
    name: '',
    username: '',
    error: ''
})

const actions = {
    async login(username: string, password: string) {
        axios.post(process.env.VUE_APP_URL_API_DIABETES + '/api/v1/login', {
            username: username,
            password: password
        }).then(function (response) {
            console.log(response)
            state.error = ''
            localStorage.setItem("user_token", response.data.token_type + " " + response.data.access_token);
            router.push('/')
        }).catch(function (error) {
            if (error.response.status === 400) {
                state.error = 'Senha ou usuário incorretos.'
            } else {
                state.error = 'Erro no login, por favor tente novamente.'
            }
        })
    },
    async logout() {
        localStorage.removeItem("user_token")
        await router.push('/login')
    }
}

export default {state, ...actions}
