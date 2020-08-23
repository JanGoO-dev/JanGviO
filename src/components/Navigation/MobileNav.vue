<template>
  <div>
    <div class="blur-backdrop"></div>
    <section id="mob-nav" class="bg-white w-100 d-flex align-items-center">
      <header class="mobile-nav bg-white ml-3 mr-3">
        <div class="profile-btn bg-white">
          <router-link to="/profile">
            <img
              src="@/assets/avatar.png"
              width="35"
              height="35"
              alt="Profile Avatar"
              class="bg-white m-2"
            />
          </router-link>
        </div>
        <mobAddBtn id="add-btn"></mobAddBtn>
        <div class="menu-btn">
          <MobMenuBtn></MobMenuBtn>
        </div>
      </header>
    </section>
  </div>
</template>

<script>
import mobAddBtn from "./mobAddBtn";
import MobMenuBtn from "./MobMenuBtn";
export default {
  components: { mobAddBtn, MobMenuBtn }
};
</script>

<style lang="scss" scoped>
.blur-backdrop {
  transition: ease-in-out 0.4s;
}
#mob-nav {
  position: fixed;
  bottom: 0;
  z-index: 999;
  height: 60px;
}
.mobile-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  .profile-btn {
    place-self: start;
  }
  .menu-btn {
    place-self: end;
    cursor: pointer;
  }
}
#add-btn {
  position: absolute;
  left: 50%;
  bottom: 70px;
  transform: translateX(-50px);
}
</style>