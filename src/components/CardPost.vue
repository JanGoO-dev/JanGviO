<template>
  <div
    class="card bg-img shadow rounded-all"
    :class="{
      flashing: $store.getters.get_loadingPost,
      'border-0': !cardBorder,
      'premium-border-bgImg': premium,
    }"
    :style="{
      backgroundImage: 'url(' + require('@/assets/' + image) + ')',
      height: cardHeight,
      width: cardWidth,
    }"
  >
    <div class="d-flex card-img-overlay bg-transparent">
      <div
        class="card-title bg-light rounded-all card-profile"
        :class="{ 'premium-border-avatar': premium, 'card-profile-dimentions': curCardIndex !== cardIndex, 'rounded-circle': curCardIndex !== cardIndex, 'shadow': curCardIndex === cardIndex }"
        :style="{
          backgroundImage: 'url(' + require('@/assets/' + profile) + ')',
        }"
      >
        <div class="profile-details mt-3 bg-transparent">
          <span class="d-flex flex-column justify-content-center">
            <div
              class="color-fade font-weight-bold"
              :class="{
                'text-primary': !premium,
                'text-warning': premium,
              }"
            >@ UserName</div>
            <small class="text-muted">6 days ago - 03/05/2020</small>
          </span>
        </div>
      </div>
      <div class="feed align-self-end" :class="{ 'feed-hidden': curCardIndex !== cardIndex }">
        <div
          class="strip px-3 py-1 rounded-all shadow-lg d-flex justify-content-around text-muted bg-light"
        >
          <span class="bg-transparent">
            <img
              class="bg-transparent"
              src="@/assets/happy.svg"
              width="20"
              height="20"
              alt="Happy Emogi"
            />
          </span>
          <span class="bg-transparent">
            <img class="bg-transparent" src="@/assets/share.svg" width="20" height="20" alt="Share" />
          </span>
          <span class="bg-transparent">
            <img
              class="bg-transparent"
              src="@/assets/comment.svg"
              width="20"
              height="20"
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
  props: [
    "cardHeight",
    "cardWidth",
    "cardBorder",
    "premium",
    "curCardIndex",
    "cardIndex"
  ],
  data() {
    return {
      image: "card.jpg",
      profile: "Male-Avatar.png"
    };
  },
  beforeMount() {
    setTimeout(() => {
      this.$store.commit("toggle_loadingPost");
    }, 4000);
  }
};
</script>

<style lang="scss" scoped>
.profile-details {
  position: absolute;
  left: calc(77px);
  top: -4px;
  width: calc(6rem * 2);
  span {
    font-size: 12px;
  }
}
.feed {
  position: relative;
  width: 100%;
  transition: ease-in-out 0.3s;
}
.feed-hidden {
  opacity: 0;
}
.strip {
  position: absolute;
  top: -30px;
  left: -6.2rem;
  right: -2.2rem;
}
.card-profile-dimentions {
  margin-top: -86px !important;
  height: 54px !important;
  width: 60px !important;
}
.card-profile {
  margin-top: -80px;
  height: 80px;
  width: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: ease-in-out 0.3s;
}
.bg-img {
  margin-top: 70px;
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
