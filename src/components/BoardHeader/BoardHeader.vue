<template>
  <div class="board-header">
    <router-link :to="`/${boardName?.toLowerCase()}`">
      <h1 class="custom-logo" :class="isClicked ? 'custom-logo--open' : ''">
        <img :src="boardLogo" :alt="boardName" width="100" height="100" />
      </h1>
    </router-link>

    <ul
      class="nav"
      @click="isClicked = !isClicked"
      :class="isClicked ? 'nav--open' : ''"
    >
      <li class="nav__element nav__element--login" v-if="!isAuthenticated">
        <router-link to="/login">Login</router-link>
      </li>
      <li
        class="nav__element nav__element--logout"
        v-on:click="logoutUser(boardName?.toLowerCase())"
        v-else
      >
        Logout
      </li>
      <li class="nav__element nav__element--atelier" v-if="isAuthenticated">
        Atelier Mode
      </li>

      <li class="nav__element nav__element--heading">
        <h1>{{ boardName?.toUpperCase() }}</h1>
      </li>
    </ul>
    <div
      class="burger"
      @click="isClicked = !isClicked"
      :class="isClicked ? 'burger--open' : ''"
    >
      <div class="burger__element burger__element--first"></div>
      <div class="burger__element burger__element--middle"></div>
      <div class="burger__element burger__element--last"></div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "BoardHeader",
  props: {
    boardName: String,
    boardLogo: String,
  },
  computed: {
    ...mapState(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logoutUserAction"]),
    logoutUser(path: string) {
      this.logoutUserAction();
      this.$router.push(`/${path}`);
    },
  },
  data() {
    return {
      isClicked: false,
    };
  },
});
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";

.board-header {
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100vw;
  display: flex;
  padding: 5px 30px 5px 0;
  height: 80px;
  z-index: 1;
  background-color: $main-color;
}

.custom-logo {
  @include flex-center;
  @include main-logo;
  left: 10px;
  top: 20px;

  &.custom-logo--open {
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(50px);
  }
}

.nav {
  &__element {
    &.nav__element--heading {
      font-family: "Helvetica Neue", sans-serif;
      font-size: 15px;
      font-style: italic;
    }

    &.nav__element--atelier {
      font-family: "Helvetica Neue", sans-serif;
      font-size: 15px;
      font-style: italic;
    }
  }
}
</style>
