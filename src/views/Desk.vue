<template>
  <div class="desk">
    <h2 class="desk__title" @click="getUsername">
      Welcome <span class="desk__username">{{ currentUser.username }}</span>
    </h2>
    <p class="desk__count" v-if="boards?.length === 0">
      Create your first board!
    </p>
    <p class="desk__count" v-else-if="boards?.length === 1">
      You have 1 board.
    </p>
    <p class="desk__count" v-else>You have {{ boards?.length }}/5 boards.</p>
    <BoardGallery :boards="boards" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import BoardGallery from "../components/BoardGallery/BoardGallery.vue";

export default defineComponent({
  name: "Desk",
  components: { BoardGallery },
  data() {
    return {
      username: "",
    };
  },
  computed: {
    ...mapState(["currentUser", "boards"]),
  },
  methods: {
    ...mapActions(["getTokenAction"]),
  },
  mounted() {
    if (sessionStorage.getItem("user")) {
      this.getTokenAction();
    } else {
      this.$router.push("/login");
    }
  },
});
</script>

<style lang="scss">
@import "../assets/styles/_mixins.scss";
@import "../assets/styles/_variables.scss";

.desk {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  height: 100vh;

  &__title {
    @include own-title;
    margin: 150px 0 25px 0;
    text-align: center;
  }

  &__username {
    text-decoration: underline;
    text-underline-offset: 6px;
  }

  &__count {
    text-align: center;
    margin-bottom: 25px;
    @include lora-text;
  }

  &__info {
    @include lora-text;
    text-decoration: underline;
    text-underline-offset: 3px;
    margin: 10px 0 100px 0;
    text-align: center;
    justify-self: end;
    cursor: pointer;
  }
}
</style>
