<template>
  <div>
    <img class="doris-image" src="../assets/images/doris-sozinha.jpg">
    <p class="doris-fala">Sobre o que você gostaria de conversar comigo?</p>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <card-item title="Alimentação" link="/doris"></card-item>
    </div>
    <div class="col-sm-12">
      <card-item title="Atividade Física" link="/doris"></card-item>
    </div>
    <div class="col-sm-12">
      <card-item title="Rótulos" link="/doris"></card-item>
    </div>
    <div class="col-sm-12">
      <card-item title="Pé diabético" link="/doris"></card-item>
    </div>0
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

@media (max-width: 600px) {
  .menu img {
    max-width: 50%;
    margin-bottom: 1.5rem;
  }
}

@media (min-width: 600px) {
  .menu img {
    max-width: 20%;
    margin-bottom: 1.5rem;
  }
}

.doris-image {
  border-radius: 100%;
  margin-top: 2rem;
}

.doris-fala {
  padding: 1rem 0 2rem 0;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
}

</style>