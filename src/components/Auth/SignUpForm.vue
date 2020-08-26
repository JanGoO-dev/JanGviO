<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
      <b-form-group v-show="$store.getters.get_signUpError">
        <b-alert show variant="danger">{{ $store.getters.get_signUpError }}</b-alert>
      </b-form-group>
      <b-form-group v-show="$store.getters.get_signUpSuccess">
        <b-alert show variant="success">{{ $store.getters.get_signUpSuccess }}</b-alert>
      </b-form-group>

      <b-form-group id="name-input-group-signup" label="Your Name:" label-for="nameInput">
        <b-form-input id="nameInput" v-model="form.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="email-input-group-signup" label="Email address:" label-for="emailInput">
        <b-form-input
          id="emailInput"
          v-model="form.email"
          type="email"
          :state="emailValidation_signup"
          required
          placeholder="Enter email"
          aria-describedby="email-help-block"
        ></b-form-input>
        <b-form-invalid-feedback :state="emailValidation_signup">
          <span v-if="email === ''">Email Feild is empty, please insert an email address.</span>
          <span v-else>Something is wrong with your Email format.</span>
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="emailValidation_signup">Email Format Looks Good.</b-form-valid-feedback>
        <b-form-text id="email-help-block">We'll never share your email with anyone else.</b-form-text>
      </b-form-group>

      <b-form-group id="password-input-group-signup" label="Password:" label-for="passwordInput">
        <b-input
          type="password"
          id="passwordInput"
          :state="passwordValidation_signup"
          required
          v-model="form.password"
          aria-describedby="password-help-block"
        ></b-input>
        <b-form-text id="password-help-block">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </b-form-text>
        <b-form-invalid-feedback :state="passwordValidation_signup">
          <span
            v-if="password === ''"
          >Password feild is empty, please enter your password to prceed.</span>
          <span v-else>Password must be 8-20 characters long.</span>
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="passwordValidation_signup">Password Looks Good.</b-form-valid-feedback>
      </b-form-group>

      <b-form-group
        id="confirm-password-input-group-signup"
        label="Confirm Password:"
        label-for="confirmPasswordInput"
      >
        <b-input
          v-model="form.confirmPassword"
          :state="confirmPasswordValidation"
          required
          type="password"
          id="confirmPasswordInput"
        ></b-input>
        <b-form-invalid-feedback :state="confirmPasswordValidation">
          <span v-if="confirmPassword === ''">Feild is empty enter something.</span>
          <span
            v-else
          >Password didn't matched. Make sure your password and confirm password are both same.</span>
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="confirmPasswordValidation">Matched, you can go ahead.</b-form-valid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="float-right px-4 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
      >SignUp</b-button>
      <b-button
        type="reset"
        variant="outline-secondary"
        class="float-right px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
      >Reset</b-button>
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
        confirmPassword: ""
      },
      show: true
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
    }
  },
  computed: {
    emailValidation_signup() {
      var format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return format.test(this.form.email);
    },
    passwordValidation_signup() {
      return this.form.password.length > 7 && this.form.password.length < 21;
    },
    confirmPasswordValidation() {
      return (
        this.form.password === this.form.password &&
        this.form.confirmPassword !== ""
      );
    },
    email() {
      return this.form.email;
    },
    password() {
      return this.form.password;
    },
    confirmPassword() {
      return this.form.confirmPassword;
    }
  }
};
</script>
