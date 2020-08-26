<template>
  <b-modal
    id="signOutModal"
    size="md"
    :centered="true"
    :hide-header="true"
    :hide-footer="true"
    modal-class="my-class"
    content-class="custom-shadow border-0 rounded-all"
    dialog-class="bg-transparent"
  >
    <div class="px-4 pt-3">
      <SignOutForm></SignOutForm>
    </div>
  </b-modal>
</template>

<script>
import SignOutForm from "./SignOutForm";
export default {
  components: {
    SignOutForm
  }
};
</script>

<style scoped>
/deep/ .my-class {
  -webkit-backdrop-filter: saturate(180%) blur(4px);
  backdrop-filter: saturate(180%) blur(4px);
  background-color: rgba(98, 148, 255, 0.158);
}
/deep/ .custom-shadow {
  border-radius: 0;
  /* box-shadow: 0px 0px 2px 40px rgba(250, 250, 250, 0.125); */
}
</style>