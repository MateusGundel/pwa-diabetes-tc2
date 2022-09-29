<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div v-if="type !== 'login'" class="container-fluid">
      <a href="#" class="navbar-brand"></a>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
          <a href="/" class="nav-item nav-link active">Home</a>
        </div>
        <div class="navbar-nav ms-auto">
          <a @click="userStore.logout()" class="nav-item nav-link logout-button-link">Sair</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import userStore from '@/stores/user'

export default defineComponent({
  name: "HeaderApp",
  props: {
    type: String,
  },
  setup() {
    return {userStore}
  }
});
</script>

<style scoped>
nav {
  background-color: #145C9E;
  min-height: 56px;
}

.logout-button-link {
  cursor: pointer;
}
</style>