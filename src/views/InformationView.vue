<template>
  <header-app></header-app>
  <div>
    <p>{{ page }}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";

export default defineComponent({
  name: "InformationView",
  components: {HeaderApp},
  props: {page: String},
});
</script>

<style scoped>

</style>