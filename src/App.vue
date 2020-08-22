<template>
  <div id="app" class="bg-light">
    <div v-show="$store.getters.get_loading">
      <Loading></Loading>
    </div>
    <div v-show="!$store.getters.get_loading">
      <NavBar></NavBar>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/Navigation/NavBar";
import Loading from "./components/Loading";
export default {
  components: {
    NavBar,
    Loading
  },
  beforeMount() {
    setTimeout(() => {
      this.$store.commit("toggle_loading");
    }, 2000);
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
.cursor-pointer {
  cursor: pointer;
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
.rounded-all {
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
.rounded-full {
  border-radius: 100%;
}
.color-fade {
  opacity: 0.6;
}
.text-fade {
  opacity: 0.2;
}
// button[type="button"] {
//   border-bottom-right-radius: 10px !important;
//   border-bottom-left-radius: 10px !important;
//   border-top-right-radius: 10px !important;
//   border-top-left-radius: 10px !important;
//   padding: 4px 30px;
// }
.logo-shadow-sm {
  border-radius: 3px;
  box-shadow: 2.5px 2.5px 10px -3px #00a2f3;
}
.premium-logo-shadow-sm {
  border-radius: 3px;
  box-shadow: 2.5px 2.5px 10px -3px gold;
}
.logo-shadow-lg {
  border-radius: 8px;
  box-shadow: 7px 7px 20px -3px #00a2f3;
}

.premium-border-bgImg {
  border: solid 4px gold !important;
}
.premium-border-bgImg::before {
  content: "Premium";
  background: gold;
  width: auto;
  height: auto;
  position: absolute;
  top: -0.85rem;
  right: 2rem;
  padding: 1px 20px;
  border-radius: 30px;
  color: rgb(114, 97, 0);
}
.premium-border-avatar {
  border: solid 2px gold !important;
}
img.target-addBtn {
  -webkit-transition: all 0.6s ease-in-out;
  -moz-transition: all 0.6s ease-in-out;
  -o-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
}
.rotate-forward {
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

.rotate-back {
  -webkit-transform: rotate(-0deg);
  -moz-transform: rotate(-0deg);
  -ms-transform: rotate(-0deg);
  -o-transform: rotate(-0deg);
  transform: rotate(-0deg);
}
</style>
