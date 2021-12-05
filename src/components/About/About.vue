<template>
  <div class="about-container">
    <div class="about">
      <h2 class="about__title">{{ currentBoard?.name.toUpperCase() }}</h2>
      <p class="about__description">{{ currentBoard?.about }}</p>
      <a class="about__email" :href="`mailto:${currentBoard?.email}`">{{
        currentBoard?.email
      }}</a>
      <ul class="social">
        <li class="social__icon" v-if="currentBoard?.social.instagram">
          <a :href="currentBoard.social.instagram" target="_blank"
            ><img
              src="../../assets/icons/instagram.svg"
              height="30"
              width="30"
              alt="Instagram icon"
          /></a>
        </li>
        <li class="social__icon" v-if="currentBoard?.social.facebook">
          <a :href="currentBoard?.social.facebook" target="_blank"
            ><img
              src="../../assets/icons/facebook.svg"
              height="30"
              width="30"
              alt="Facebook icon"
          /></a>
        </li>
        <li class="social__icon" v-if="currentBoard?.social.twitter">
          <a :href="currentBoard?.social.twitter" target="_blank"
            ><img
              src="../../assets/icons/twitter.svg"
              height="30"
              width="30"
              alt="Twitter icon"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "PaperPage",
  computed: {
    ...mapState(["currentBoard"]),
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_mixins.scss";
@import "../../assets/styles/_variables.scss";

.about-container {
  width: 100%;
  @include flex-center;
  justify-content: end;
  margin-bottom: 150px;
}

.about {
  max-width: 500px;
  margin: 0 15px 0 15px;
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
  .about__title {
    @include helvetica-title;
  }
}

@media (min-width: $desktop) {
  .about__title {
    @include helvetica-title;
  }
}
</style>
