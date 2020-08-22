<template>
  <div class="explore">
    <div class="d-flex justify-content-end w-100">
      <img class="logo-shadow-sm" src="@/assets/jangvio.svg" width="60" alt="JanGviO Logo" />
    </div>
    <div class="display-4 text-fade">Explore</div>
    <TagScroll :premium="false"></TagScroll>
    <div class="card-container">
      <div id="post-wrap" class="card-group">
        <CardPost
          @mouseenter.native="selectCard(index)"
          @mouseleave.native="deSelectCard"
          :curCardIndex="selectItem"
          :cardIndex="index"
          cardHeight="18rem"
          cardWidth="auto"
          :cardBorder="false"
          :premium="false"
          v-for="(card, index) in 12"
          :key="index"
        ></CardPost>
      </div>
    </div>
  </div>
</template>

<script>
import CardPost from "../components/CardPost";
import TagScroll from "../components/TagScroll";
export default {
  name: "Home",
  components: { CardPost, TagScroll },
  data() {
    return {
      selectItem: null
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
  }
};
</script>

<style lang="scss" scoped>
.explore {
  margin-top: 100px;
  margin-left: 120px;
  margin-right: 50px;
  margin-bottom: 70px;
}
#post-wrap {
  display: grid;
  grid-template-columns: repeat(4, auto);
  row-gap: 1.8rem;
  column-gap: 4.2rem;
}
img {
  display: none;
}
@media screen and (max-width: 1380px) {
  #post-wrap {
    grid-template-columns: repeat(3, auto);
  }
}
@media screen and (max-width: 1230px) {
  #post-wrap {
    grid-template-columns: repeat(2, auto);
  }
}
@media screen and (max-width: 960px) {
  #post-wrap {
    grid-template-columns: repeat(1, auto);
  }
}
@media screen and (max-width: 1070px) {
  img {
    display: block;
    margin-bottom: -30px;
    z-index: 999;
  }
  .explore {
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
  }
}
</style>
