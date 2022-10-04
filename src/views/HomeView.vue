<template>
  <header-app actual_page="home"></header-app>
  <cards-menu></cards-menu>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";
import CardsMenu from "@/components/Cards.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    CardsMenu,
    HeaderApp,
  },
});
</script>
