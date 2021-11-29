<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import "@fontsource/sintony";
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
});
</script>

<style lang="scss">
@import "./assets/styles/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Sintony";
  background-color: $background;
  color: black;
}
</style>
