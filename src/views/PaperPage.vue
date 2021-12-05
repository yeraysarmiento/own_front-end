<template>
  <div class="paper-page">
    <h2 class="paper__title">{{ paper.title }}</h2>
    <h3 class="paper__author">by {{ paper.author }}</h3>

    <div class="paper__year">
      <p class="paper__year paper__year--title">_Year:</p>
      <p class="paper__year paper__year--data">{{ paper.year }}</p>
    </div>

    <div class="paper__type">
      <p class="paper__type paper__type--title">_Type:</p>
      <p class="paper__type paper__type--data">{{ paper.type }}</p>
    </div>

    <div class="paper__location">
      <p class="paper__location paper__location--title">_Location:</p>
      <p class="paper__location paper__location--data">{{ paper.location }}</p>
    </div>

    <div class="paper__photograph">
      <p class="paper__photograph paper__photography--title">_Photograph:</p>
      <p class="paper__photograph paper__photography--data">
        {{ paper.photograph }}
      </p>
    </div>

    <p class="paper__text">{{ paper.text }}</p>

    <ul class="paper__gallery">
      <li
        class="paper__picture"
        v-for="image in paper.images"
        v-bind:key="image.id"
      >
        <img
          class="paper__picture paper__picture--image"
          :class="isAuthenticated ? 'editing' : ''"
          :src="paper.images[0]"
          :alt="`Image of ${paper.title}, by ${paper.author}`"
          width="350"
          height="350"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "PaperPage",
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
    console.log(this.$route);
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
</style>
