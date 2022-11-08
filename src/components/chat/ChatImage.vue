<template>

  <img v-if="type === 'doris'" class="avatar" src="../../assets/images/doris-sozinha.jpg"
       :alt="type" style="width: 45px; height: 100%;">
  <img v-else class="avatar" src="../../assets/images/user-avatar.png"
       :alt="type" style="width: 45px; height: 100%;">
</template>

<script>

export default {
  name: "ChatImage",
  props: {
    type: String,
  }
}
</script>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>