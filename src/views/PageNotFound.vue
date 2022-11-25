<template>
  <div>
    <h1>404 - Page Not Found</h1>
    <p>This page no longer exists or was moved to another location.</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import userStore from "@/stores/user";

export default defineComponent({
  name: "PageNotFound",
  created() {
    userStore.saveAction(window.location.pathname, 'url');
  }
});
</script>

<style scoped>

</style>