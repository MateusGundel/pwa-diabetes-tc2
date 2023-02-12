<template>
  <div class="welcome">
    <header-app back_button="autocuidado"></header-app>
    <div class="body">
      <img class="doris-image" src="../assets/images/doris-sozinha.jpg">
      <div class="textos">
        <p>Preciso te passar algumas informações rápidas.</p>
        <p>Quando você me perguntar alguma coisa no chat, eu irei me comunicar com você através de texto da fala
          também!</p>
        <p>Se você não quiser me ouvir, você pode clicar no pause <i class="bi bi-pause-circle"></i> ou também no botão
          de volume <i class="bi bi-volume-up-fill"></i> no começo do chat.</p>
        <img src="../assets/images/instrucao-1.png">
        <p>Para interagir comigo, pode usar os botões com as sugestões ou então escrever alguma coisa.</p>
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