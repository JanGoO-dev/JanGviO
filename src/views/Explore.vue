<template>
  <div class="home">
    <div class="display-4 text-fade">Explore</div>
    <TagScroll :premium="false"></TagScroll>
    <div class="card-container">
      <div id="post-wrap" class="card-group">
        <CardPost
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
  grid-template-columns: repeat(4, auto);
  row-gap: 1.8rem;
  column-gap: 4.2rem;
}
</style>
