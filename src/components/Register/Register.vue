<template>
  <div class="own-register">
    <h2 class="register-title">REGISTER</h2>
    <form class="register-form" @submit.prevent="onSubmit" autocomplete="off">
      <label for="username" type="text">Username:</label>
      <input id="username" v-model="username" placeholder="Mario Gonzalez" />
      <label for="email" type="email">Username:</label>
      <input id="email" v-model="email" placeholder="mario@minidefuet.com" />
      <label for="password" :class="isWrong ? 'wrong' : ''">Password:</label>
      <input
        id="password"
        type="password"
        v-model="password"
        placeholder="**********"
        :class="isWrong ? 'wrong' : ''"
      />
      <label for="password" :class="isWrong ? 'wrong' : ''"
        >Repeat password:</label
      >
      <input
        id="password"
        type="password"
        v-model="password"
        placeholder="**********"
        :class="isWrong ? 'wrong' : ''"
      />
      <input
        class="button"
        type="submit"
        value="Register"
        disabled="isDisabled"
      />
    </form>
    <p class="signup">I already have an account</p>
    <div class="go-back">_Go back</div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Register",
  components: {},
  data() {
    return {
      isWrong: true,
      isDisabled: true,
    };
  },
});
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";

.own-register {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 150px 0;
  padding: 0 30px;
}

.register-title {
  font-family: "Helvetica Neue";
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  padding-bottom: 20px;
}

.register-form {
  @include form;
}

.signup {
  color: darkgrey;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}

@media (min-width: $mobile) {
  .own-register {
    max-width: 300px;
    position: absolute;
    right: 30px;
    padding: 0;
  }
}
</style>
