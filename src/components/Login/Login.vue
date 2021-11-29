<template>
  <div class="own-login">
    <h2 class="login-title">LOGIN</h2>
    <form class="login-form" @submit.prevent="onSubmit" autocomplete="off">
      <label for="username" type="text">Username:</label>
      <input id="username" v-model="username" placeholder="Mario Gonzalez" />
      <label for="password">Password:</label>
      <input
        id="password"
        type="password"
        v-model="password"
        placeholder="**********"
      />
      <input class="button" type="submit" value="Submit" />
    </form>
    <p class="signup">Not an owner yet? Sign up!</p>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      const userLogin = {
        username: this.username,
        password: this.password,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";

.own-login {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  margin-top: 50%;
}

.login-title {
  font-family: "Helvetica Neue";
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  padding-bottom: 20px;
}

.login-form {
  @include form;
}

.signup {
  color: darkgrey;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}

@media (min-width: $mobile) {
  .own-login {
    max-width: 250px;
  }
}
</style>
