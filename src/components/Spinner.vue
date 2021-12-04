<template>
  <div class="own-spinner">
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Spinner",
  props: {},
  computed: {},
  methods: {},
});
</script>

<style lang="scss">
@import "../assets/styles/_mixins.scss";

.own-spinner {
  @include spinner;
  @include flex-center;

  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $button-color;
}
</style>
