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
          :style="varColor"
          :class="{
            avatar: index === activeItem && curRoute == mainLink.path,
            avatar: curRoute == mainLink.path,
          }"
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
            :variant="tooltipMode"
            placement="bottom"
            offset="0"
            >{{ mainLink.tooltip }}</b-tooltip
          >
        </div>

        <div class="bg-white" :style="varColor">
          <div v-b-modal.searchBtn>
            <img
              :src="require(`@/assets/search.svg`)"
              width="30"
              height="30"
              alt="Profile Avatar"
              class="target bg-white"
              id="searchModal"
            />
          </div>
          <b-tooltip
            target="searchModal"
            placement="bottom"
            offset="0"
            :variant="tooltipMode"
            >Search</b-tooltip
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
        <div class="position-fixed">
          <SignInModal></SignInModal>
          <SignUpModal></SignUpModal>
          <SearchModal></SearchModal>
        </div>
      </div>
    </header>
    <header
      id="aside"
      class="navbar navbar-light bg-white flex-column fixed-bottom h-100"
    >
      <router-link to="/" class="bg-white pt-1 mb-5">
        <img
          class="bg-white logo-shadow-sm"
          src="@/assets/jangvio.svg"
          width="40"
          alt="JanGvio Logo"
        />
      </router-link>
      <div class="mb-auto bg-transparent mt-5">
        <div
          v-for="(sideLink, index) in sideLinks"
          :key="index"
          class="mb-5"
          :style="varColor"
          :class="{ sideAvatar: index === sideActiveItem }"
          @click="selectSideItem(index)"
        >
          <router-link :to="sideLink.path">
            <img
              src="@/assets/avatar.png"
              width="30"
              height="30"
              alt="Profile Avatar"
              class="bg-white"
              :id="sideLink.tooltip"
            />
          </router-link>
          <b-tooltip
            :target="sideLink.tooltip"
            placement="right"
            offset="0"
            :variant="tooltipMode"
            class="tooltip-right"
            >{{ $store.getters.get_user.name }}</b-tooltip
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
import SearchModal from "../SearchModal";
export default {
  components: {
    addBtn,
    SignInModal,
    SignUpModal,
    SearchModal,
  },
  data() {
    return {
      mainLinks: [
        {
          path: "/",
          tooltip: "Explore",
          invisible: false,
          src: "explore.svg",
          id: "exploreBtn",
        },
        {
          path: "/premium",
          tooltip: "Premium",
          invisible: false,
          src: "premium.svg",
          id: "premiumBtn",
        },
        {
          path: "",
          tooltip: "Empty",
          invisible: true,
          src: "avatar.png",
          id: "",
        },
        {
          path: "/following",
          tooltip: "Following",
          invisible: false,
          src: "following.svg",
          id: "followingBtn",
        },
      ],
      sideLinks: [{ path: "/profile", tooltip: "One" }],
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
    tooltipMode() {
      if (this.curRoute === "/premium") {
        return "warning";
      } else {
        return "primary";
      }
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
div:focus {
  outline: none !important;
}
</style>
