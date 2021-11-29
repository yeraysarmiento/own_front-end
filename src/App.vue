<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import "@fontsource/sintony";
import "@fontsource/lora";

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

h1 {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Sintony";
  background-color: $main-color;
  color: black;
}
</style>
