<template>
  <div class="container vertical-center">
    <form class="row">
      <div class="col-12">
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
          <input type="text" class="form-control" placeholder="Email" aria-label="Email"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="col-12">
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="bi bi-key-fill"></i></span>
          <input type="text" class="form-control" placeholder="Senha" aria-label="Senha">
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary button-login">Login</button>
      </div>
    </form>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'LoginApp',
});
</script>

<style scoped>

.button-login {
  background-color: #0B4F6C;
  border-color: #0B4F6C;
}

.vertical-center {
  min-height: 90%; /* Fallback for browsers do NOT support vh unit */
  min-height: 90vh; /* These two lines are counted as one :-)       */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>