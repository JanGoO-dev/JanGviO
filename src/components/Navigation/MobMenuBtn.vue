<template>
  <div>
    <div class="container bg-white">
      <div @click="toggleOpen" class="menu-toggle bg-white">
        <img
          src="@/assets/burger.svg"
          width="35"
          class="bg-white"
          alt="Add Button"
        />
      </div>

      <div class="menu-line">
        <div
          @click="
            $router.push({ path: '/' });
            toggleOpen();
          "
          class="btn-app"
        >
          <img
            id="explore"
            src="@/assets/explore.svg"
            width="24"
            alt="Explore SVG"
          />
          <b-tooltip target="explore" placement="lefts" variant="primary"
            >Explore</b-tooltip
          >
        </div>
        <div
          @click="
            $router.push({ path: '/premium' });
            toggleOpen();
          "
          class="btn-app"
        >
          <img
            id="premium"
            src="@/assets/premium.svg"
            width="24"
            alt="Premium SVG"
          />
          <b-tooltip target="premium" placement="lefts" variant="primary"
            >Premium</b-tooltip
          >
        </div>
        <div
          @click="
            $router.push({ path: '/following' });
            toggleOpen();
          "
          class="btn-app"
        >
          <img
            id="following"
            src="@/assets/following.svg"
            width="24"
            alt="Following SVG"
          />
          <b-tooltip target="following" placement="lefts" variant="primary"
            >Following</b-tooltip
          >
        </div>
        <div v-b-modal.searchBtnMob @click="toggleOpen" class="btn-app">
          <img
            id="search"
            src="@/assets/search.svg"
            width="24"
            alt="Search SVG"
          />
          <b-tooltip target="search" placement="lefts" variant="primary"
            >Search</b-tooltip
          >
        </div>
        <div v-b-modal.signInModalMob @click="toggleOpen" class="btn-app">
          <img
            id="signin"
            style="filter: invert(100%)"
            src="@/assets/register.svg"
            width="22"
            alt="Sign In SVG"
          />
          <b-tooltip target="signin" placement="lefts" variant="primary"
            >Sign In</b-tooltip
          >
        </div>
        <div v-b-modal.signUpModalMob @click="toggleOpen" class="btn-app">
          <img
            style="transform: rotate(180deg); filter: invert(100%)"
            id="signup"
            src="@/assets/register.svg"
            width="22"
            alt="Sign Up SVG"
          />
          <b-tooltip target="signup" placement="lefts" variant="primary"
            >Sign Up</b-tooltip
          >
        </div>
      </div>
      <SignInModalClone></SignInModalClone>
      <SignUpModalClone></SignUpModalClone>
      <SearchModalClone></SearchModalClone>
    </div>
  </div>
</template>

<script>
import SignInModalClone from "../Auth/SignInModalClone";
import SignUpModalClone from "../Auth/SignUpModalClone";
import SearchModalClone from "../SearchModalClone";
export default {
  components: {
    SignInModalClone,
    SignUpModalClone,
    SearchModalClone,
  },
  methods: {
    toggleOpen() {
      var MT = document.querySelector(".menu-toggle");
      var ML = document.querySelector(".menu-line");
      MT.classList.toggle("open");
      ML.classList.toggle("open");
      var e = document.querySelector(".blur-backdrop");
      e.classList.toggle("blur-backdrop-active");
    },
  },
};
</script>

<style lang="scss" scoped>
// this -- well, because this.
* {
  box-sizing: border-box;
}

// this makes a basic circle
@mixin circle($param) {
  width: $param;
  height: $param;
  border-radius: 50%;
}

// Brand Colour Palette
$purple: #462882;
$green: #1ef0a0;
$blue: #007bff;
$red: #ff3c4b;

// this is what I use to place the menu thing wherever I want
.container {
  //   position: fixed;
  //   bottom: 1em;
  //   right: 1em;
  padding: 10px;
}

// this toggles the whole damn thing
.menu-toggle {
  @include circle(60px);
  //   background-color: $green;
  //   box-shadow: 4px 4px 2px 1px rgba(#000, 0.2);

  //   position: absolute;
  //   z-index: 5;
  //   bottom: 10px;
  //   right: 30px;
  //   display: table;

  width: 40px;
  height: 40px;

  //   text-align: center;

  .fa {
    color: #fff;
    font-size: 2em;
    display: table-cell;
    vertical-align: middle;
    transition: 0.4s;
  }

  // Twist the plus so it looks like a close 'x'
  &.open .fa {
    transform: rotate(135deg);
  }
}

// Single Template buttons
.btn-app {
  @include circle(2.2em);
  position: absolute;

  background-color: $blue;
  color: #fff;
  text-align: center;

  img {
    position: relative;
    top: 0.3rem;
  }
}

// add shadow only when templates are activated
.open .btn-app {
  box-shadow: 4px 4px 2px 1px rgba(#000, 0.2);
}

// stacked template icons
.menu-line {
  position: absolute;
  z-index: -2;

  .btn-app {
    bottom: 0;
    right: -2.1em;
    transition: 0.3s;
    transition-delay: 0.1s;
  }

  &.open {
    // first one. add 3 to each subsequent template
    $bottom: 1.4em;
    $templates: 7;

    .btn-app:nth-of-type(1) {
      bottom: $bottom;
    }

    // align each template item on top of the next
    @for $i from 1 through $templates {
      .btn-app:nth-of-type(#{$i}) {
        bottom: $bottom + 3 * $i;
      }
    }
  }
}
.tooltip {
  margin: 20px;
  font-size: 14px;
}
</style>
