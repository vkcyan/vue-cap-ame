<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$showLoading()
    setTimeout(() => {
      this.$hideLoading()
    }, 20000);
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
