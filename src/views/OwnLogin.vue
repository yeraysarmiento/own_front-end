<template>
  <Login />
  <div class="go-back">_Go back</div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import Login from "../components/Login/Login.vue";

export default defineComponent({
  name: "OwnLogin",
  components: { Login },
});
</script>

<style lang="scss">
@import "../assets/styles/_mixins.scss";

.go-back {
  @include lora-text;
  margin-top: 75px;
}
</style>
