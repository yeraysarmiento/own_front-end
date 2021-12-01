<template>
  <div class="own-register">
    <h2 class="register-title">NEW BOARD</h2>

    <form
      class="register-form"
      @submit.prevent="onSubmit"
      autocomplete="off"
      @change="checkForm"
    >
      <div class="logo-container">
        <label for="logo">*Logo:</label>
        <ImagePreview v-on:input="onImage" />
        <p class="logo-container__limit">Up to 1mb</p>
      </div>

      <label for="name" type="text">*Website name:</label>
      <div class="website-container">
        <p>www.own.com/</p>
        <input id="name" v-model="name" placeholder="Amallective" />
      </div>

      <label for="email" type="file">Contact email:</label>
      <input id="email" v-model="email" placeholder="info@amallective.com" />

      <label for="category">*Category:</label>
      <select id="category" name="category" v-model="category" required>
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

      <label for="about" type="text">*Write about your website:</label>
      <textarea
        id="about"
        v-model="about"
        rows="10"
        placeholder="What is your website about?"
        required
      />

      <button
        class="button"
        type="submit"
        :disabled="isDisabled"
        :class="isDisabled ? 'disabled' : ''"
      >
        Create board
      </button>
      <p class="required">*Required fields</p>
    </form>
    <router-link to="/home">
      <div class="go-back">_Go back</div>
    </router-link>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import ImagePreview from "../ImagePreview.vue";
import { Logo } from "@/types/interface";

export default defineComponent({
  name: "BoardForm",
  components: { ImagePreview },
  data() {
    return {
      name: "",
      email: "",
      category: "",
      instagram: "",
      twitter: "",
      facebook: "",
      about: "",
      isDisabled: true,
      logo: {} as Logo,
    };
  },
  computed: {},
  methods: {
    ...mapActions(["createBoardAction"]),
    onImage(image: Logo) {
      [this.logo] = image.srcElement.files;
    },
    checkForm() {
      if (
        this.name.length > 3 &&
        this.name.length < 15 &&
        this.category !== "" &&
        this.about.length > 15 &&
        this.about.length < 225 &&
        this.logo &&
        this.category !== "Choose an area"
      ) {
        this.isDisabled = false;
      }
    },
    validEmail(email: string) {
      const regexValidation = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
      return regexValidation.test(email);
    },
    async onSubmit() {
      const social: any = {
        instagram: this.instagram,
        twitter: this.twitter,
        facebook: this.facebook,
      };

      const a = {
        name: this.name,
        about: this.about,
        email: this.email,
        category: this.category,
        social: {
          instagram: this.instagram,
          twitter: this.twitter,
          facebook: this.facebook,
        },
      };

      const boardData = new FormData();
      boardData.append("name", this.name);
      boardData.append("email", this.email);
      boardData.append("category", this.category);
      boardData.append("logo", this.logo);
      boardData.append("about", this.about);
      boardData.append("social[twitter]", this.twitter);
      boardData.append("social[instagram]", this.instagram);
      boardData.append("social[facebook]", this.facebook);

      this.createBoardAction(boardData);
    },
  },
});
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";

.logo-container {
  flex-direction: column;
  width: 100%;
  height: 165px;
  position: relative;

  & label {
    text-align: left;
    align-self: start;
  }

  &__limit {
    color: darkgrey;
    margin: 15px;
  }
}

.image-preview__input {
  display: none;
}

.register-form {
  @include form;
}

.website-container {
  width: 100%;
  display: flex;
  align-items: center;

  & input {
    margin-left: 15px;
  }
}

.required {
  margin-bottom: 5px;
  color: darkgrey;
}
</style>
