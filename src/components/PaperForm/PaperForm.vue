<template>
  <div class="paperform-page">
    <form
      class="paper-form"
      @submit.prevent="onSubmit"
      autocomplete="off"
      @change="checkForm"
    >
      <label for="title" type="text">Title:</label>
      <input id="title" v-model="title" placeholder="Title" />

      <label for="author" type="text">Author:</label>
      <input id="author" v-model="author" placeholder="Author" />

      <label for="year" type="text">Year:</label>
      <input id="year" v-model="year" placeholder="Year" />

      <label for="location" type="text">Location:</label>
      <input id="location" v-model="location" placeholder="Location" />

      <label for="photograph" type="text">Photography by:</label>
      <input id="photograph" v-model="photograph" placeholder="Photograph" />

      <label for="type">Type:</label>
      <select id="type" name="type" v-model="type">
        <option value="Choose an area">Choose a type</option>
        <option value="Architecture">Architecture</option>
        <option value="Interiors">Interiors</option>
        <option value="Landscape">Landscape</option>
      </select>

      <label for="text" type="text">Description:</label>
      <textarea
        id="text"
        v-model="text"
        rows="20"
        maxlength="2000"
        placeholder="What do you want to write?"
        required
      />

      <label for="file">Upload images (up to 3mb):</label>
      <input
        class="paper-form__images"
        type="file"
        id="file"
        name="file"
        multiple
        accept="image/*"
      />

      <div class="button-container">
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
import { mapActions, mapState } from "vuex";
import { Logo } from "@/types/interface";

export default defineComponent({
  name: "PaperForm",
  data() {
    return {
      title: "",
      author: "",
      year: "",
      type: "",
      location: "",
      photograph: "",
      text: "",
      images: "",
      isDisabled: true,
      logo: {} as Logo,
    };
  },
  computed: {
    ...mapState(['currentBoard'])
  },
  methods: {
    ...mapActions(["createBoardAction", "getTokenAction", "createPaperAction"]),
    checkForm() {
      if (
        this.title !== "" &&
        this.author !== "" &&
        this.year !== "" &&
        this.type !== "" &&
        this.location !== "" &&
        this.photograph !== "" &&
        this.text !== ""
      ) {
        this.isDisabled = false;
      }
    },
        async onSubmit() {
      const paperData = new FormData();
      paperData.append("title", this.title);
      paperData.append("author", this.author);
      paperData.append("year", this.year);
      paperData.append("type", this.type);
      paperData.append("location", this.location);
      paperData.append("text", this.text);
      paperData.append("images", this.images);

      try {
        await this.createPaperAction(paperData);
        this.$router.push(`/${this.currentBoard.name}`);
      } catch (error) {

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
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";

.paper-form {
  @include form;

  & label {
    padding-bottom: 0;
    padding-top: 30px;
  }

  &__images {
    background: red;
  }
}
</style>
