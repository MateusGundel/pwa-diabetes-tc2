<template>
  <div class="row d-flex justify-content-center h-100">
    <div class="col-md-10 col-lg-8 col-xl-6">
      <div class="card" id="chat">
        <div class="card-body" data-mdb-perfect-scrollbar="true">
          <chat-card name="doris" message="Olá, como posso te ajudar ?"></chat-card>
          <chat-card name="user" message="Como cuido dos meus pés?"></chat-card>
          <chat-card name="doris" message="Você pode fazer da seguinte forma..."></chat-card>
        </div>
        <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
          <input type="text" class="form-control" id="exampleFormControlInput1"
                 placeholder="Digite uma mensagem...">
          <a class="ms-3 btn-send-message"><i class="bi bi-send"></i></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {ChatList} from "@/types/chat";
import ChatCard from "@/components/chat/ChatCard.vue";


export default defineComponent({
  components: {ChatCard},
  setup() {
    const chatList = ref<ChatList>([]);

    const getChatList = (): ChatList => {
      return [
        {
          response:  {
            type: "text",
            response: "teste"
          }
        },
        {
          message: "testeeeeee"
        }
      ];
    }

    chatList.value = getChatList();

    return {chatList};
  }
});
</script>

<style scoped>
#chat {
  height: calc(100vh - 56px);
}
.btn-send-message {
  margin-left: 1rem;
}

</style>