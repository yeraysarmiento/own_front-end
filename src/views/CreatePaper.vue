<template>
  <div class="create-paper">
    <h2 class="create-paper__title">NEW PAPER</h2>
    <PaperForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import PaperForm from "../components/PaperForm/PaperForm.vue";

export default defineComponent({
  name: "CreatePaper",
  components: { PaperForm },
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

.create-paper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 30px;

  &__title {
    @include own-title;
    margin: 150px 0 25px 0;
    text-align: center;
  }
}

@media (min-width: $desktop) {
  .create-paper {
    &__title {
      margin-top: 80px;
    }
  }
}
</style>
