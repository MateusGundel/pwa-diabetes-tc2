<template>
  <header-app></header-app>
  <div>
    <information-text :page="page"></information-text>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";
import InformationText from "@/components/InformationText.vue";
import userStore from "@/stores/user";

export default defineComponent({
  name: "InformationView",
  components: {InformationText, HeaderApp},
  props: {page: String},
  created() {
    userStore.saveAction(window.location.pathname, 'url');
  }
});
</script>

<style scoped>

</style>