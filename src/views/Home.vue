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
  object-fit: cover;
  background-size: cover;
  background-position-x: -550px;
  display: flex;
  align-items: end;
}

.slogan {
  font-size: 50px;
  font-family: "Roboto", sans-serif;
  margin: 50px 30px;
  color: black;
  width: 100vw;
  border-bottom: 1px solid white;
  padding-bottom: 40px;

  & span {
    font-family: "Helvetica Neue", sans-serif;
    font-style: italic;
    font-weight: 800;
  }
}

@media (min-width: $mobile) {
  .home {
    background-position-x: 0;
  }
}
</style>
