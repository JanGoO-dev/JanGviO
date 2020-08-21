<template>
  <div>
    <header
      id="main-nav"
      class="navbar navbar-expand-lg navbar-light bg-white ml-5 fixed-top"
    >
      <div class="d-flex flex-column align-items-left ml-5" href="#">
        <span class="bg-white h5 mb-0">JanGvio</span>
        <small class="bg-white text-muted">Lorem Ipsem Maseep!</small>
      </div>
      <div class="main-links ml-auto pl-5 bg-white">
        <div
          v-for="(mainLink, index) in mainLinks"
          :key="index"
          class="bg-white"
          :style="varColor"
          :class="{ avatar: index === activeItem }"
          @click="selectItem(index)"
        >
          <router-link :to="mainLink.path">
            <img
              :src="require(`@/assets/${mainLink.src}`)"
              width="30"
              height="30"
              alt="Profile Avatar"
              class="target bg-white"
              :class="{ invisible: mainLink.invisible }"
              :id="mainLink.tooltip"
            />
          </router-link>
          <b-tooltip
            :target="mainLink.tooltip"
            placement="bottom"
            offset="0"
            variant="primary"
            >{{ mainLink.tooltip }}</b-tooltip
          >
        </div>
      </div>
      <div id="addBtn" class="pl-2">
        <addBtn></addBtn>
      </div>
      <div class="nav-buttons ml-auto bg-white">
        <button
          v-b-modal.signInModal
          type="button"
          :class="{
            'btn-outline-primary': $router.currentRoute.fullPath !== '/premium',
            'btn-outline-secondary':
              $router.currentRoute.fullPath === '/premium',
          }"
          class="btn btn-sm px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
        >
          Sign In
        </button>
        <button
          v-b-modal.signUpModal
          type="button"
          :class="{
            'btn-danger': $router.currentRoute.fullPath !== '/premium',
            'btn-warning': $router.currentRoute.fullPath === '/premium',
          }"
          class="btn btn-sm px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
        >
          Sign Up
        </button>
        <SignInModal></SignInModal>
        <SignUpModal></SignUpModal>
      </div>
    </header>
    <header
      id="aside"
      class="navbar navbar-light bg-white flex-column fixed-bottom h-100"
    >
      <a href="#" class="bg-white pt-1 mb-5">
        <img
          class="bg-white logo-shadow-sm"
          src="@/assets/jangvio.svg"
          width="40"
          alt="JanGvio Logo"
        />
      </a>
      <div class="mb-auto bg-transparent mt-5">
        <div
          v-for="(sideLink, index) in sideLinks"
          :key="index"
          class="mb-5"
          :style="varColor"
          :class="{ sideAvatar: index === sideActiveItem }"
          @click="selectSideItem(index)"
        >
          <img
            src="@/assets/avatar.png"
            width="30"
            height="30"
            alt="Profile Avatar"
            class="bg-white"
            :id="sideLink.tooltip"
          />
          <b-tooltip
            :target="sideLink.tooltip"
            placement="right"
            offset="0"
            variant="primary"
            class="tooltip-right"
            >{{ sideLink.tooltip }}</b-tooltip
          >
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
    SignUpModal,
  },
  data() {
    return {
      mainLinks: [
        { path: "/", tooltip: "Explore", invisible: false, src: "explore.svg" },
        {
          path: "/premium",
          tooltip: "Premium",
          invisible: false,
          src: "premium.svg",
        },
        { path: "", tooltip: "Empty", invisible: true, src: "avatar.png" },
        {
          path: "/following",
          tooltip: "Following",
          invisible: false,
          src: "following.svg",
        },
        {
          path: "#search",
          tooltip: "Search",
          invisible: false,
          src: "search.svg",
        },
      ],
      sideLinks: [{ tooltip: "One" }],
      activeItem: 0,
      sideActiveItem: null,
      variableColor: "#1fb6ff",
    };
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
    },
    selectSideItem(i) {
      this.sideActiveItem = i;
    },
  },
  computed: {
    curPath() {
      return this.$router.currentRoute.fullPath;
    },
    varColor() {
      return {
        "--var-color": this.variableColor,
      };
    },
    curRoute() {
      return this.$route.fullPath;
    },
  },
  mounted() {
    for (var i = 0; i < this.mainLinks.length; i++) {
      if (this.curPath === this.mainLinks[i].path) {
        this.activeItem = i;
      }
    }
    if (this.$route.fullPath === "/premium") {
      this.variableColor = "gold";
    } else {
      this.variableColor = "#1fb6ff";
    }
  },
  watch: {
    curRoute() {
      this.sideActiveItem = null;
      if (this.$route.fullPath === "/premium") {
        this.variableColor = "gold";
      } else {
        this.variableColor = "#1fb6ff";
      }
    },
  },
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
  position: relative;
}
.avatar::after {
  content: "";
  position: absolute;
  left: -4px;
  bottom: -15px;
  width: 40px;
  height: 4px;
  background-color: var(--var-color);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.sideAvatar {
  position: relative;
}
.sideAvatar::after {
  content: "";
  position: absolute;
  left: 37px;
  bottom: 10px;
  width: 20px;
  height: 4px;
  background-color: var(--var-color);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform: rotate(-90deg);
}
.tooltip {
  margin: 20px;
  font-size: 18px;
}
</style>
