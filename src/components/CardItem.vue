<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
    </div>
    <a @click="addSessionRedirect(title)" class="stretched-link"></a>
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
  methods: {
    async addSessionRedirect(message: string) {
      localStorage.setItem('start_message', message);
      this.$router.push({name: "doris"})
    }
  }
});
</script>

<style scoped>
.card {
  background-color: #ffffff;
  margin-bottom: 1.5rem;
  color: #145C9E;
  border-radius: 20px;
  cursor: pointer;
}

.card-title {
  font-weight: bold;
}

</style>