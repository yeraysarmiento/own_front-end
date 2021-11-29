<template>
  <div class="home"></div>
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
  background-image: url("./../../public/img/1.png");
  // background-image: url("./../../public/img/background-own.png");
  background-size: cover;
  background-repeat: none;
  background-position-x: -330px;
}
</style>
