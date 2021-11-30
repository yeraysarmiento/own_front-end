<template>
  <div class="own-login">
    <h2 class="login-title">LOGIN</h2>
    <form
      class="login-form"
      @submit.prevent="onSubmit"
      autocomplete="off"
      @change="checkForm"
    >
      <label for="username" type="text" :class="isWrong ? 'wrong' : ''"
        >Username:</label
      >
      <input
        id="username"
        v-model="username"
        placeholder="Mario Gonzalez"
        :class="isWrong ? 'wrong' : ''"
      />
      <label for="password" :class="isWrong ? 'wrong' : ''">Password:</label>
      <input
        id="password"
        type="password"
        v-model="password"
        placeholder="**********"
        :class="isWrong ? 'wrong' : ''"
      />
      <button
        class="button"
        type="submit"
        :disabled="isDisabled"
        :class="isDisabled ? 'disabled' : ''"
      >
        {{ isWrong ? "Try again!" : "Submit" }}
      </button>
    </form>
    <router-link to="/register">
      <p class="signup">Not an owner yet? Sign up!</p>
    </router-link>
    <router-link to="/home">
      <div class="go-back">_Go back</div>
    </router-link>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { UserLogin } from "@/types/interface";

export default defineComponent({
  name: "Login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      isDisabled: true,
      isWrong: false,
    };
  },
  computed: {
    ...mapGetters(["checkLogin"]),
  },
  methods: {
    ...mapActions(["loginUser"]),
    checkForm() {
      if (this.username.length > 5 && this.password.length > 5) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    async onSubmit() {
      if (this.username !== "" && this.password !== "") {
        const userData: UserLogin = {
          username: this.username,
          password: this.password,
        };
        try {
          await this.loginUser(userData);
          this.isWrong = false;
        } catch (error) {
          this.isWrong = true;
        }
      }
    },
  },
});
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";

.own-login {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 150px 0;
  padding: 0 30px;
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

.go-back {
  @include lora-text;
  margin-top: 75px;
}

@media (min-width: $mobile) {
  .own-login {
    max-width: 300px;
    position: absolute;
    right: 30px;
    padding: 0;
    min-width: 250px;
  }
}
</style>
