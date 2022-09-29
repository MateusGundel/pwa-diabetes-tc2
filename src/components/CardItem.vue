<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
    </div>
    <a :href="link" class="stretched-link"></a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "CardItem",
  props: {
    title: String,
    link: String,
  },
});
</script>

<style scoped>
.card {
  background-color: #dcc7be;
  margin-bottom: 1.5rem;
  padding: 1.5rem 0 1.5rem 0;
}
</style>