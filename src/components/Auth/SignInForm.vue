<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
      <b-form-group v-show="$store.getters.get_signInError">
        <b-alert show variant="danger">{{ $store.getters.get_signInError }}</b-alert>
      </b-form-group>
      <b-form-group v-show="$store.getters.get_signInSuccess">
        <b-alert show variant="success">{{ $store.getters.get_signInSuccess }}</b-alert>
      </b-form-group>

      <b-form-group id="name-input-group-signin" label="Your Name:" label-for="nameInput">
        <b-form-input id="nameInput" v-model="form.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="email-input-group-signin" label="Email address:" label-for="emailInput">
        <b-form-input
          id="emailInput"
          v-model="form.email"
          type="email"
          :state="emailValidation"
          required
          placeholder="Enter email"
          aria-describedby
        ></b-form-input>
        <b-form-text id="email-help-block">We'll never share your email with anyone else.</b-form-text>

        <b-form-invalid-feedback :state="emailValidation">
          <span v-if="email === ''">Email Feild is empty, please insert an email address.</span>
          <span v-else>Something is wrong with your Email format.</span>
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="emailValidation">Email Format Looks Good.</b-form-valid-feedback>
      </b-form-group>

      <b-form-group id="password-input-group-signin" label="Password:" label-for="passwordInput">
        <b-input
          type="password"
          v-model="form.password"
          :state="passwordValidation"
          required
          id="passwordInput"
          aria-describedby="password-help-block"
        ></b-input>
        <b-form-text id="password-help-block">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </b-form-text>
        <b-form-invalid-feedback :state="passwordValidation">
          <span
            v-if="password === ''"
          >Password feild is empty, please enter your password to prceed.</span>
          <span v-else>Password must be 8-20 characters long.</span>
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="passwordValidation">Password Looks Good.</b-form-valid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="float-right px-4 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"
      >SignIn</b-button>
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
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("simpleSignIn", this.form);
      setTimeout(() => {
        window.location.reload();
        this.$router.push({ path: "/profile" });
      }, 1000);
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
    passwordValidation() {
      return this.form.password.length > 7 && this.form.password.length < 21;
    },
    emailValidation() {
      var format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return format.test(this.form.email);
    },
    email() {
      return this.form.email;
    },
    password() {
      return this.form.password;
    }
  }
};
</script>
