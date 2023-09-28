<template>
  <div class="entry background-app">
    <img class="logo-app" src="../assets/images/logo-text.png">
    <router-link class="btn btn-info" :to="{name: 'entry_menu'}">Start</router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import userStore from "@/stores/user";

export default defineComponent({
  name: 'EntryView',
  created() {
    userStore.saveAction(window.location.pathname, 'url');
  }
});
</script>
<style scoped>
.entry {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 600px) {
  .entry img {
    max-width: 110%;
    padding-bottom: 1.5rem;
  }
}

@media (min-width: 600px) {
  .entry img {
    max-height: 55vh;
    padding-bottom: 1.5rem;
  }
}

.logo-app {
  padding-top: 20vh;

}

.entry .btn {
  background-color: #145C9E;
  border-color: #145C9E;
  color: #ffffff;
  margin-top: 20vh;
  padding: 0.2rem 2rem 0.2rem 2rem;
}

</style>