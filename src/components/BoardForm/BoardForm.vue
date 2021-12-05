<template>
  <div class="own-register">
    <form
      class="register-form"
      @submit.prevent="onSubmit"
      autocomplete="off"
      @change="checkForm"
    >
      <div class="register-form__container">
        <div class="logo-container">
          <label for="logo">*Logo:</label>
          <ImagePreview v-on:input="onImage" />
          <p class="logo-container__limit">Up to 1mb</p>
        </div>

        <div class="second-container">
          <label for="name" type="text">*Website name:</label>
          <div class="website-container">
            <p>www.own.com/</p>
            <input id="name" v-model="name" placeholder="Amallective" />
          </div>

          <label for="email" type="file">Contact email:</label>
          <input
            id="email"
            v-model="email"
            placeholder="info@amallective.com"
          />
          <label for="category">*Category:</label>
          <select id="category" name="category" v-model="category" required>
            <option value="Choose an area">Choose an area</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
            <option value="Architecture">Architecture</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div class="register-form__container">
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
          placeholder="Tell your viewers about your website"
          required
        />
      </div>
      <div class="button-container">
        <p class="required">*Required fields</p>
        <button
          class="button"
          type="submit"
          :disabled="isDisabled"
          :class="isDisabled ? 'disabled' : ''"
        >
          Create board
        </button>
      </div>
    </form>
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
      isWrong: false,
    };
  },
  computed: {},
  methods: {
    ...mapActions(["createBoardAction", "getTokenAction"]),
    onImage(image: Logo) {
      [this.logo] = image.srcElement.files;
    },
    checkForm() {
      if (
        this.name.length > 3 &&
        this.name.length < 15 &&
        this.category !== "" &&
        this.about.length < 225 &&
        this.logo &&
        this.category !== "Choose an area"
      ) {
        this.isDisabled = false;
      }
    },
    async onSubmit() {
      const boardData = new FormData();
      boardData.append("name", this.name);
      boardData.append("email", this.email);
      boardData.append("category", this.category);
      boardData.append("logo", this.logo);
      boardData.append("about", this.about);
      boardData.append(
        "social[twitter]",
        this.twitter || "https://twitter.com/?lang=es"
      );
      boardData.append(
        "social[instagram]",
        this.instagram || "https://www.instagram.com/?hl=es"
      );
      boardData.append(
        "social[facebook]",
        this.facebook || "https://es-es.facebook.com/"
      );

      try {
        await this.createBoardAction(boardData);
        this.isWrong = false;
        this.$router.push("/desk");
      } catch (error) {
        this.isWrong = true;
      }
    },
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.getTokenAction();
    } else {
      this.$router.push("/login");
    }
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";

.own-register {
  margin: 0 auto;
}

.button-container {
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  flex-direction: column;
}

.register-form {
  @include form;

  .button {
    margin-bottom: 30px;
  }

  & select {
    margin-top: 10px;
  }

  &__container {
    margin-top: 10px;
  }

  & input {
    margin-bottom: 10px;
  }
}

.website-container {
  width: 100%;
  display: flex;
  align-items: center;

  & input {
    margin-left: 15px;
  }
}

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

.required {
  margin-bottom: 5px;
  color: darkgrey;
  align-self: start;
}

@media (min-width: $tablet) {
  .register-form {
    display: flex;
    flex-direction: row;
    max-width: 650px;
    height: 600px;
    padding: 30px 0;

    & label {
      padding: 0 10px 0 10px;
    }

    &__container {
      width: 100%;
      margin: 0 15px;
    }

    &__container:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 100%;
    }

    &__container:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      justify-content: start;
    }
  }

  .button-container {
    position: absolute;
    bottom: -110px;
    flex-direction: row;
    height: 100px;
    justify-content: space-between;
  }

  .logo-container {
    height: 100%;
  }

  .second-container {
    height: 100%;
  }
}

@media (min-width: $desktop) {
  .register-form {
    font-size: 14px;
  }
}
</style>
