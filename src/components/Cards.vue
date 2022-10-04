<template>
  <div class="menu">
    <img src="../assets/images/logo_diabetes.png">
    <div class="row">
      <div class="col-sm-12">
        <card-item :title="$t('food_info')" link="/alimentacao"></card-item>
      </div>
      <div class="col-sm-12">
        <card-item :title="$t('physical_activity')" link="/atividade_fisica"></card-item>
      </div>
      <div class="col-sm-12">
        <card-item :title="$t('diabetic_foot')" link="/pe_diabetico"></card-item>
      </div>
      <div class="col-sm-12">
        <card-item :title="$t('chat_doris')" link="/doris"></card-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CardItem from "@/components/CardItem.vue";

export default defineComponent({
  name: "CardsMenu",
  components: {CardItem}
});
</script>

<style scoped>
.menu {
  padding: 1.5rem 3rem;
}

@media (max-width: 600px) {
  .menu img {
    max-width: 80%;
    padding-bottom: 1.5rem;
  }
}

@media (min-width: 600px) {
  .menu img {
    max-width: 20%;
    padding-bottom: 1.5rem;
  }
}

</style>