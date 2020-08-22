<template>
  <div class="premium">
    <div class="d-flex justify-content-end w-100">
      <img class="logo-shadow-sm" src="@/assets/jangvio.svg" width="60" alt="JanGviO Logo" />
    </div>
    <div class="display-4 text-fade">Premium</div>
    <TagScroll :premium="true"></TagScroll>
    <div id="post-wrap" class="card-group">
      <CardPost
        @mouseenter.native="selectCard(index)"
        @mouseleave.native="deSelectCard"
        :curCardIndex="selectItem"
        :cardIndex="index"
        cardHeight="30rem"
        cardWidth="auto"
        :cardBorder="true"
        :premium="true"
        v-for="(card, index) in 12"
        :key="index"
      ></CardPost>
    </div>
  </div>
</template>

<script>
import CardPost from "../components/CardPost";
import TagScroll from "../components/TagScroll";
export default {
  name: "Premium",
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
.premium {
  margin-top: 100px;
  margin-left: 120px;
  margin-right: 50px;
  margin-bottom: 70px;
}
#post-wrap {
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 1.9rem;
  column-gap: 6.2rem;
  margin: 0 5rem;
}
img {
  display: none;
}
@media screen and (max-width: 1070px) {
  img {
    display: block;
    margin-bottom: -30px;
    z-index: 999;
  }
  .premium {
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 1350px) {
  #post-wrap {
    margin: 0 1rem;
  }
}
@media screen and (max-width: 1220px) {
  #post-wrap {
    grid-template-columns: repeat(1, auto);
    margin: 0 1rem;
  }
}
</style>
