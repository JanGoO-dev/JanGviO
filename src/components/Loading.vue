<template>
  <div class="alert bg-white rounded-all w-50 mx-auto">
    <div
      class="d-flex justify-content-center text-white bg-primary color-fade rounded-all mb-3"
    >Please wait...</div>
    <div class="card border-0 rounded-all custom-loading mx-auto">
      <img class="card-img" src="@/assets/loading.gif" alt="Loading GIF" />
    </div>
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