<template>
  <div>
    <header id="main-nav" class="navbar navbar-expand-lg navbar-light bg-white ml-5 fixed-top">
      <div class="d-flex flex-column align-items-left ml-5" href="#">
        <span class="bg-white h5 mb-0">JanGvio</span>
        <small class="bg-white text-muted">Lorem Ipsem Maseep!</small>
      </div>
      <div class="main-links ml-auto pl-5 bg-white">
        <div v-for="(mainLink, index) in mainLinks" :key="index" class="avatar bg-white">
          <img
            :src="require(`@/assets/${mainLink.src}`)"
            width="30"
            height="30"
            alt="Profile Avatar"
            class="avatar bg-white"
            :class="{ invisible: mainLink.invisible }"
            :id="mainLink.tooltip"
          />
          <b-tooltip
            :target="mainLink.tooltip"
            placement="bottom"
            offset="0"
            variant="primary"
          >{{ mainLink.tooltip }}</b-tooltip>
        </div>
      </div>
      <div id="addBtn" class="pl-2">
        <addBtn></addBtn>
      </div>
      <div class="nav-buttons ml-auto bg-white">
        <button
          v-b-modal.signInModal
          type="button"
          class="btn btn-outline-primary btn-sm px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
        >Sign In</button>
        <button
          v-b-modal.signUpModal
          type="button"
          class="btn btn-danger btn-sm px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
        >Sign Up</button>
        <SignInModal></SignInModal>
        <SignUpModal></SignUpModal>
      </div>
    </header>
    <header id="aside" class="navbar navbar-light bg-white flex-column fixed-bottom h-100">
      <a href="#" class="bg-white p-1 mb-5">
        <img class="bg-white" src="@/assets/logo.png" width="35" height="35" alt="JanGvio Logo" />
      </a>
      <div class="mb-auto bg-transparent mt-5">
        <div v-for="(sideLink, index) in sideLinks" :key="index" class="avatar mb-5">
          <img
            src="@/assets/avatar.png"
            width="30"
            height="30"
            alt="Profile Avatar"
            class="avatar bg-white"
            :id="sideLink.tooltip"
          />
          <b-tooltip
            :target="sideLink.tooltip"
            placement="right"
            offset="0"
            variant="primary"
            class="tooltip-right"
          >{{ sideLink.tooltip }}</b-tooltip>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import addBtn from "../Navigation/addBtn";
import SignInModal from "../Auth/SignInModal";
import SignUpModal from "../Auth/SignUpModal";
export default {
  components: {
    addBtn,
    SignInModal,
    SignUpModal
  },
  data() {
    return {
      mainLinks: [
        { tooltip: "Explore", invisible: false, src: "explore.svg" },
        { tooltip: "Premium", invisible: false, src: "premium.svg" },
        { tooltip: "Empty", invisible: true, src: "avatar.png" },
        { tooltip: "Following", invisible: false, src: "following.svg" },
        { tooltip: "Search", invisible: false, src: "search.svg" }
      ],
      sideLinks: [{ tooltip: "One" }]
    };
  }
};
</script>

<style lang="scss" scoped>
#main-nav {
  height: 60px !important;
  box-shadow: 0 4px 7px -10px #000;
  .main-links {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    gap: 5em;
    padding: 15px;
    position: relative;
  }
}
#addBtn {
  position: absolute;
  left: 50%;
  margin-left: -50px;
}
#aside {
  width: 70px !important;
  box-shadow: 4px 58px 7px -10px #000;
}
.avatar {
  // border-radius: 100%;
}
.tooltip {
  margin: 20px;
  font-size: 18px;
}
</style>
