<template>
  <div class="mt-1 mb-5">
    <div class="p-2">
      <div class="bg-light color-fade rounded-all d-flex flex-row justify-content-start">
        <span
          v-for="(tag, index) in 13"
          :key="index"
          class="primary-hover bg-white mr-2 mb-2 px-4 rounded-lg"
        >Tages</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.primary-hover:hover {
  color: #fff;
  background: #007bff !important;
  cursor: pointer;
}
</style>