<template>
  <div class="paper-page">
    <section class="paper">
      <router-link :to="`/${currentBoard.name.toLowerCase()}`">
        <div class="go-back">
          <font-awesome-icon icon="chevron-left" /> Back to Home
        </div>
      </router-link>
      <div class="paper-container" :class="isAuthenticated ? 'editing' : ''">
        <h2 class="paper__title">{{ currentPaper.title.toUpperCase() }}</h2>
        <h3 class="paper__author">by {{ currentPaper.author }}</h3>

        <div class="paper__year">
          <p class="paper__year paper__year--title">_Year:</p>
          <p class="paper__year paper__year--data">{{ currentPaper.year }}</p>
        </div>

        <div class="paper__type">
          <p class="paper__type paper__type--title">_Type:</p>
          <p class="paper__type paper__type--data">{{ currentPaper.type }}</p>
        </div>

        <div class="paper__location">
          <p class="paper__location paper__location--title">_Location:</p>
          <p class="paper__location paper__location--data">
            {{ currentPaper.location }}
          </p>
        </div>

        <div class="paper__photograph">
          <p class="paper__photograph paper__photograph--title">_Photograph:</p>
          <p class="paper__photograph paper__photograph--data">
            {{ currentPaper.photograph }}
          </p>
        </div>

        <p class="paper__text">{{ currentPaper.text }}</p>

        <ul class="paper__gallery">
          <li
            class="paper__picture"
            v-for="image in currentPaper.images"
            v-bind:key="image.id"
          >
            <img
              class="paper__picture paper__picture--image"
              :src="image"
              :alt="`Image of ${currentPaper.title}, by ${currentPaper.author}`"
            />
          </li>
        </ul>
      </div>
      <About />
    </section>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import About from "../components/About/About.vue";

export default defineComponent({
  name: "PaperPage",
  components: { About },
  computed: {
    ...mapState(["currentPaper", "currentBoard", "isAuthenticated"]),
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins.scss";
@import "../assets/styles/_variables.scss";

.go-back {
  @include lora-text;
  color: lightgray;
  height: 60px;
}

.paper-page {
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  width: 100vw;
  padding: 0 15px;
  margin-top: 200px;
  margin-bottom: 50px;
}

.paper {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  padding-bottom: 100px;

  &-container {
    &.editing {
      border: 1px dashed black;
      border-radius: 40px;
      padding: 20px;
      margin-bottom: 50px;
    }
  }

  &__title {
    @include rufina-title;
    font-size: 38px;
    padding-bottom: 30px;
    border-bottom: 1px solid black;
  }

  &__author {
    @include lora-text;
    font-weight: normal;
    font-size: 23px;
    text-align: right;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  &__year {
    @include lora-text;
    margin-bottom: 10px;

    &.paper__year--title {
      font-weight: bold;
    }
  }

  &__type {
    @include lora-text;
    margin-bottom: 10px;

    &.paper__type--title {
      font-weight: bold;
    }
  }

  &__location {
    @include lora-text;
    margin-bottom: 10px;

    &.paper__location--title {
      font-weight: bold;
    }
  }

  &__photograph {
    @include lora-text;
    margin-bottom: 10px;

    &.paper__photograph--title {
      font-weight: bold;
    }
  }

  &__text {
    margin-top: 50px;
    @include sintony-text;
  }

  &__gallery {
    list-style: none;
    margin: 100px 0;
  }

  &__picture {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-top: 15px;
  }
}

@media (min-width: $tablet) {
  .paper {
    max-width: 500px;
  }
}

@media (min-width: $desktop) {
  .paper {
    width: 80%;
    max-width: 850px;
    margin-right: 30px;

    &__author {
      margin-bottom: 150px;
    }
  }
}
</style>
