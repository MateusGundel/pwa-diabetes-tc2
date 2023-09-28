<template>
  <div class="welcome">
    <header-app back_button="welcome_doris_voce"></header-app>
    <div class="body">
      <div class="autocuidado-view">
        <p><b>Self-care</b></p>
        <p>Self-care are words that refer to your actions to take care of yourself. They are important to bring us a better quality of life, strengthen our self-esteem, our self-confidence, and our capacity to make decisions in the face of the day-to-day challenges.</p>
        <p>We know that for those who live with diabetes, self-care is an essential tool to deal with the changes in the lifestyle and to follow the treatments prescribed.</p>
        <router-link class="btn btn-info" :to="{name: 'diabetes'}">Know more about diabetes</router-link>
      </div>
      <div class="doris">
        <p><b>Let’s go! I’m here to help with your self-care</b></p>
        <router-link class="btn btn-info" :to="{name: 'welcome_doris_instructions'}">Chat with Dóris</router-link>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";
import userStore from "@/stores/user";

export default defineComponent({
  name: 'WelcomeDoris',
  components: {HeaderApp},
  created() {
    userStore.saveAction(window.location.pathname, 'url');
  }

});
</script>

<style scoped>
.body {
  padding: 2rem;
}

.doris-image {
  border-radius: 100%;
  max-width: 30%;
  border: #3C3A6C solid 1px;
}

.autocuidado-view {
  padding-top: 2rem;
}

.autocuidado-view .btn {
  background-color: #145C9E;
  border-color: #145C9E;
}

.doris {
  padding-top: 3rem;
}

.welcome .btn {
  background-color: #145C9E;
  border-color: #145C9E;
  color: #ffffff;
  padding: 0.2rem 2rem 0.2rem 2rem;
}


</style>