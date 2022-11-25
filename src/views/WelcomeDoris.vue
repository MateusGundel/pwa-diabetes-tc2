<template>
  <div class="welcome">
    <header-app back_button="entry_menu"></header-app>
    <div class="body">
      <img class="doris-image" src="../assets/images/doris-sozinha.jpg">
      <div class="doris-fala">
        <p class="">Olá, eu sou a Dóris.</p>
        <p class="">Sou uma assistente virtual e vou conversar com você. Estou aqui para te
          mostrar dicas e informações que vão te ajudar a cuidar da sua saúde e da diabetes. Minha missão é contribuir
          para o seu bem-estar e sua qualidade de vida.</p>
      </div>
      <router-link class="next-page" :to="{name: 'welcome_doris_voce'}"><i class="bi bi-arrow-right-circle-fill"></i>
      </router-link>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";
import userStore from "@/stores/user";

export default defineComponent({
  name: 'WelcomeDoris',
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

.doris-fala {
  margin: 4rem 0 2rem 0;
  font-size: 1.4rem;
  color: black;
}

.next-page i {
  color: #145C9E;
  font-size: 60px;
}

</style>