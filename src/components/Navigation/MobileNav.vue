<template>
  <div>
    <section id="mob-nav" class="bg-white w-100 d-flex align-items-center">
      <header class="mobile-nav bg-white mx-4">
        <div class="profile-btn">
          <router-link to="/profile">
            <img
              src="@/assets/avatar.png"
              width="35"
              height="35"
              alt="Profile Avatar"
              class="bg-white"
            />
          </router-link>
        </div>
        <mobAddBtn id="add-btn"></mobAddBtn>
        <div class="menu-btn">
          <img src="@/assets/burger.svg" width="35" alt="Menu" />
        </div>
      </header>
    </section>
  </div>
</template>

<script>
import mobAddBtn from "./mobAddBtn";
export default {
  components: { mobAddBtn }
};
</script>

<style lang="scss" scoped>
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