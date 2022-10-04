<template>
  <div class="row d-flex justify-content-center h-100">
    <div class="col-md-10 col-lg-8 col-xl-6">
      <div class="card" id="chat">
        <div class="card-body" data-mdb-perfect-scrollbar="true">
          <div class="d-flex flex-row justify-content-start mb-4">
            <img class="avatar" src="../assets/images/doris-sozinha.jpg"
                 alt="avatar 1" style="width: 45px; height: 100%;">
            <div>
              <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Olá, eu sou Dóris</p>
              <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Estou aqui para lhe ajudar no
                que precisar!</p>
              <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Está com alguma dúvida?</p>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-end mb-4">
            <div>
              <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Como cuido dos meus pés?</p>
            </div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                 alt="avatar 1" style="width: 45px; height: 100%;">
          </div>

          <div class="d-flex flex-row justify-content-start mb-4">
            <img class="avatar" src="../assets/images/doris-sozinha.jpg"
                 alt="avatar 1" style="width: 45px; height: 100%;">
            <div>
              <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Você pode fazer da seguinte forma...</p>
            </div>
          </div>

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
import {defineComponent} from 'vue';

export default defineComponent({});
</script>

<style scoped>
.avatar {
  border-radius: 50%;
}

#chat {
  height: calc(100vh - 56px);
}
.btn-send-message {
  margin-left: 1rem;
}

</style>