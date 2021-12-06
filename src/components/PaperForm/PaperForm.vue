<template>
  <div class="paperform-page">
    <router-link :to="`/${currentBoard?.name.toLowerCase()}`">
      <div class="go-back">
        <font-awesome-icon icon="chevron-left" /> Back to
        {{ currentBoard?.name.toUpperCase() }}
      </div>
    </router-link>
    <h2 class="create-paper__title">
      {{ isEditing ? "EDIT PAPER" : "NEW PAPER" }}
    </h2>

    <form
      class="paper-form"
      @submit.prevent="isEditing ? onEdit($event) : onSubmit($event)"
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

      <label for="images">Upload images (up to 3mb):</label>
      <input
        class="paper-form__images"
        type="file"
        id="images"
        name="images"
        multiple
        accept="image/*"
      />

      <div class="button-container">
        <button
          class="button"
          type="submit"
          :disabled="isEditing ? (isDisabled = false) : (isDisabled = true)"
          :class="isDisabled ? 'disabled' : ''"
        >
          {{ isEditing ? "Edit Paper" : "Create Paper" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions, mapMutations, mapState } from "vuex";

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
      images: "" as any,
      isDisabled: true,
    };
  },
  computed: {
    ...mapState(["currentBoard", "isEditing", "currentPaper"]),
  },
  methods: {
    ...mapActions([
      "getTokenAction",
      "createPaperAction",
      "editTrue",
      "editPaperAction",
    ]),
    ...mapMutations(["STOP_LOADING"]),
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
    async onSubmit(event: any) {
      [this.images] = event.srcElement[7].files;

      const paperData = new FormData();
      paperData.append("title", this.title);
      paperData.append("author", this.author);
      paperData.append("year", this.year);
      paperData.append("type", this.type);
      paperData.append("location", this.location);
      paperData.append("text", this.text);
      paperData.append("images", this.images);

      try {
        await this.createPaperAction({
          idBoard: this.currentBoard.id,
          paper: paperData,
        });
        this.$router.push(`/${this.currentBoard.name}`);
      } catch (error) {
        this.STOP_LOADING();
      }
    },
    async onEdit(event: any) {
      let editedPaper;

      if (event.srcElement[7].files.length > 0) {
        [this.images] = event.srcElement[7].files;
        editedPaper = new FormData();
        editedPaper.append("title", this.title);
        editedPaper.append("author", this.author);
        editedPaper.append("year", this.year);
        editedPaper.append("type", this.type);
        editedPaper.append("location", this.location);
        editedPaper.append("text", this.text);
        editedPaper.append("images", this.images);
      } else {
        console.log(this.currentPaper.images[0]);
        editedPaper = {
          title: this.title,
          author: this.author,
          year: this.year,
          type: this.type,
          location: this.location,
          text: this.text,
          images: this.currentPaper.images[0],
        };
      }

      try {
        await this.editPaperAction({
          idPaper: this.currentPaper.id,
          paper: editedPaper,
        });
        this.$router.push(`/${this.currentBoard.name}`);
      } catch (error) {
        this.STOP_LOADING();
      }
    },
    fulfillInputs() {
      this.title = this.currentPaper.title;
      this.author = this.currentPaper.author;
      this.year = this.currentPaper.year;
      this.location = this.currentPaper.location;
      this.photograph = this.currentPaper.photograph;
      this.type = this.currentPaper.type;
      this.text = this.currentPaper.text;
      this.images = this.currentPaper.images;
    },
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.getTokenAction();
    } else {
      this.$router.push("/login");
    }

    if (this.$route.params.paperId) {
      this.editTrue();
      this.fulfillInputs();
    }
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";

.paper-form {
  @include form;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  padding-bottom: 100px;
  border-bottom: none;

  & select {
    margin-top: 15px;
  }

  & label {
    padding-bottom: 0;
    padding-top: 30px;
  }

  &__images {
    background: none;

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::before {
      text-align: center;
      color: lightgrey;
      flex-direction: row;
      content: "Click to add pictures                 ";
    }
  }
}
.button-container {
  display: flex;
  justify-content: end;
}

.create-paper__title {
  @include own-title;
}

@media (min-width: $tablet) {
  .paper-form {
    width: 500px;
  }
}

@media (min-width: $desktop) {
  .paper-form {
    width: 750px;
  }
}
</style>
