<template>
  <div v-if="name==='doris'" class="d-flex flex-row justify-content-start mb-4">
    <chat-image :name="name"></chat-image>
    <chat-text :name="name" :message="message"></chat-text>
  </div>
  <div v-else class="d-flex flex-row justify-content-end mb-4">
    <chat-text :name="name" :message="message"></chat-text>
    <chat-image :name="name"></chat-image>
  </div>
</template>

<script>
import ChatImage from "@/components/chat/ChatImage";
import ChatText from "@/components/chat/ChatText";
export default {
  name: "ChatCard",
  components: {ChatText, ChatImage},
  props: {
    name: String,
    message: String
  }
}
</script>

<style scoped>

</style>