<template>
  <li class="paper" v-if="isEditing">
    <router-link to="">
      <p class="paper__create">+</p>
    </router-link>
  </li>

  <li class="paper" v-else>
    <p
      class="paper__delete"
      v-if="isAuthenticated"
      @click="isDelete = !isDelete"
    >
      <font-awesome-icon icon="xmark" />
    </p>
    <router-link :to="`${$route.path}/${paper.id}`">
      <img
        class="paper__image"
        @click="loadPaper(paper)"
        :class="isAuthenticated ? 'editing' : ''"
        :src="paper.images[0]"
        :alt="`Image of ${paper.title}, by ${paper.author}`"
        width="350"
        height="350"
      />
      <div class="paper__text-container">
        <h2 class="paper__title">/ {{ paper.title }}</h2>

        <h3 class="paper__author">by {{ paper.author }}</h3>
      </div>
    </router-link>
    <div class="modal-delete" v-if="isDelete">
      <p class="modal-delete__text">
        Are you sure you want to delete this Paper?
      </p>
      <div class="modal-delete__container">
        <button class="modal-delete__delete" @click="deletePaper(paper.id)">
          Delete
        </button>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { Paper } from "@/types/interface";

export default defineComponent({
  name: "Paper",
  props: {
    paper: Object,
    isEditing: Boolean,
  },
  data() {
    return {
      isDelete: false,
    };
  },
  computed: {
    ...mapState(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["loadCurrentPaperAction", "deletePaperAction"]),
    loadPaper(paper: Paper) {
      this.loadCurrentPaperAction(paper);
    },
    deletePaper(id: string) {
      this.deletePaperAction(id);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_mixins.scss";
@import "../../assets/styles/_variables.scss";

.paper {
  width: 100%;
  position: relative;
  list-style: none;
  overflow: hidden;
  cursor: pointer;

  &__create {
    @include flex-center;
    font-size: 75px;
    height: 320px;
    margin: 15px;
    border-radius: 30px;
    background: $button-color;
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);

    &:hover {
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    }

    &:active {
      box-shadow: none;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    }
  }

  &__image {
    width: 100%;
    object-fit: cover;
    filter: saturate(30%);

    &.editing {
      border-radius: 50px;
      padding: 15px;

      &:hover {
        -webkit-animation: tiembla 1s infinite;
        @-webkit-keyframes tiembla {
          50% {
            -webkit-transform: scale(0.98);
          }
        }
      }
    }

    &:hover {
      filter: saturate(100%);
    }
  }

  &__text-container {
    margin-top: 15px;
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
    z-index: 99;

    &:hover {
      color: darkred;
    }
  }
}

.modal-delete {
  @include modal-delete;
  border-radius: 50px;
}

@media (min-width: $tablet) {
  .paper {
    width: 100%;

    &__create {
      @include flex-center;
      height: 195px;
      width: 210px;
    }

    &__image {
      height: 225px;
      width: 100%;
    }

    &__text-container {
      margin-top: 0px;
      padding-left: 15px;
      padding-top: 7px;
    }

    &__delete {
      top: 20px;
      right: 20px;
    }
  }
}

@media (min-width: $desktop) {
  .paper {
    &__create {
      @include flex-center;
      height: 235px;
      width: 235px;
      margin-left: 15px;
    }

    &__image {
      height: 265px;
      width: 265px;
    }

    &__delete {
      top: 20px;
      right: 15px;
    }
  }
}
</style>
