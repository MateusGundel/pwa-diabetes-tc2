<template>
  <div class="welcome">
    <header-app back_button="autocuidado"></header-app>
    <div class="body">
      <div class="diabetes">
        <p class="title"><b>Diabetes</b></p>
        <img src="../assets/images/diabetes-view.jpeg">
        <p class="info">Diabetes is a condition in which the levels of blood sugar (glycemia) become too high due to a problem that occurs in the pancreas, which produces low levels/or is uncapable of producing insulin. It is the insulin that reduces the levels of blood sugar, allowing the glucose present in the bloodstream, originating from our food intake, to enter the body cells to be converted into energy. </p>
        <p class="info">When blood glucose becomes too high (hyperglicemia) for long periods of time, long term complications might occur. Intending to regulate and avoid all that, medicines are prescribed and, depending on the situation, the application of insulin. But, besides that, having good health habits are key to the success in the treatment of diabetes. Take care of your health as a whole is part of the treatment and it helps to maintain a more appropriate health state. </p>
      </div>
      <div class="doris">
        <button v-on:click="this.$router.push('welcome_doris_instructions') " class="btn btn-info">Chat with Dóris</button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";
import userStore from "@/stores/user";

export default defineComponent({
  name: 'AutocuidadoView',
  components: {HeaderApp},
  created() {
    userStore.saveAction(window.location.pathname, 'url');
  }

});
</script>

<style scoped>
.body {
  padding: 2rem 1.5rem 0 1.5rem;
}

.doris-image {
  border-radius: 100%;
  max-width: 30%;
  border: #3C3A6C solid 1px;
}

.doris {
  padding-top: 2rem;
}

.doris .btn {
  background-color: #145C9E;
  border-color: #145C9E;
  color: #ffffff;
  padding: 0.2rem 2rem 0.2rem 2rem;
}
.next-page i {
  color: #145C9E;
  font-size: 60px;
}

.diabetes .info {
  line-height: 1.4rem;
  font-size: 0.95rem;
  margin: 0;
}

.diabetes img {
  max-height: 124px;
  margin-bottom: 1rem;
  border: #3C3A6C solid 2px;
}

</style>