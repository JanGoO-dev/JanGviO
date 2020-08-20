<template>
  <div class="home">
    <div id="post-wrap" class="card-group">
      <CardPost v-for="(card, index) in 12" :key="index"></CardPost>
    </div>
  </div>
</template>

<script>
import CardPost from "../components/CardPost";
export default {
  name: "Home",
  components: { CardPost }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 170px;
  margin-left: 120px;
  margin-right: 50px;
  margin-bottom: 70px;
}
#post-wrap {
  display: grid;
  grid-template-columns: repeat(4, auto);
  row-gap: 1.8rem;
  column-gap: 3.2rem;
}
</style>
