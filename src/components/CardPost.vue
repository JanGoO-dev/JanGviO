<template>
  <div
    class="card bg-img shadow border-0 rounded-all"
    :style="{
        backgroundImage: 'url(' + require('@/assets/' + image) + ')'
      }"
  >
    <div class="d-flex card-img-overlay bg-transparent">
      <div
        class="card-title bg-light rounded-all card-profile shadow-lg"
        :style="{ backgroundImage: 'url(' + require('@/assets/' + profile) + ')' }"
      >
        <div class="profile-details mt-1 bg-transparent">
          <span class="h6">
            <span class="text-dark">@UserName</span>
            <br />
            <small class="text-muted">6 days ago - 03/05/2020</small>
          </span>
        </div>
      </div>
      <div class="feed align-self-end">
        <div class="strip px-3 py-2 rounded-all shadow d-flex justify-content-around text-muted">
          <span>Like</span>
          <span>Share</span>
          <span>Coment</span>
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

<style scoped>
.profile-details {
  position: absolute;
  left: calc(70px);
  width: calc(6rem * 2);
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
  height: 80px;
  width: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}
.bg-img {
  margin-top: 70px;
  height: 22rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
