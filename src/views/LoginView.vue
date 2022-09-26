<template>
  <header-app type="login"></header-app>
  <LoginApp></LoginApp>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LoginApp from '@/components/Login.vue';
import HeaderApp from "@/components/Header.vue"; // @ is an alias to /src

export default defineComponent({
  name: 'LoginView',
  components: {
    HeaderApp,
    LoginApp,
  }
});
</script>
  