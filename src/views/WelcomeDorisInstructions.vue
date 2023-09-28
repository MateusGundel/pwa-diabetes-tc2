<template>
  <div class="welcome">
    <header-app back_button="autocuidado"></header-app>
    <div class="body">
      <img class="doris-image" src="../assets/images/doris-sozinha.jpg">
      <div class="textos">
        <p>I need to give you a few quick information.</p>
        <p>When you ask me something in the chat, I will communicate with you by text and speaking too! </p>
        <p>If you don’t want to listen to me, you can click pause  <i class="bi bi-pause-circle"></i> or the volume button <i class="bi bi-volume-up-fill"></i> in the beginning of the chat.</p>
        <img src="../assets/images/instrucao-1.png">
        <p>To interact with me, you can use the buttons with the suggestions, or you can type something.</p>
      </div>
      <router-link class="next-page" :to="{name: 'home'}"><i class="bi bi-arrow-right-circle-fill"></i>
      </router-link>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";
import userStore from "@/stores/user";

export default defineComponent({
  name: 'WelcomeDoris2',
  components: {HeaderApp},
  created() {
    userStore.saveAction(window.location.pathname, 'url');
  }
});
</script>

<style scoped>
.body {
  padding: 2rem;
}

.doris-image {
  border-radius: 100%;
  max-width: 40%;
  border: #3C3A6C solid 1px;
}

.textos {
  padding-top: 2rem;
}

.next-page i {
  color: #145C9E;
  font-size: 60px;
}

.textos img {
  max-width: 60vw;
  margin-bottom: 1rem;
  border: #3C3A6C solid 1px;
}

</style>