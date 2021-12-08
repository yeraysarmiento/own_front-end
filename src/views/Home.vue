<template>
  <div class="home">
    <section class="slogan">Ready<br />to <span>OWN?</span></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style lang="scss">
@import "@/assets/styles/_mixins.scss";

.home {
  height: 100vh;
  overflow: hidden;
  // background: url("https://firebasestorage.googleapis.com/v0/b/own-api-2c648.appspot.com/o/assets%2Fbackground-own.svg?alt=media&token=f75fed37-7a6f-4617-be8d-bc2e4754186b");
  background-size: cover;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  background-repeat: no-repeat;
  opacity: 0.8;
  background-color: $button-color;
}

.slogan {
  font-size: 50px;
  font-family: "Roboto", sans-serif;
  margin: 50px 30px;
  color: black;
  width: 100vw;
  padding-bottom: 40px;

  & span {
    font-family: "Helvetica Neue", sans-serif;
    font-style: italic;
    font-weight: 800;
  }
}
</style>
