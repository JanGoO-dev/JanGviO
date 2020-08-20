<template>
  <div
    class="card bg-img shadow border-0 rounded-all"
    :class="{ flashing: $store.getters.get_loading }"
    :style="{
        backgroundImage: 'url(' + require('@/assets/' + image) + ')'
      }"
  >
    <div class="d-flex card-img-overlay bg-transparent">
      <div
        class="card-title bg-light rounded-all card-profile shadow-lg"
        :style="{ backgroundImage: 'url(' + require('@/assets/' + profile) + ')' }"
      >
        <div class="profile-details mt-3 bg-transparent">
          <span class="d-flex flex-column justify-content-center">
            <div class="text-primary color-fade font-weight-bold">@ UserName</div>
            <small class="text-muted">6 days ago - 03/05/2020</small>
          </span>
        </div>
      </div>
      <div class="feed align-self-end">
        <div
          class="strip px-3 py-2 rounded-all shadow-lg d-flex justify-content-around text-muted bg-light"
        >
          <span class="bg-transparent">
            <img
              class="bg-transparent"
              src="@/assets/happy.svg"
              width="25"
              height="25"
              alt="Happy Emogi"
            />
          </span>
          <span class="bg-transparent">
            <img class="bg-transparent" src="@/assets/share.svg" width="25" height="25" alt="Share" />
          </span>
          <span class="bg-transparent">
            <img
              class="bg-transparent"
              src="@/assets/comment.svg"
              width="25"
              height="25"
              alt="Comment"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "card.jpg",
      profile: "Male-Avatar.png"
    };
  }
};
</script>

<style lang="scss" scoped>
.profile-details {
  position: absolute;
  left: calc(70px);
  width: calc(6rem * 2);
  span {
    font-size: 12px;
  }
}
.feed {
  position: relative;
  width: 100%;
}
.strip {
  position: absolute;
  top: -50px;
  left: -6.1rem;
  right: -2rem;
}
.card-profile {
  margin-top: -80px;
  height: 80px !important;
  width: 80px !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}
.bg-img {
  margin-top: 70px;
  height: 18rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.flashing {
  filter: brightness(0);
  animation: flash 1.2s infinite;
}

@keyframes flash {
  from {
    opacity: 0.06;
  }
  to {
    opacity: 0.08;
  }
}
</style>
