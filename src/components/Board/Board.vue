<template>
  <router-link v-if="isNew" to="/desk/new">
    <li class="board board--new" v-if="isNew">+</li>
  </router-link>

  <li class="board" @click="loadBoard(board.id)" v-else>
    <router-link :to="`/${board.name.toLowerCase()}`">
      <img
        class="board__image"
        :src="board.logo"
        :alt="`Logo of ${board.name}`"
        width="125"
        height="125"
      />
      <h3 class="board__name">{{ board.name.toUpperCase() }}</h3>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "Board",
  props: {
    board: Object,
    isNew: Boolean,
  },
  methods: {
    ...mapActions(["loadCurrentBoardAction"]),
    loadBoard(id: string) {
      this.loadCurrentBoardAction(id);
    },
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

  &__name {
    display: none;
    position: relative;
    bottom: -25px;
    width: 100%;
    text-align: center;
    @include own-title;
    font-size: 14px;
    font-weight: 500;
    color: black;
  }
}

@media (min-width: $tablet) {
  .board {
    width: 208px;
    height: 208px;
    margin: 0;
  }
}

@media (min-width: $desktop) {
  .board {
    &__name {
      display: block;
    }
  }
}
</style>
