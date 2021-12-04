<template>
  <li class="paper">
    <router-link :to="`${$route.path}/${paper.id}`">
      <img
        class="paper__image"
        :class="isAuthenticated ? 'editing' : ''"
        :src="paper.images[0]"
        :alt="`Image of ${paper.title}, by ${paper.author}`"
        height="350"
        width="350"
      />
      <div class="paper__text-container">
        <h2 class="paper__title">/ {{ paper.title }}</h2>

        <h3 class="paper__author">{{ paper.author }}</h3>
        <p class="paper__delete" v-if="isAuthenticated">
          <font-awesome-icon icon="xmark" />
        </p>
      </div>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Paper",
  props: {
    // boardName: String,
    paper: Object,
  },
  computed: {
    ...mapState(["isAuthenticated"]),
  },
  methods: {},
});
</script>

<style lang="scss">
@import "../../assets/styles/_mixins.scss";
@import "../../assets/styles/_variables.scss";

.paper {
  align-items: stretch;
  width: 100%;
  position: relative;
  list-style: none;
  overflow: hidden;

  &__image {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    filter: saturate(30%);

    &:hover {
      filter: saturate(100%);
      -webkit-animation: tiembla 1s infinite;
      @-webkit-keyframes tiembla {
        50% {
          -webkit-transform: rotateZ(0deg) scale(0.98);
        }
      }
    }

    &.editing {
      border-radius: 50px;
      padding: 15px;
    }
  }

  &__text-container {
    padding-left: 20px;
    margin-bottom: 45px;
  }

  &__title {
    @include rufina-title;
  }

  &__author {
    @include rufina-title;
    color: lightgray;
  }

  &__delete {
    @include flex-center;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 20px;
  }
}

@media (min-width: $tablet) {
  .paper {
    width: 100%;
    &__image {
      height: 225px;
      width: 100%;
    }

    &__text-container {
      padding-left: 25px;
      padding-top: 5px;
    }

    &__delete {
      top: 20px;
      right: 20px;
    }
  }
}
</style>
