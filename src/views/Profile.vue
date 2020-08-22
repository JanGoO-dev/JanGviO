<template>
  <div>
    <div class="logo-img bg-transparent d-flex justify-content-end w-100">
      <img class="logo-shadow-sm" src="@/assets/jangvio.svg" width="60" alt="JanGviO Logo" />
      <div class="logo-text d-flex flex-column align-items-left ml-3 mt-3" href="#">
        <span class="bg-transparent h5 mb-0">JanGvio</span>
        <small class="bg-transparent text-muted">Lorem Ipsem Maseep!</small>
      </div>
    </div>
    <div class="profile">
      <div v-show="true" class="p-card-shadow rounded-all profile-card">
        <ProfileCard :cardWidth="cardVisible ? '18rem' : '100%'"></ProfileCard>
      </div>
      <div class="card-container">
        <div id="post-wrap" class="card-group">
          <CardPost
            @mouseenter.native="selectCard(index)"
            @mouseleave.native="deSelectCard"
            :curCardIndex="selectItem"
            :cardIndex="index"
            cardHeight="22rem"
            cardWidth="auto"
            :cardBorder="false"
            :premium="false"
            v-for="(card, index) in 12"
            :key="index"
          ></CardPost>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardPost from "../components/CardPost";
import ProfileCard from "../components/ProfileCard";
export default {
  name: "Profile",
  components: { CardPost, ProfileCard },
  data() {
    return {
      selectItem: null,
      cardVisible: true
    };
  },
  methods: {
    selectCard(i) {
      console.log(i);
      this.selectItem = i;
    },
    deSelectCard() {
      this.selectItem = null;
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 770) {
        this.cardVisible = true;
      } else {
        this.cardVisible = false;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.p-card-shadow {
  box-shadow: -4px 5px 7px -10px #000 !important;
}
.profile {
  margin-top: 100px;
  margin-left: 120px;
  margin-right: 50px;
  margin-bottom: 70px;
}
#post-wrap {
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 1.8rem;
  column-gap: 4.2rem;
}
.profile {
  display: grid;
  grid-template-columns: 3fr 21rem;
  overflow: auto;
}
.profile-card {
  top: 110px;
  right: 40px;
  position: fixed;
  overflow: auto;
  z-index: 9999;
}
img {
  display: none;
}
.logo-text {
  display: none;
}
@media screen and (max-width: 1280px) {
  #post-wrap {
    grid-template-columns: repeat(1, auto);
  }
}
@media screen and (max-width: 1070px) {
  img {
    display: block;
  }
  .logo-img {
    position: fixed;
    top: 20px;
    right: 90px;
    z-index: 999;
  }
  .profile {
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 770px) {
  .logo-img {
    position: relative;
    top: 20px;
    right: 50%;
    transform: translateX(50px);
    z-index: 999;
  }
  .logo-text {
    display: none !important;
  }
  img {
    display: block;
    margin-bottom: -50px;
    z-index: 999;
  }
  #post-wrap {
    grid-template-columns: repeat(1, auto);
  }
  .profile {
    grid-template-columns: 1fr;
  }
  .profile-card {
    position: relative;
    margin-bottom: 160px;
    top: 60px;
    left: 0;
    right: 0;
    z-index: 1;
  }
}
</style>
