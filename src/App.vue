<template>
  <OwnHeader />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import "@fontsource/sintony";
import "@fontsource/lora";

import { defineComponent } from "vue";
import OwnHeader from "./components/OwnHeader/OwnHeader.vue";

export default defineComponent({
  name: "app",
  components: {
    OwnHeader,
  },
});
</script>

<style lang="scss">
@import "./assets/styles/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  position: absolute;
  height: 100vh;
  width: 100vw;
}

body {
  background-color: $main-color;
}

a {
  text-decoration: none;

  &:visited {
    color: inherit;
  }
}
</style>
