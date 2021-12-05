<template>
  <ul class="board-gallery">
    <Board v-for="board in boards" v-bind:key="board.id" :board="board" />
    <Board
      v-for="number in 5 - boards.length"
      v-bind:key="number.id"
      :isNew="number < 6"
    />
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

  &::-webkit-scrollbar-thumb:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10px;
  }
}

@media (min-width: $tablet) {
  .board-gallery {
    column-gap: 20px;
    height: 252px;
    max-width: 850px;
    width: 90%;
    min-width: 600px;
    overflow-y: hidden;
    overflow-x: scroll;
    grid-template-columns: repeat(5, 208px);
    margin-top: 50px;
  }
}

@media (min-width: $desktop) {
  .board-gallery {
    column-gap: 20px;
    height: 252px;
    width: 80%;
    max-width: 1180px;
    overflow-y: hidden;
    overflow-x: scroll;
    grid-template-columns: repeat(5, 208px);
    margin-top: 50px;
  }
}
</style>
