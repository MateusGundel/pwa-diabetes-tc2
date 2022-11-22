<template>
  <p v-if="type === 'doris'" class="small p-2 ms-3 mb-1 rounded-3 doris-message" style="background-color: #f5f6f7;">{{ message }}</p>
  <p v-else class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">{{message}}</p>
</template>

<script>
export default {
  name: "ChatText",
  props:{
    type: String,
    message: String
  },
}
</script>

<style scoped>
.doris-message{
  white-space: pre-wrap;
}
</style>