<template>
  <header-app back_button="home"></header-app>
  <div class="about">
    <h1>Paagina sobre alimentacao</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";

export default defineComponent({
  components: {HeaderApp},

});
</script>