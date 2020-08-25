<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
      <b-form-group
        id="name-input-group-signup"
        label="Your Name:"
        label-for="nameInput"
      >
        <b-form-input
          id="nameInput"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="email-input-group-signup"
        label="Email address:"
        label-for="emailInput"
      >
        <b-form-input
          id="emailInput"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
          aria-describedby="email-help-block"
        ></b-form-input>
        <b-form-text id="email-help-block"
          >We'll never share your email with anyone else.</b-form-text
        >
      </b-form-group>

      <b-form-group
        id="password-input-group-signup"
        label="Password:"
        label-for="passwordInput"
      >
        <b-input
          type="password"
          id="passwordInput"
          required
          v-model="form.password"
          aria-describedby="password-help-block"
        ></b-input>
        <b-form-text id="password-help-block">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </b-form-text>
      </b-form-group>

      <b-form-group
        id="confirm-password-input-group-signup"
        label="Confirm Password:"
        label-for="confirmPasswordInput"
      >
        <b-input
          v-model="form.confirmPassword"
          required
          type="password"
          id="confirmPasswordInput"
        ></b-input>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="float-right px-4 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
        >SignUp</b-button
      >
      <b-button
        type="reset"
        variant="outline-secondary"
        class="float-right px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
        >Reset</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit() {
      if (this.form.password === this.form.confirmPassword) {
        this.$store.dispatch("simpleSignUp", this.form);
      }
    },
    onReset() {
      console.log(123);
      this.form.email = "";
      this.form.password = "";
      this.form.name = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
