<template>
  <div :style="varColor">
    <div class="container wrap">
      <ul id="menu" class="bg-white rounded-full">
        <a
          class="menu-button d-flex justify-content-center"
          :href="triggerHREF"
          :title="triggerStatus"
          @click="toggleState"
        >
          <img
            src="@/assets/add.svg"
            class="target-addBtn bg-transparent"
            width="26"
            alt="Add Button Icon SVG"
          />
        </a>
        <li class="menu-item">
          <a href="#menu">
            <span class="fas fa-github"></span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#menu">
            <span class="fas fa-linkedin"></span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#menu">
            <span class="fas fa-instagram"></span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#menu">
            <span class="fas fa-twitter"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      triggerHREF: "#0",
      triggerStatus: "Show Navigation",
      variableColor: "#1fb6ff"
    };
  },
  methods: {
    toggleState() {
      var e = document.querySelector(".target-addBtn");
      console.log(e);
      if (this.triggerHREF === "#menu") {
        this.triggerHREF = "#0";
        this.triggerStatus = "Hide Navigation";
        e.classList.remove("rotate-forward");
        e.classList.add("rotate-back");
      } else {
        this.triggerHREF = "#menu";
        this.triggerStatus = "Show Navigation";
        e.classList.add("rotate-forward");
        e.classList.remove("rotate-back");
      }
    }
  },
  computed: {
    varColor() {
      return {
        "--var-color": this.variableColor
      };
    },
    curRoute() {
      return this.$route.fullPath;
    }
  },
  mounted() {
    if (this.$route.fullPath === "/premium") {
      this.variableColor = "gold";
    } else {
      this.variableColor = "#1fb6ff";
    }
  },
  watch: {
    curRoute() {
      if (this.$route.fullPath === "/premium") {
        this.variableColor = "gold";
      } else {
        this.variableColor = "#1fb6ff";
      }
    }
  }
};
</script>

<style scoped>
#menu {
  width: 70px;
  height: 70px;
  position: absolute;
  left: 100%;
  top: 50%;
  margin: -17px 0 0 -10px;
  list-style: none;
  font-size: 200%;
  box-shadow: 0 4px 10px -10px #000;
}

.menu-button {
  opacity: 0;
  z-index: -1;
}

.menu-button {
  width: 55px;
  height: 55px;
  position: absolute;
  left: 53%;
  top: 53%;
  margin: -30px 0 0 -30px;
  border-radius: 50%;
  background: var(--var-color);
  background-size: 100%;
  overflow: hidden;
  text-decoration: none;
  border: solid 2px white;
}

#menu:not(:target) > a:first-of-type,
#menu:target > a:last-of-type {
  opacity: 1;
  z-index: 1;
}

#menu:not(:target) > .icon-plus:before,
#menu:target > .icon-minus:before {
  opacity: 1;
}

.menu-item {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 55%;
  line-height: 5px;
  top: 60%;
  margin: -40px 0 0 -40px;
  border-radius: 50%;
  background-color: var(--var-color);
  transform: translate(0px, 0px);
  transition: transform 500ms;
  z-index: -9;
  transition: 0.2s;
}

.menu-item:hover {
  opacity: 0.7;
  box-shadow: 0 5px 10px var(--var-color);
}

.menu-item a {
  color: #fff;
  position: relative;
  top: 30%;
  left: 0;
  text-decoration: none;
}

#menu:target > .menu-item:nth-child(5) {
  transform: rotate(36deg) translateY(70px) rotate(300deg);
  transition-delay: 0s;
}

#menu:target > .menu-item:nth-child(4) {
  transform: rotate(5deg) translateY(95px) rotate(-20deg);
  transition-delay: 0.1s;
}

#menu:target > .menu-item:nth-child(2) {
  transform: rotate(-23deg) translateY(103px) rotate(20deg);
  transition-delay: 0.2s;
}

#menu:target > .menu-item:nth-child(3) {
  transform: rotate(-52deg) translateY(95px) rotate(60deg);
  transition-delay: 0.3s;
}
</style>
