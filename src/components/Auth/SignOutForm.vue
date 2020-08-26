<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group v-show="$store.getters.get_signOutSuccess && signedOut">
      <b-alert show variant="success text-center">
        <p>{{ $store.getters.get_signOutSuccess }}</p>
      </b-alert>
    </b-form-group>
    <b-form-group v-show="$store.getters.get_signOutError && signedOut">
      <b-alert show variant="danger text-center">
        <p>{{ $store.getters.get_signOutError }}</p>
      </b-alert>
    </b-form-group>
    <b-form-group v-show="!signedOut">
      <div>
        <b-alert show variant="danger text-center">
          <h4 class="alert-heading">OH NO!</h4>
          <p>Do you really want to Sign Out of this amazing experience.</p>
          <hr />
          <p class="mb-0">Click the button bellow 😥</p>
        </b-alert>
      </div>
    </b-form-group>
    <b-form-group>
      <b-button type="submit" variant="primary w-100">Sign Out</b-button>
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      signedOut: false
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("signOutUser");
      setTimeout(() => {
        if (this.$store.getters.get_signOutSuccess) {
          window.location.reload();
          this.$router.push({ path: "/" });
        }
      }, 1000);
      this.signedOut = true;
    }
  }
};
</script>