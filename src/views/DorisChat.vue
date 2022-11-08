<template>
  <div class="chat">
    <header-app back_button="home"></header-app>
        <chat-component></chat-component>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";
import ChatComponent from "@/components/chat/ChatComponent.vue";

export default defineComponent({
  components: {HeaderApp, ChatComponent},

});
</script>

<style scoped>
.chat {
  height: 100%;
}
</style>