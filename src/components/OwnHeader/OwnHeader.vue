<template>
  <div class="header">
    <h1 class="main-logo" :class="isClicked ? 'main-logo--open' : ''">own.</h1>
    <!-- <img class="logo-board" src="../../public/img/amallective_logo.png" width="100" height="100" /> -->
    <ul class="nav" :class="isClicked ? 'nav--open' : ''">
      <li class="nav__element nav__element--register">Register</li>
      <li class="nav__element nav__element--login">Login</li>
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
  name: "OwnHeader",
  props: {},
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
  top: 0;
  align-items: center;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 5px 30px 5px 30px;
}

.main-logo {
  @include main-logo;
}

.logo {
  position: fixed;
  top: 15px;
  left: 15px;
}

.burger {
  height: 25px;
  width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1;

  &__element {
    border: 1px solid black;
    transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

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
    }

    &.nav__element--login {
      @include button;
    }
  }
}
</style>
