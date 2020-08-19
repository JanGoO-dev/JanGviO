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
    NavBar
  }
};
</script>

<style lang="scss">
* {
  background-color: #f8f9fa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.rounded-top-left {
  border-top-left-radius: 10px !important;
}
.rounded-top-right {
  border-top-right-radius: 10px !important;
}
.rounded-bottom-left {
  border-bottom-left-radius: 10px !important;
}
.rounded-bottom-right {
  border-bottom-right-radius: 10px !important;
}
.rounded-full {
  border-radius: 100%;
}
</style>
