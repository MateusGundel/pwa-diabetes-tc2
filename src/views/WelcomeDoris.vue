<template>
  <div class="welcome">
    <header-app></header-app>
    <div class="body">
      <img class="doris-image" src="../assets/images/doris-sozinha.jpg">
      <p class="doris-fala">Olá, eu sou a Dóris. Estou aqui para te mostrar dicas e informações que vão te ajudar a
        cuidar da sua saúde e da diabetes. Minha missão é contribuir para o seu bem-estar e sua qualidade de vida.</p>
      <a href="/welcome_doris_voce" class="next-page"><i class="bi bi-arrow-right-circle-fill"></i></a>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";

export default defineComponent({
  name: 'WelcomeDoris',
  components: {HeaderApp},


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
  font-size: 1.5rem;
  color: black;
}

.next-page i{
  color: #145C9E;
  font-size: 60px;
}

</style>