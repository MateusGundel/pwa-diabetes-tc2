<template>
  <div class="welcome">
    <header-app back_button="welcome_doris"></header-app>
    <div class="body">
      <img class="doris-image" src="../assets/images/doris-sozinha.jpg">
      <div class="textos">
        <p>Inicialmente, quero te apresentar alguém muito importante.</p>
        <p>Isso mesmo, tem uma pessoa que é muito importante e especial para sua vida.</p>
        <p><b>Sabe quem é? Você!</b></p>
        <p>Você é a pessoa mais importante para a sua vida e para cuidar da sua saúde.</p>
        <p>Sabe por que? Porque quando você consegue cuidar de si mesmo, se sentir bem, ficar feliz e orgulhoso de si
          mesmo e também com o mundo ao seu redor, a vida fica mais leve e mais tranquila.</p>
        <p><b>E você sabe como isso se chama? Autocuidado.</b></p>
      </div>
      <router-link class="next-page" :to="{name: 'autocuidado'}"><i class="bi bi-arrow-right-circle-fill"></i>
      </router-link>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";
import userStore from '@/stores/user'

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

</style>