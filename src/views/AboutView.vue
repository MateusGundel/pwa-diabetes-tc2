<template>
  <header-app></header-app>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";
import userStore from "@/stores/user";

export default defineComponent({
  components: {HeaderApp},
  created() {
    userStore.saveAction(window.location.pathname, 'url');
  }
});
</script>