<template>
  <div class="board-page">
    <Spinner />
    <!-- <ul class="papers-container" :class="isAuthenticated ? 'editing' : ''">
      <Paper :isEditing="true" v-if="isAuthenticated" />
      <Paper
        v-for="paper in currentBoard?.papers"
        v-bind:key="paper?.id"
        :paper="paper"
      />
    </ul> -->
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import Paper from "../components/Paper/Paper.vue";
import Spinner from "../components/Spinner.vue";

export default defineComponent({
  name: "CreateBoard",
  components: { Paper, Spinner },
  data() {
    return {
      isLoading: "",
    };
  },
  computed: {
    ...mapState(["currentBoard", "isAuthenticated"]),
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
    margin: 30px;
  }

  .papers-container {
    width: 1080px;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
  }
}
</style>
