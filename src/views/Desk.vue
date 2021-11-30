<template>
  <div class="desk">
    <h2 class="desk__title" @click="getUsername">
      Welcome <span class="desk__username">{{ currentUser.username }}</span>
    </h2>
    <p class="desk__count" v-if="currentUser.boards?.length === 0">
      Create your first board!
    </p>
    <p class="desk__count" v-else-if="currentUser.boards?.length === 1">
      You have 1 board.
    </p>
    <p class="desk__count" v-else>
      You have {{ currentUser.boards?.length }} boards.
    </p>
    <ul class="gallery">
      <li
        class="gallery__board"
        v-for="board in currentUser[boards]"
        :key="board.id"
      >
        +
      </li>
      <li class="gallery__board">+</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Desk",
  components: {},
  data() {
    return {
      username: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    ...mapActions(["getToken"]),
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.getToken();
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
}

.gallery {
  display: grid;
  width: 250px;
  overflow-x: scroll;
  margin: 0 auto;
  border: 1px dashed black;
  border-radius: 25px;
  padding: 20px;
  row-gap: 25px;
  height: 100%;
  margin-bottom: 50px;
  overflow: scroll;

  &__board {
    list-style: none;
    width: 100%;
    height: 208px;
    background: $button-color;
    border-radius: 15px;
    font-size: 75px;
    cursor: pointer;
    @include flex-center;
  }
}
</style>
