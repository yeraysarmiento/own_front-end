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
  name: "OwnLogin",
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

<style lang="scss">
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_variables.scss";

.own-login {
  display: flex;
  flex-direction: column;
  width: 250px;
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
  @include lora-text;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 25px;
  margin-bottom: 25px;
  z-index: -1;

  & input {
    @include lora-text;
    width: 100%;
    height: 40px;
    border-radius: 25px;
    border: 1px dashed black;
    padding-left: 20px;
  }

  & label {
    font-size: 18px;
    padding: 20px 0 10px 15px;
  }

  .button {
    @include button;
    border: none;
    align-self: end;
    margin-top: 50px;
    text-align: center;
  }

  ::placeholder {
    @include lora-text;
    font-size: 15px;
    opacity: 0.5;
  }

  :focus {
    border: 1px solid black;
    outline: none;
  }
}

.signup {
  color: darkgrey;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}
</style>
