<template>
  <div>
    <b-modal
      id="signUpModalMob"
      size="md"
      :centered="true"
      title-class="h5 bg-transparent text-white"
      title="Sign Up"
      :header-bg-variant="curMode"
      :header-border-variant="curMode"
      header-close-variant="white"
      header-class="rounded-0"
      modal-class="my-class"
      content-class="custom-shadow border-0"
      dialog-class="bg-transparent"
      :hide-footer="true"
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
    SignUpForm,
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
    },
  },
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
