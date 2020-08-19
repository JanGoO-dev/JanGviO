<template>
  <div>
    <b-modal
      id="signUpModal"
      size="md"
      centered="true"
      button-size="sm"
      title-class="h5 bg-transparent text-white"
      title="Sign Up"
      header-bg-variant="primary"
      header-border-variant="primary"
      header-close-variant="white"
      header-class="rounded-0"
      footer-class="button border-0"
      modal-class="my-class"
      content-class="custom-shadow border-0"
      dialog-class="bg-transparent"
      footer-bg-variant="light"
      ok-title="Sign Up"
      ok-variant="primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
      cancel-variant="outline-primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
    >
      <div class="px-4 pt-3">
        <SignUpForm></SignUpForm>
      </div>
    </b-modal>
  </div>
</template>

<script>
import SignUpForm from "../Auth/SignUpForm";
export default {
  components: {
    SignUpForm
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