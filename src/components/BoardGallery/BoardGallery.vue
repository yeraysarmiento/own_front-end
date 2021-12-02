<template>
  <ul class="board-gallery">
    <Board v-for="board in boards" v-bind:key="board.id" :board="board" />
    <Board v-if="boards.length < 5" :isNew="true" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Board from "../Board/Board.vue";

export default defineComponent({
  name: "BoardGallery",
  components: { Board },
  props: {
    boards: Array,
  },
});
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";

.board-gallery {
  display: grid;
  width: 250px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0 auto;
  border: 1px dashed black;
  border-radius: 25px;
  padding: 20px;
  height: 100%;
  margin-bottom: 50px;
  row-gap: 20px;

  &::-webkit-scrollbar-thumb:vertical {
    height: 10px;
  }

  &::-webkit-scrollbar {
    width: 2px;
    height: 20px;
  }
  &::-webkit-scrollbar-track {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10px;
  }
}
</style>
