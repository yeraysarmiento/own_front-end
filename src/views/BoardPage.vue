<template>
  <div class="board-page"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import BoardHeader from "../components/BoardHeader/BoardHeader.vue";

export default defineComponent({
  name: "CreateBoard",
  components: {},
  computed: {
    ...mapState(["currentBoard"]),
  },
  methods: {
    ...mapActions(["loadBoardByNameAction"]),
  },
  mounted() {
    this.loadBoardByNameAction(this.$route.params.boardName);
    console.log(this.$route.params.boardName);
  },
});
</script>

<style lang="scss">
@import "../assets/styles/_mixins.scss";
@import "../assets/styles/_variables.scss";
</style>
