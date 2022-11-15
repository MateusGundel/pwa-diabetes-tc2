<template>
  <div v-if="chat_object.type==='doris'" class="d-flex flex-row justify-content-start mb-4">
    <chat-image :type="chat_object.type"></chat-image>
    <chat-text :type="chat_object.type" :message="chat_object.message"></chat-text>
  </div>
  <div v-else-if="chat_object.type==='doris-image'" class="d-flex flex-row justify-content-start mb-4">
    <chat-image type="doris"></chat-image>
    <img class="chat-image" :src="chat_object.message">
  </div>
  <div v-else class="d-flex flex-row justify-content-end mb-4">
    <chat-text :type="chat_object.type" :message="chat_object.message"></chat-text>
    <chat-image :type="chat_object.type"></chat-image>
  </div>
  <div v-if="chat_object.type==='doris'" class="options">
    <div class="d-grid option" v-for="item in chat_object.options" :key="item">
      <button class="btn" @click="$emit('send-message', item)">{{ item }}</button>
    </div>
  </div>
</template>

<script>
import ChatImage from "@/components/chat/ChatImage";
import ChatText from "@/components/chat/ChatText";

export default {
  name: "ChatCard",
  components: {ChatText, ChatImage},
  emits: ["send-message"],
  props: {
    chat_object: {}
  }
}
</script>

<style scoped>
.option {
  margin: 1rem 0 1rem 0;
}

.option button {
  background-color: #C8D5E0;
  border-color: #C8D5E0;
  border-radius: 10%;
  color: black;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.option button:active,
.option button:hover {
  background-color: #abd3f3;
  border-color: #abd3f3;
  color: black;
}

@media (max-width: 600px) {
  .chat-image {
    max-width: 90%;
    padding: 1rem 1rem 1rem 1rem;
  }
}

@media (min-width: 600px) {
  .chat-image {
    max-width: 50%;
    padding: 1rem 1rem 1rem 1rem;
  }
}
</style>