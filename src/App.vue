<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.background-app {
  background-image: url("/src/assets/images/fondo.png");
  height: 100%;
}

@media (max-width: 600px) {
  .background-app {
    padding: 1.5rem 3rem;
    background-size: 100%;
  }
}

@media (min-width: 600px) {
  .background-app {
    padding: 10vh 30vw;
    background-size: 35%;
  }
}
</style>
