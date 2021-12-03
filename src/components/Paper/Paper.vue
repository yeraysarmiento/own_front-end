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
</style>
