<template>
  <div class="loading-page bg-white">
    <div class="custom-loading bg-transparent">
      <img
        src="@/assets/jangvio.svg"
        class="logo-shadow-lg"
        alt="JanGviO SVG"
      />
      <img class="card-img mt-5" src="@/assets/loading.gif" alt="Loading GIF" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading-page {
  display: flex;
  height: calc(100vh - 60px);
  justify-content: center;
  align-items: center;
}
.custom-loading {
  /* display: grid;
  place-items: center; */
  width: 140px;
}
</style>
