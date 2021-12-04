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

.board-page {
  display: flex;
  justify-content: end;
}

.papers-container {
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(1, 1fr);

  margin-top: 200px;
  padding-bottom: 250px;
  margin-bottom: 50px;
  border-bottom: 1px solid black;
}

@media (min-width: $tablet) {
  .board-page {
    margin: 15px;
  }

  .papers-container {
    width: 500px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
