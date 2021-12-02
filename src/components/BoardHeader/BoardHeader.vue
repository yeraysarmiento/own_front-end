<template>
  <div class="header">
    <router-link :to="`/${boardName.toLowerCase()}`">
      <h1 class="main-logo" :class="isClicked ? 'main-logo--open' : ''">
        <img :src="boardLogo" :alt="boardName" width="100" height="100" />
      </h1>
    </router-link>

    <ul
      class="nav"
      @click="isClicked = !isClicked"
      :class="isClicked ? 'nav--open' : ''"
    >
      <router-link to="/home">
        <li class="nav__element nav__element--register">Wanna be an owner?</li>
      </router-link>
      <li class="nav__element nav__element--login" v-if="isAuthenticated">
        <router-link to="/desk">Go to OWN</router-link>
      </li>

      <li class="nav__element nav__element--login" v-if="!isAuthenticated">
        <router-link to="/login">Login </router-link>
      </li>
      <li
        class="nav__element nav__element--logout"
        @click="logoutUserAction"
        v-else
      >
        Logout
      </li>

      <h1 class="nav__heading">{{ boardName }}</h1>
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

export default defineComponent({
  name: "BoardHeader",
  props: {
    boardName: String,
    boardLogo: String,
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

.header {
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

.main-logo {
  @include flex-center;
  @include main-logo;
  left: 10px;
  top: 15px;
}

.burger {
  height: 25px;
  width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &__element {
    border: 1px solid black;
    transition: transform 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    &--first {
      .burger--open & {
        transform: translateY(11.5px) rotate(45deg);
        border: 1px solid white;
      }
    }

    &--middle {
      .burger--open & {
        opacity: 0;
      }
    }

    &--last {
      .burger--open & {
        transform: translateY(-11.5px) rotate(-45deg);
        border: 1px solid white;
      }
    }
  }
}

.nav {
  @include nav;
  @include flex-center;
  padding: 0;
  background-color: black;
  color: #fff;
  position: fixed;
  top: 0;
  left: -100vw;
  right: 100vw;
  bottom: 0;
  flex-direction: column;
  transition: left 0.5s, right 0.5s;

  &.nav--open {
    left: 0;
    right: 0;
  }

  &__element {
    @include flex-center;

    &.nav__element--register {
      @include button;
      background-color: black;
      color: white;
      font-size: 20px;
    }

    &.nav__element--login {
      @include button;
      font-size: 20px;
      &:hover {
        text-decoration: none;
      }
    }

    &.nav__element--logout {
      @include button;
      font-size: 20px;
      background-color: $delete-color;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
