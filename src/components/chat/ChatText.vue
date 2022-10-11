<template>
  <p v-if="name === 'doris'" class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">{{ message }}</p>
  <p v-else class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">{{message}}</p>
</template>

<script>
export default {
  name: "ChatText",
  props:{
    name: String,
    message: String
  },
}
</script>

<style scoped>

</style>