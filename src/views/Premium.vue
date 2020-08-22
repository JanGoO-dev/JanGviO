<template>
  <div class="home">
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
.home {
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
</style>
