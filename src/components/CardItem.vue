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
  background-color: #ffffff;
  margin-bottom: 1.5rem;
  color: #145C9E;
  border-radius: 20px;
}

.card-title {
  font-weight: bold;
}

</style>