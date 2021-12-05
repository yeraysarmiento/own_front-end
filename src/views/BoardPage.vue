<template>
  <div class="board-page">
    <ul class="papers-container" :class="isAuthenticated ? 'editing' : ''">
      <Paper :isEditing="true" v-if="isAuthenticated" />
      <Paper
        v-for="paper in currentBoard?.papers"
        v-bind:key="paper?.id"
        :paper="paper"
      />
    </ul>
    <About :board="currentBoard" />
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import Paper from "../components/Paper/Paper.vue";
import About from "../components/About/About.vue";

export default defineComponent({
  name: "BoardPage",
  components: { Paper, About },
  computed: {
    ...mapState(["currentBoard", "isAuthenticated"]),
  },
  methods: {
    ...mapActions(["loadBoardByNameAction", "getTokenAction"]),
  },
  mounted() {
    if (this.$route.params.boardName) {
      this.loadBoardByNameAction(this.$route.params.boardName);
    }

    if (localStorage.getItem("user")) {
      this.getTokenAction();
    }
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins.scss";
@import "../assets/styles/_variables.scss";

.board-page {
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
}

.papers-container {
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 200px;
  padding-bottom: 250px;
  margin-bottom: 50px;
}

@media (min-width: $tablet) {
  .board-page {
    margin: 15px;
  }

  .papers-container {
    margin-right: 10px;
    width: 500px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;

    &.editing {
      border: 1px dashed black;
      border-radius: 40px;
    }
  }
}

@media (min-width: $desktop) {
  .board-page {
    margin: 15px;
  }

  .papers-container {
    width: 1080px;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
  }
}
</style>
