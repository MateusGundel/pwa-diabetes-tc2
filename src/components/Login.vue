<template>
    <div class="container">
        <div class="login">
            <label for="user">Email</label>
            <input name="user" class="user" type="text">
            <label for="password">Senha</label>
            <input name="password" class="password" type="password">
            <button>Login</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginApp',
});
</script>

<style src="../assets/styles/login.css">

</style>