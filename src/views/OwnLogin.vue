<template>
  <Login />
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import Login from "../components/Login/Login.vue";

export default defineComponent({
  name: "OwnLogin",
  components: { Login },
});
</script>

<style lang="scss"></style>
