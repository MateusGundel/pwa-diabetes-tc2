<template>
  <div class="background-app">
    <router-link class="back" :to="{name: 'entry_menu'}"><i class="bi bi-arrow-left"></i></router-link>

    <cards-menu></cards-menu>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CardsMenu from "@/components/Cards.vue";
import userStore from "@/stores/user";

export default defineComponent({
  name: 'HomeView',
  components: {
    CardsMenu,
  },  created() {
    userStore.saveAction(window.location.pathname, 'url');
  }
});
</script>

<style scoped>

.back i {
  float: left;
  color: white;
  font-size: 20px;
}
</style>