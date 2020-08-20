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
        <div class="profile-details mt-1">
          <span class="h6">
            <span class="text-dark font-weight-bold">@UserName</span>
            <br />
            <span class="text-muted">6 days ago - 03/05/2020</span>
          </span>
        </div>
      </div>
      <div class="feed align-self-end">
        <div class="strip p-3 rounded-all shadow d-flex justify-content-around">
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
  left: 6.5rem;
  width: calc(6rem * 2);
}
.feed {
  position: relative;
}
.strip {
  position: absolute;
  top: -70px;
  left: -8rem;
  width: calc(22rem + 2.6rem);
}
.card-profile {
  margin-top: -80px;
  height: 5.5rem;
  width: 5.5rem;
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
