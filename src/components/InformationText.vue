<template>
  {{ page }}
  {{ informacoes }}
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from "axios";

export default defineComponent({
  name: "InformationText",
  props: {
    page: String
  },
  data() {
    return {
      informacoes: String
    }
  },
  created() {
    console.log(localStorage.getItem("user_token"))
    axios.get(process.env.VUE_APP_URL_API_DIABETES + '/api/v1/algum',
        {
          headers: {
            Authorization: localStorage.getItem("user_token") || "",
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log(response)
          this.informacoes = response.data.text
        })
        .catch((error) => {
          console.log('error ' + error);
        });
  }
});
</script>

<style scoped>
</style>