<template>
  <div class="welcome">
    <header-app></header-app>
    <div class="body">
      <div class="autocuidado-view">
        <p><b>Autocuidado</b></p>
        <p>O autocuidado é uma palavra que se refere às atitudes que você tem para cuidar de você mesmo. Ele é
          importante
          para nos proporcionar maior qualidade de vida, fortalecer nossa autoestima, nossa autoconfiança e a nossa
          capacidade de tomar decisões frente aos desafios do dia a dia.</p>
        <p>Sabemos que para quem vive com diabetes, o autocuidado é uma ferramenta essencial, para lidar com as mudanças
          no estilo de vida e para seguir com os tratamentos indicados.</p>
        <button v-on:click="this.$router.push('diabetes')" class="btn btn-primary">Saiba mais</button>
      </div>
      <div class="doris">
        <p><b>Vamos lá! Estou aqui para te ajudar no seu autocuidado.</b></p>
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
  name: 'WelcomeDoris',
  components: {HeaderApp},


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

</style>