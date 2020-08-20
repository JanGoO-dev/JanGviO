<template>
  <div class="alert bg-white rounded-all w-50 mx-auto shadow-lg">
    <div class="card border-0 rounded-all custom-loading mx-auto">
      <img class="card-img" src="@/assets/loading.gif" alt="Loading GIF" />
    </div>
    <div
      class="d-flex justify-content-center text-white bg-primary color-fade rounded mb-1 mt-3"
    >Please wait...</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.custom-loading {
  display: grid;
  place-items: center;
  width: 140px;
}
</style>