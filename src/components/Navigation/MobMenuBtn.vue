<template>
  <div>
    <div class="container bg-white">
      <div @click="toggleOpen" class="menu-toggle bg-white">
        <img src="@/assets/burger.svg" width="35" class="bg-white" alt="Add Button" />
      </div>

      <div class="menu-line">
        <div class="btn-app">
          <div class="fa fa-map-marker"></div>
        </div>
        <div class="btn-app">
          <div class="fa fa-envelope"></div>
        </div>
        <div class="btn-app">
          <div class="fa fa-video-camera"></div>
        </div>
        <div class="btn-app">
          <div class="fa fa-soundcloud"></div>
        </div>
        <div class="btn-app">
          <div class="fa fa-graduation-cap"></div>
        </div>
        <div class="btn-app">
          <div class="fa fa-image"></div>
        </div>
        <div class="btn-app">
          <div class="fa fa-vine"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleOpen() {
      var MT = document.querySelector(".menu-toggle");
      var ML = document.querySelector(".menu-line");
      MT.classList.toggle("open");
      ML.classList.toggle("open");
      var e = document.querySelector(".blur-backdrop");
      e.classList.toggle("blur-backdrop-active");
    }
  }
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

  .fa {
    line-height: 2.5em;
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
</style>