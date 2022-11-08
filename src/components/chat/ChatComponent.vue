<template>
  <div class="row d-flex justify-content-center calculated-height">
    <div class="col-md-10 col-lg-8 col-xl-6 h-100">
      <div class="card h-100" id="chat">
        <div class="card-body">
          <div v-for="chat in chatList" :key="chat">
            <chat-card :chat_object="chat" v-on:send-message="sendMessage"></chat-card>
          </div>
        </div>
        <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
          <input v-on:keyup.enter="sendMessage()" type="text" class="form-control" id="exampleFormControlInput1"
                 placeholder="Digite uma mensagem..." v-model="textMessage">
          <a class="ms-3 btn-send-message" @click="sendMessage()"><i class="bi bi-send"></i></a>
        </div>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {ChatList} from "@/types/chat";
import ChatCard from "@/components/chat/ChatCard.vue";
import axios from "axios";


export default defineComponent({
  components: {ChatCard},
  data() {
    return {textMessage: ""}
  },
  created() {
    this.getChatSession()
  },
  setup() {
    const chatList = ref<ChatList>([]);
    // const getChatList = (): ChatList => {
    //   return [
    //     {message: "alimentação", type: "user"},
    //     {message: "?????", type: "doris", options: ["teste", "teste3"]}
    //   ];
    // }
    //
    // chatList.value = getChatList();

    return {chatList};
  },
  methods: {
    async sendMessage(message?: string) {
      let chat = this.chatList;
      console.log(message)
      if (!message) {
        message = this.textMessage;
      }
      this.chatList.forEach((element) => {
        if (element.options) {
          delete element['options']
        }
      })
      if (message) {
        chat.push({message: message, type: 'user'});
        this.textMessage = "";
        const options = {
          headers: {'Content-Type': 'application/json'}
        };
        const data = JSON.stringify({
          "message": message,
          "session": localStorage.getItem('chat_session')
        });
        await axios.post(process.env.VUE_APP_URL_API_DIABETES + '/api/v1/watson/message', data, options)
            .then(function (response) {
              console.log(response)
              for (let object of response.data) {
                chat.push(object);
              }
            }).catch(function (error) {
              console.log(error);
            })
      }
    },
    async getChatSession() {
      const options = {
        headers: {'Content-Type': 'application/json'}
      };
      await axios.get(process.env.VUE_APP_URL_API_DIABETES + '/api/v1/watson/session', options)
          .then(function (response) {
            localStorage.setItem('chat_session', response.data.session);
            console.log("new requested")
          }).catch(function (error) {
            console.log(error);
          });
      let start_message = localStorage.getItem('start_message');
      if (start_message) {
        await this.sendMessage(start_message);
      }
    }
  }
});
</script>

<style scoped>
.calculated-height {
  height: calc(100% - var(--header-height));
}

.row {
  --bs-gutter-x: 0;
}

#chat {
  border-radius: 0;
}

.btn-send-message {
  margin-left: 1rem;
  cursor: pointer;
}

.card-body {
  overflow: scroll;
}
</style>/