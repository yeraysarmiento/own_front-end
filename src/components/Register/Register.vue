<template>
  <div class="own-register">
    <router-link to="/home">
      <div class="go-back">
        <font-awesome-icon icon="chevron-left" /> Back to Home
      </div>
    </router-link>
    <h2 class="register-title">REGISTER</h2>
    <form
      class="register-form"
      @submit.prevent="onSubmit"
      autocomplete="off"
      @change="checkForm"
    >
      <label for="username" type="text">Username:</label>
      <input id="username" v-model="username" placeholder="Mario Gonzalez" />
      <label for="email" type="email" :class="isWrongEmail ? 'wrong' : ''"
        >Email:</label
      >
      <input
        id="email"
        v-model="email"
        placeholder="mario@minidefuet.com"
        :class="isWrongEmail ? 'wrong' : ''"
      />
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
        Register
      </button>
    </form>
    <router-link to="/login">
      <p class="signup">I already have an account</p>
    </router-link>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
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
      isWrongEmail: false,
    };
  },
  computed: {},
  methods: {
    ...mapActions(["registerUserAction"]),
    ...mapGetters(["validEmail"]),
    checkForm() {
      if (
        this.username !== "" &&
        this.email !== "" &&
        this.password !== "" &&
        this.repeatPassword !== ""
      ) {
        if (this.password !== this.repeatPassword) {
          this.isWrong = true;
        } else {
          if (!this.validEmail(this.email)) {
            this.isWrongEmail = true;
          }
          this.isWrong = false;
          this.isDisabled = false;
        }
      } else {
        this.isDisabled = true;
      }
    },
    validEmail(email: string) {
      const regexValidation = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
      return regexValidation.test(email);
    },
    async onSubmit() {
      if (this.username !== "" && this.password !== "") {
        const userData: UserRegister = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        try {
          await this.registerUserAction(userData);
          this.$router.push("/desk");
        } catch (error) {
          this.isWrong = true;
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";

.own-register {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 120px 0;
  padding: 0 30px;
}

.register-title {
  @include own-title;
}

.register-form {
  @include form;
  & button {
    margin: 30px 0 30px 0;
  }
}

.go-back {
  @include lora-text;
  color: lightgray;
  height: 60px;
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
