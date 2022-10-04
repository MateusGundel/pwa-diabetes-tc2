<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div v-if="type !== 'login'" class="container-fluid">

      <a v-if="back_button === 'home'" href="/" class="navbar-brand"><i class="bi bi-arrow-left"></i></a>
      <a v-else class="navbar-brand"></a>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
          <a href="/" :class="'nav-item nav-link '+ activePage('home')">{{ $t('home') }}</a>
        </div>
        <div class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
              {{ $t('language') }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" v-on:click="changeLanguage('pt')">Português</a></li>
              <li><a class="dropdown-item" v-on:click="changeLanguage('es')">Espanhol</a></li>
            </ul>
          </li>
          <a v-on:click="userStore.logout()" class="nav-item nav-link logout-button-link">{{ $t('exit') }}</a>
        </div>
      </div>
    </div>
    <div v-else class="container-fluid">
      <a href="#" class="navbar-brand"></a>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
              Linguagem
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" v-on:click="changeLanguage('pt')">Português</a></li>
              <li><a class="dropdown-item" v-on:click="changeLanguage('es')">Espanhol</a></li>
            </ul>
          </li>
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
    actual_page: String,
    back_button: String
  },
  setup() {
    return {userStore}
  },
  methods: {
    changeLanguage(value: string) {
      this.$i18n.locale = value
    },
    activePage(parameter: string) {
      if (this.actual_page == parameter) {
        return 'active'
      }
      return ''
    }
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