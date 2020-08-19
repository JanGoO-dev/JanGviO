<template>
  <div>
    <header id="main" class="navbar navbar-expand-lg navbar-light bg-white fixed-top ml-5">
      <div class="d-flex flex-column align-items-left ml-5" href="#">
        <span class="bg-white h5 mb-0">JanGvio</span>
        <small class="bg-white text-muted">Lorem Ipsem Maseep!</small>
      </div>
      <div class="main-links ml-auto bg-white">
        <div v-for="(mainLink, index) in mainLinks" :key="index" class="avatar bg-white">
          <img
            src="@/assets/avatar.png"
            width="30"
            height="30"
            alt="Profile Avatar"
            class="avatar bg-white"
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
      <div id="addBtn">
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
        { tooltip: "Explore" },
        { tooltip: "Premium" },
        { tooltip: "Following" },
        { tooltip: "Following" },
        { tooltip: "Search" }
      ],
      sideLinks: [
        { tooltip: "One" },
        { tooltip: "Two" },
        { tooltip: "Three" },
        { tooltip: "Four" },
        { tooltip: "Five" },
        { tooltip: "Six" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#main {
  height: 60px !important;
  box-shadow: 0 4px 7px -10px #000;
  .main-links {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    gap: 5em;
    padding: 15px;
    img {
      filter: grayscale(1);
    }
  }
  position: relative;
}
#addBtn {
  position: absolute;
  left: 46%;
}
#aside {
  width: 70px !important;
  box-shadow: 4px 58px 7px -10px #000;
}
.avatar {
  border-radius: 100%;
}
.tooltip {
  margin: 20px;
  font-size: 14px;
  letter-spacing: 1px;
}
</style>
