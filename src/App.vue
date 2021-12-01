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
import { mapActions } from "vuex";
import OwnHeader from "./components/OwnHeader/OwnHeader.vue";

export default defineComponent({
  name: "app",
  methods: {
    ...mapActions(["getTokenAction"]),
  },
  components: {
    OwnHeader,
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.getTokenAction();
    }
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
  color: inherit;

  &:focus {
    color: inherit;
  }

  &:link {
    color: inherit;
  }

  &:active {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }
}
</style>
