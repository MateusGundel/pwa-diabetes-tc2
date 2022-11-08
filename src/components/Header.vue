<template>
  <nav class="navbar navbar-expand-lg navbar-dark header">
    <div class="container-fluid">
      <a v-if="back_button === 'home'" href="/home" class="navbar-brand"><i class="bi bi-arrow-left"></i></a>
      <a v-else class="navbar-brand"></a>
      <!--      <button type="button" class="navbar-toggler" data-bs-toggle="collapse"-->
      <!--              data-bs-target="#navbarCollapse">-->
      <!--        <span class="navbar-toggler-icon"></span>-->
      <!--      </button>-->
      <!--      <div class="collapse navbar-collapse" id="navbarCollapse">-->
      <!--        <div class="navbar-nav">-->
      <!--          <a href="/" :class="'nav-item nav-link '+ activePage('home')">{{ $t('home') }}</a>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import userStore from '@/stores/user'

export default defineComponent({
  name: "HeaderApp",
  props: {
    back_button: String
  },
  setup() {
    return {userStore}
  }

});
</script>

<style scoped>
nav {
  background-color: #3C3A6C;
  min-height: 56px;
}
header{
  max-height: var(--header-height);
}
</style>