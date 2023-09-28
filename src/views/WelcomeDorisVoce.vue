<template>
  <div class="welcome">
    <header-app back_button="welcome_doris"></header-app>
    <div class="body">
      <img class="doris-image" src="../assets/images/doris-sozinha.jpg">
      <div class="textos">
        <p>Initially, I want to introduce you someone who is very important.</p>
        <p>That’s right! There is someone who is very important and special for your life.</p>
        <p><b>Do you know who it is? It’s You!</b></p>
        <p>You are the most important person for your life and to take care of your health.</p>
        <p>Do you know why? That’s because when you can take care of yourself, feel good about yourself, are happy and proud of yourself and with the world around you, life gets lighter and more peaceful.</p>
        <p><b>Do you know how this is called? Self-care.</b></p>
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