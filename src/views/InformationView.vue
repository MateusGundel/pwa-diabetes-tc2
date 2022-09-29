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

export default defineComponent({
  name: "InformationView",
  components: {InformationText, HeaderApp},
  props: {page: String},

});
</script>

<style scoped>

</style>