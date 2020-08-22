<template>
  <div class="home">
    <div class="display-4 text-fade">Following</div>
    <TagScroll :premium="false"></TagScroll>
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
</template>

<script>
import CardPost from "../components/CardPost";
import TagScroll from "../components/TagScroll";
export default {
  name: "Following",
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
.home {
  margin-top: 100px;
  margin-left: 120px;
  margin-right: 50px;
  margin-bottom: 70px;
}
#post-wrap {
  display: grid;
  grid-template-columns: repeat(3, auto);
  row-gap: 1.8rem;
  column-gap: 4.2rem;
}
</style>
