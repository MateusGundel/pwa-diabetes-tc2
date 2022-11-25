<template>
  <router-view/>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  created() {
    this.createUserSession();
  },
  methods: {
    async createUserSession() {
      let hash = localStorage.getItem('user_hash');
      console.log(hash)
      if (!hash) {
        let hash = await this.generateHash();
        localStorage.setItem('user_hash', hash);
      }
    },
    async generateHash() {
      let string_base = new Date().toJSON()
      string_base = string_base + window.location.host
      const utf8 = new TextEncoder().encode(string_base);
      const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray
          .map((bytes) => bytes.toString(16).padStart(2, '0'))
          .join('');
    }
  }

});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.background-app {
  background-image: url("/src/assets/images/fondo.png");
  height: 100%;
}

@media (max-width: 600px) {
  .background-app {
    padding: 1.5rem 3rem;
    background-size: 100%;
  }
}

@media (min-width: 600px) {
  .background-app {
    padding: 10vh 30vw;
    background-size: 35%;
  }
}
</style>
