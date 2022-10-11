<template>

  <img v-if="name === 'doris'" class="avatar" src="../../assets/images/doris-sozinha.jpg"
       :alt="name" style="width: 45px; height: 100%;">
  <img v-else class="avatar" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
       :alt="name" style="width: 45px; height: 100%;">
</template>

<script>

export default {
  name: "ChatImage",
  props: {
    name: String,
  }
}
</script>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>