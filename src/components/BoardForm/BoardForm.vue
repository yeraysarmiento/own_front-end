<template>
  <div class="own-register">
    <h2 class="register-title">NEW BOARD</h2>
    <form
      class="register-form"
      @submit.prevent="onSubmit"
      autocomplete="off"
      @change="checkForm"
    >
      <label for="logo">Logo:</label>
      <input id="logo" v-on="logo" type="file" />
      <label for="website" type="text">Website name:</label>
      <p>www.own.com/</p>
      <input id="website" v-model="website" placeholder="Amallective" />
      <label for="email" type="email">Contact email:</label>
      <input id="email" v-model="email" placeholder="info@amallective.com" />
      <label for="area">Area:</label>
      <select id="area" name="area">
        <option value="Choose an area">Choose an area</option>
        <option value="Design">Design</option>
        <option value="Business">Business</option>
        <option value="Architecture">Architecture</option>
        <option value="Other">Other</option>
      </select>
      <label for="instagram" type="text">Instagram</label>
      <input
        id="instagram"
        v-model="instagram"
        placeholder="instagram.com/amallective"
      />
      <label for="twitter" type="text">Twitter</label>
      <input
        id="twitter"
        v-model="twitter"
        placeholder="twitter.com/amallective"
      />
      <label for="facebook" type="text">Facebook</label>
      <input
        id="facebook"
        v-model="facebook"
        placeholder="facebook.com/amallective"
      />
      <label for="description" type="text">Write about your website:</label>
      <textarea
        id="description"
        v-model="description"
        placeholder="What is your website about?"
      />
      <button
        class="button"
        type="submit"
        :disabled="isDisabled"
        :class="isDisabled ? 'disabled' : ''"
      >
        Create board
      </button>
    </form>
    <router-link to="/home">
      <div class="go-back">_Go back</div>
    </router-link>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoardForm",
  components: {},
  data() {
    return {
      name: "",
      contactEmail: "",
      password: "",
      isDisabled: true,
    };
  },
  computed: {},
  methods: {},
});
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";
</style>
