<template>
  <header-app></header-app>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";

export default defineComponent({
  components: {HeaderApp},
  setup() {
    const information = ""

    return information
  }

});
</script>