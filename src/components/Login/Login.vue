<template>
  <div class="own-login">
    <router-link to="/home">
      <div class="go-back">
        <font-awesome-icon icon="chevron-left" /> Back to Home
      </div>
    </router-link>
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
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
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
  methods: {
    ...mapActions(["loginUserAction"]),
    checkForm() {
      if (this.username.length > 3 && this.password.length > 3) {
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
          await this.loginUserAction(userData);
          this.$router.push("/desk");
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
  margin: 120px 0;
  padding: 0 30px;
}

.login-title {
  @include own-title;
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
  color: lightgray;
  height: 60px;
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
