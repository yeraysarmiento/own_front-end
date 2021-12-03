<template>
  <div class="board-page">
    <ul class="papers-container">
      <Paper
        v-for="paper in currentBoard?.papers"
        v-bind:key="paper?.id"
        :paper="paper"
      />
    </ul>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import Paper from "../components/Paper/Paper.vue";

export default defineComponent({
  name: "CreateBoard",
  components: { Paper },
  computed: {
    ...mapState(["currentBoard"]),
  },
  methods: {
    ...mapActions(["loadBoardByNameAction", "getTokenAction"]),
  },
  mounted() {
    this.loadBoardByNameAction(this.$route.params.boardName);
    if (localStorage.getItem("user")) {
      this.getTokenAction();
    }
  },
});
</script>

<style lang="scss">
@import "../assets/styles/_mixins.scss";
@import "../assets/styles/_variables.scss";

.papers-container {
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(1, 1fr);

  row-gap: 50px;
  margin-top: 200px;
}

.paper {
  align-items: stretch;
  width: 100%;
  position: relative;

  &__image {
    width: 100%;
    object-fit: cover;
  }

  &__text-container {
    padding-left: 15px;
    padding-top: 15px;
  }

  &__title {
    @include rufina-title;
  }

  &__author {
    @include rufina-title;
    color: lightgray;
  }

  &__delete {
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 20px;
  }
}
</style>
