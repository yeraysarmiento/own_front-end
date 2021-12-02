<template>
  <OwnHeader />
  <div class="container">
    <router-view />
  </div>
  <div class="footer"><p>- You make own -</p></div>
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
@import "./assets/styles/_mixins.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

.container {
  position: absolute;
  height: 100vh;
  width: 100vw;
}

.footer {
  @include lora-text;
  @include flex-center;

  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;

  & p {
    @include flex-center;
    border-top: 1px solid black;
    width: 200px;
    padding: 15px 0 30px 0;
  }
}
</style>
