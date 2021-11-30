<template>
  <div class="own-register">
    <h2 class="register-title">REGISTER</h2>
    <form
      class="register-form"
      @submit.prevent="onSubmit"
      autocomplete="off"
      @change="checkForm"
    >
      <label for="username" type="text">Username:</label>
      <input id="username" v-model="username" placeholder="Mario Gonzalez" />
      <label for="email" type="email">Email:</label>
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
        id="repeatPassword"
        type="password"
        v-model="repeatPassword"
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
    <router-link to="/login">
      <p class="signup">I already have an account</p>
    </router-link>
    <router-link to="/home">
      <div class="go-back">_Go back</div>
    </router-link>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { UserRegister } from "@/types/interface";

export default defineComponent({
  name: "Register",
  components: {},
  data() {
    return {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
      isWrong: false,
      isDisabled: true,
    };
  },
  computed: {},
  methods: {
    checkForm() {
      if (this.password !== this.repeatPassword) {
        this.isWrong = true;
      } else {
        this.isWrong = false;
      }

      if (
        this.username !== "" &&
        this.email !== "" &&
        this.password !== "" &&
        this.repeatPassword !== ""
      ) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    async onSubmit() {
      if (this.username !== "" && this.password !== "") {
        const userData: UserRegister = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        try {
          // await this.registerUser(userData);
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
