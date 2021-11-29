<template>
  <div class="notfound-container">
    <h2 class="notfound-container__text">404 NOT FOUND</h2>
    <p class="notfound-container__information">
      Please go back to our home page!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
  components: {},
});
</script>

<style lang="scss">
@import "@/assets/styles/_mixins.scss";

.notfound-container {
  height: 100vh;
  @include flex-center;
  flex-direction: column;

  &__text {
    @include lora-text;
    font-size: 30px;
  }

  &__information {
    color: darkgrey;
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 25px;
  }
}
</style>
