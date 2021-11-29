<template>
  <Register />
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import Register from "../components/Register/Register.vue";

export default defineComponent({
  name: "OwnLogin",
  components: { Register },
});
</script>

<style lang="scss"></style>
