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
    <div class="about">
      <h2 class="about__title">{{ currentBoard?.name.toUpperCase() }}</h2>
      <p class="about__description">{{ currentBoard?.about }}</p>
      <p class="about__email">{{ currentBoard?.email }}</p>
      <ul class="social">
        <li class="social__icon" v-if="currentBoard?.social.instagram">
          <a :href="currentBoard.social.instagram" target="_blank"
            ><img src="../assets/icons/instagram.svg" height="30" width="30"
          /></a>
        </li>
        <li class="social__icon" v-if="currentBoard?.social.facebook">
          <a :href="currentBoard?.social.facebook" target="_blank"
            ><img src="../assets/icons/facebook.svg" height="30" width="30"
          /></a>
        </li>
        <li class="social__icon" v-if="currentBoard?.social.twitter">
          <a :href="currentBoard?.social.twitter" target="_blank"
            ><img src="../assets/icons/twitter.svg" height="30" width="30"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import Paper from "../components/Paper/Paper.vue";

export default defineComponent({
  name: "CreateBoard",
  components: { Paper },
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

.about {
  max-width: 500px;
  margin: 0 15px 300px 15px;
  padding-top: 50px;
  border-top: 1px solid black;

  &__title {
    @include helvetica-title;
    font-size: 30px;
  }

  &__description {
    @include lora-text;
    margin: 30px 0;
    line-height: 30px;
  }

  &__email {
    @include lora-text;
    margin: 50px 0;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
}

.social {
  @include flex-center;
  justify-content: start;
  list-style: none;
  margin-top: 50px;

  &__icon {
    @include flex-center;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
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

  .about__title {
    @include helvetica-title;
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

  .about__title {
    @include helvetica-title;
  }
}
</style>
