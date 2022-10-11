<template>
  <header-app back_button="home"></header-app>
  <chat-component></chat-component>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";
import ChatComponent from "@/components/chat/ChatComponent.vue";

export default defineComponent({
  components: {ChatComponent, HeaderApp},

});
</script>