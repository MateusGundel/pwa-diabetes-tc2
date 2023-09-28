<template>
  <div class="entry background-app">
    <router-link class="back" :to="{name: 'entry'}"><i class="bi bi-arrow-left"></i></router-link>
    <img class="logo-app" src="../assets/images/logo-text.png">
    <div class="buttons">
      <router-link class="btn btn-info" :to="{name: 'welcome_doris'}">Tutorial</router-link>
      <router-link class="btn btn-info" :to="{name: 'home'}">Chat with Dóris</router-link>
    </div>
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

.buttons {
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons .btn {
  background-color: #145C9E;
  border-color: #145C9E;
  color: #ffffff;
  margin-top: 2vh;
  padding: 0.2rem 2rem 0.2rem 2rem;
}

.back {
  align-self: flex-start;
}

.back i {
  color: white;
  font-size: 20px;
}
</style>