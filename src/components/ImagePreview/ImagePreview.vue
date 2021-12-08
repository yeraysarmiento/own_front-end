<template>
  <div class="image-preview">
    <div class="image-preview__container">
      <div
        class="image-preview__element"
        :style="{ 'background-image': `url(${previewImage})` }"
        @click="selectImage"
      ></div>
    </div>
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
        "https://firebasestorage.googleapis.com/v0/b/own-api-2c648.appspot.com/o/assets%2Fupload-logo.png?alt=media&token=a8f9c376-45ec-4609-a792-3a834abcbdda",
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      const input = this.$refs?.fileInput;
      const file = input?.files;
      if (file && file[0]) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.previewImage = event.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_mixins.scss";

.image-preview {
  width: 100%;

  &__input {
    display: none;
  }

  &__container {
    padding: 10px;
    width: 150px;
    height: 150px;
    position: absolute;
    top: 0;
    right: 0;
    border: 1px dashed black;
    border-radius: 25px;
    cursor: pointer;
  }

  &__element {
    @include flex-center;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
