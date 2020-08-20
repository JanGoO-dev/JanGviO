<template>
  <div class="home">
    <div class="display-4 text-fade">Explore</div>
    <TagScroll></TagScroll>
    <Loading v-show="$store.getters.get_loading" class="mb-5"></Loading>
    <div id="post-wrap" class="card-group">
      <CardPost v-for="(card, index) in 12" :key="index"></CardPost>
    </div>
  </div>
</template>

<script>
import CardPost from "../components/CardPost";
import Loading from "../components/Loading";
import TagScroll from "../components/TagScroll";
export default {
  name: "Home",
  components: { CardPost, Loading, TagScroll },
  beforeMount() {
    setTimeout(() => {
      this.$store.commit("toggle_loading");
    }, 100);
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
  grid-template-columns: repeat(4, auto);
  row-gap: 1.8rem;
  column-gap: 4.2rem;
}
</style>
