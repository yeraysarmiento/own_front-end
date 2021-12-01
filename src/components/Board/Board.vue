<template>
  <router-link v-if="isNew" to="/desk/new"
    ><li class="board board--new">+</li></router-link
  >

  <li class="board" v-else>
    <img
      class="board__image"
      v-bind:src="board.logo"
      alt="Logo of {{board.name}}"
      width="125"
      height="125"
    />
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Board",
  props: {
    board: Object,
    isNew: Boolean,
  },
});
</script>

<style lang="scss">
@import "../../assets/styles/_mixins.scss";
@import "../../assets/styles/_variables.scss";

.board {
  @include flex-center;
  list-style: none;
  width: 100%;
  height: 208px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;

  &:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  }

  &:active {
    box-shadow: none;
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);
  }

  &__image {
    object-fit: contain;
    background-position: center;
  }

  &.board--new {
    font-size: 75px;
    background: $button-color;
    border: none;
  }
}
</style>
