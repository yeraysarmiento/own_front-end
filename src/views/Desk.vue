<template>
  <div class="desk">
    <div class="header">
      <img class="logo" src="../../public/img/amallective_logo.png" width="100" height="100" />
      <ul class="nav" :class="isClicked ? 'nav--open' : ''">
        <li class="nav__element">Register</li>
        <li class="nav__element nav__element--highlight">Login</li>
      </ul>
      <div class="burger" @click="isClicked = !isClicked" :class="isClicked ? 'burger--open' : ''">
        <div class="burger__element burger__element--first"></div>
        <div class="burger__element burger__element--middle"></div>
        <div class="burger__element burger__element--last"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Desk",
  components: {},
  data() {
    return {
      isClicked: false,
    };
  },
});
</script>

<style lang="scss">
.header {
  position: fixed;
  display: flex;
  width: 100vw;
  justify-content: space-between;
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
  position: fixed;
  right: 15px;
  top: 15px;
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
  padding: 0;
  background-color: black;
  color: #fff;
  position: fixed;
  top: 0;
  left: -100vw;
  right: 100vw;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: left 0.3, right 0.3;

  &.nav--open {
    left: 0;
    right: 0;
  }
}
</style>
