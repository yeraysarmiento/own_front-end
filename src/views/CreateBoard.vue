<template>
  <div class="create-board">
    <h2 class="create-board__title">NEW BOARD</h2>
    <BoardForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BoardForm from "../components/BoardForm/BoardForm.vue";

export default defineComponent({
  name: "CreateBoard",
  components: { BoardForm },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins.scss";
@import "../assets/styles/_variables.scss";

.create-board {
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
  .create-board {
    &__title {
      margin-top: 80px;
    }
  }
}
</style>
