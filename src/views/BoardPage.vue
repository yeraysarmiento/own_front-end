<template>
  <div class="board-page"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "CreateBoard",
  components: {},
  computed: {
    ...mapState(["currentBoard"]),
  },
  methods: {
    ...mapActions(["loadBoardByNameAction", "getTokenAction"]),
  },
  mounted() {
    this.loadBoardByNameAction(this.$route.params.boardName);
    if (sessionStorage.getItem("user")) {
      this.getTokenAction();
    }
  },
});
</script>

<style lang="scss">
@import "../assets/styles/_mixins.scss";
@import "../assets/styles/_variables.scss";
</style>
