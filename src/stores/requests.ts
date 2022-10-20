import {ChatResponse} from "@/types/chat";
import axios from "axios";
import router from "@/router";

export class ApiService {

    static teste(message: string): ChatResponse {
        let teste = ""
        axios.post(process.env.VUE_APP_URL_API_DIABETES + '/api/v1/watson/message', {
            message: message
        }).then(function (response) {
            console.log(response)
            teste = response.data.message
        }).catch(function (error) {
            console.log(error)
        })

        console.log(teste)
        return {
            response: {
                type: "text",
                response: teste
            }
        }
    }


}
