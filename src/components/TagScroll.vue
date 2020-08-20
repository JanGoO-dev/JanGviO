<template>
  <div class="slideouter">
    <a href="#" class="preSlide">&#60;</a>
    <div
      class="slideinner srcl card mt-1 mb-5 border-0 bg-light color-fade p-2 d-flex flex-row justify-content-start rounded-all"
    >
      <span
        v-for="(tag, index) in 13"
        :key="index"
        class="primary-hover bg-white mr-2 mb-2 px-4 rounded-lg"
      >Tages</span>
    </div>
    <a href="#" class="nextSlide">&#62;</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
}

.outer {
  border: 1px solid;
}

.srcl {
  display: flex;
  margin: auto;
  width: 1100px;
  margin: 10px auto;
  justify-content: space-between;
}

.srcl div {
  border: 1px solid #888;
  padding: 5px;
  width: 80px;
  position: relative;
  margin-right: 5px;
  background: #e1e1e1;
}

.slide-sample {
  margin: auto;
  position: relative;
  display: table;
}

.slideouter {
  width: 400px;
  overflow-x: scroll;
  margin: auto;
  display: flex;
}

.preSlide {
  left: -23px;
  position: absolute;
  top: 11px;
  font-size: 27px;
  color: #0080cd;
}

.nextSlide {
  right: -24px;
  position: absolute;
  top: 11px;
  font-size: 27px;
  color: #0080cd;
}
.social {
  text-align: center;
}
.primary-hover:hover {
  color: #fff;
  background: #007bff !important;
  cursor: pointer;
}
</style>