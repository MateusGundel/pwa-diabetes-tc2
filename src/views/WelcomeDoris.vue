<template>
  <div class="welcome">
    <header-app back_button="entry_menu"></header-app>
    <div class="body">
      <img class="doris-image" src="../assets/images/doris-sozinha.jpg">
      <div class="doris-fala">
        <p class="">Hello, I’m Dóris</p>
        <p class="">I’m here to show you tips and information that are going to help you to take care of your health and the diabetes. My mission is to assist with your well-being and your quality of life.</p>
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