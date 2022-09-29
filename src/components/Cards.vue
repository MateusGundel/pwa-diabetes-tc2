<template>
  <div class="menu">
    <div class="row">
      <div class="col-sm-4">
        <card-item title="Alimentação" link="/inform/alimentacao"></card-item>
      </div>
      <div class="col-sm-4">
        <card-item title="Atividades Físicas" link="/inform/atividade_fisica"></card-item>
      </div>
      <div class="col-sm-4">
        <card-item title="Pé diabético" link="/inform/pe_diabetico"></card-item>
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
</style>