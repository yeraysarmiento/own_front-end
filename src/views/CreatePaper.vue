<template>
  <div class="create-paper">
    <PaperForm />
    <About />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import PaperForm from "../components/PaperForm/PaperForm.vue";
import About from "../components/About/About.vue";

export default defineComponent({
  name: "CreatePaper",
  components: { PaperForm, About },
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
  justify-content: end;
  flex-wrap: wrap;
  width: 100vw;
  padding-right: 30px;
  margin-top: 120px;
  padding-left: 30px;

  &__title {
    @include own-title;
    width: 100%;
    margin: 150px 0 25px 0;
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
