<template>
  <div id="app" class="bg-light">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/Navigation/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
* {
  background-color: #f8f9fa !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
