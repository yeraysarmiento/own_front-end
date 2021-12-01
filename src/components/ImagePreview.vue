<template>
  <div class="image-preview">
    <div
      class="image-preview__element"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    ></div>

    <input
      class="image-preview__input"
      ref="fileInput"
      type="file"
      @input="pickFile"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImagePreview",
  data() {
    return {
      previewImage:
        "https://iconape.com/wp-content/files/la/10528/png/upload.png",
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      const input = this.$refs.fileInput;
      const file = input.files;
      if (file && file[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
});
</script>

<style lang="scss">
@import "../assets/styles/_mixins.scss";

.image-preview {
  width: 100%;

  &__element {
    @include flex-center;
    width: 150px;
    height: 150px;
    cursor: pointer;
    background-size: cover;
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
