<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="name-input-group-signin" label="Your Name:" label-for="nameInput">
        <b-form-input id="nameInput" v-model="form.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="email-input-group-signin" label="Email address:" label-for="emailInput">
        <b-form-input
          id="emailInput"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
          aria-describedby
        ></b-form-input>
        <b-form-text id="email-help-block">We'll never share your email with anyone else.</b-form-text>
      </b-form-group>

      <b-form-group id="password-input-group-signin" label="Password:" label-for="passwordInput">
        <b-input
          type="password"
          v-model="form.password"
          id="passwordInput"
          aria-describedby="password-help-block"
        ></b-input>
        <b-form-text id="password-help-block">
          Your password must be 8-20 characters long, contain letters and numbers, and must not
          contain spaces, special characters, or emoji.
        </b-form-text>
      </b-form-group>
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
  }
};
</script>