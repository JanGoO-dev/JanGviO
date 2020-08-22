<template>
  <div>
    <b-modal
      id="signInModal"
      size="md"
      centered="true"
      button-size="sm"
      title-class="h5 bg-transparent text-white"
      title="Sign In"
      :header-bg-variant="curMode"
      :header-border-variant="curMode"
      header-close-variant="white"
      header-class="rounded-0"
      footer-class="button border-0"
      modal-class="my-class"
      content-class="custom-shadow border-0"
      dialog-class="bg-transparent"
      footer-bg-variant="light"
      ok-title="Sign In"
      :ok-variant="curBtnMode"
      cancel-variant="outline-secondary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
    >
      <div class="px-4 pt-3">
        <SignInForm></SignInForm>
      </div>
    </b-modal>
  </div>
</template>

<script>
import SignInForm from "../Auth/SignInForm";
export default {
  components: {
    SignInForm
  },
  computed: {
    curRoute() {
      return this.$route.fullPath;
    },
    curMode() {
      if (this.curRoute === "/premium") {
        return "warning";
      } else {
        return "primary";
      }
    },
    curBtnMode() {
      if (this.curRoute === "/premium") {
        return "warning px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right";
      } else {
        return "primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right";
      }
    }
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
