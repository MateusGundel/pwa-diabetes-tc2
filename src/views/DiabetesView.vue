<template>
  <div class="welcome">
    <header-app></header-app>
    <div class="body">
      <div class="diabetes">
        <p class="title"><b>Diabetes</b></p>
        <img src="../assets/images/saiba_mais_dm.png">
        <p class="info">A diabetes é uma condição em que os níveis de açúcar no sangue (glicemia) ficam elevados devido
          a algum
          problema que ocorre no pâncreas, que produz pouca/ou que não consegue produzir insulina. É a insulina que
          reduz os níveis de açúcar no sangue, permitindo que a glicose presente na corrente sanguínea, proveniente da
          nossa alimentação, entre nas células corporais e seja convertida em energia.</p>
        <p class="info">Quando a glicose fica elevada no sangue (hiperglicemia) por longos períodos podem acontecer
          complicações a
          longo prazo. Para regular e evitar tudo isso, são indicados medicamentos e dependendo do caso, aplicação de
          insulina. Mas além disso, ter bons hábitos de saúde são a chave do sucesso no tratamento da diabetes. Cuidar
          da saúde como um todo faz parte do tratamento e auxilia na manutenção de um estado de saúde mais adequado.</p>
      </div>
      <div class="doris">
        <a href="/home" class="next-page"><img class="doris-image"
                                               src="../assets/images/doris-sozinha.jpg"></a>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderApp from "@/components/Header.vue";

export default defineComponent({
  name: 'AutocuidadoView',
  components: {HeaderApp},


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
  padding-top: 1rem;
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