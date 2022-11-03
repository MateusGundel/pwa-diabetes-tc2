<template>
  <div class="background-app">
    <cards-menu></cards-menu>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CardsMenu from "@/components/Cards.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    CardsMenu,
  },
});
</script>

<style scoped>

</style>