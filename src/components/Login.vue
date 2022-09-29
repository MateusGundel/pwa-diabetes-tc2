<template>
  <div class="container vertical-center">
    <form class="row" @submit.prevent="onSubmit">
      <div class="col-12">
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
          <input v-model="form.username"
                 class="form-control"
                 placeholder="Email"
                 required>
        </div>
      </div>
      <div class="col-12">
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="bi bi-key-fill"></i></span>
          <input v-model="form.password"
                 type="password"
                 class="form-control"
                 placeholder="Senha">
        </div>
      </div>

      <div class="col-12">
        <div class="text-danger my-2">{{ userStore.state.error }}</div>
        <button type="submit" class="btn btn-primary button-login">Entrar</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import userStore from '@/stores/user'

export default defineComponent({
  name: 'LoginApp',
  setup() {
    const form = reactive({
      username: '',
      password: ''
    })

    const onSubmit = () => {
      userStore.login(form.username, form.password)
      form.username = ''
      form.password = ''
    }

    return {form, userStore, onSubmit}
  }
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
  padding: 3rem;
}
</style>