<template>
  <div class="header">
    <router-link to="/home">
      <h1 class="main-logo" :class="isClicked ? 'main-logo--open' : ''">
        own.
      </h1>
    </router-link>

    <ul
      class="nav"
      @click="isClicked = !isClicked"
      :class="isClicked ? 'nav--open' : ''"
    >
      <router-link to="/register" v-if="!isAuthenticated">
        <li class="nav__element nav__element--register">Register</li>
      </router-link>
      <li class="nav__element nav__element--mydesk" v-if="isAuthenticated">
        <router-link to="/desk">My desk</router-link>
      </li>
      <li class="nav__element nav__element--login" v-if="!isAuthenticated">
        <router-link to="/login">Login </router-link>
      </li>
      <li
        class="nav__element nav__element--logout"
        v-on:click="logoutUser('home')"
        v-else
      >
        Logout
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
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "OwnHeader",
  props: {},
  data() {
    return {
      isClicked: false,
    };
  },
  computed: {
    ...mapState(["isAuthenticated", "currentBoard"]),
  },
  methods: {
    ...mapActions(["logoutUserAction"]),
    ...mapGetters(["redirectHome"]),
    logoutUser(path: string) {
      this.logoutUserAction();
      this.redirectHome();
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";

.header {
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100vw;
  display: flex;
  padding: 5px 30px 5px 30px;
  height: 80px;
  z-index: 1;
  background-color: $main-color;
}

.main-logo {
  @include main-logo;
}

.burger {
  @include burger;
}

.nav {
  padding: 0;
  @include nav-menu;
}

@media (min-width: $tablet) {
  .burger {
    display: none;
  }

  .main-logo {
    font-size: 55px;
    &.main-logo--open {
      color: black;
    }
  }

  .nav {
    padding: 0;
    flex-direction: row;
    justify-content: flex-end;
    left: 0;
    right: 0;
    height: 80px;
    background: none;
    margin: 0 30px;

    &__element {
      margin: 50px;

      &.nav__element--login {
        margin-left: 15px;
        font-size: 16px;
      }

      &.nav__element--mydesk {
        color: black;
        margin-left: 15px;
        font-family: "Helvetica Neue", sans-serif;
        font-size: 16px;
        font-style: italic;

        &:hover {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        &:active {
          font-weight: bolder;
        }
      }

      &.nav__element--logout {
        margin-left: 15px;
        font-size: 16px;
      }

      &.nav__element--register {
        background: none;
        color: black;
        box-shadow: none;
        font-size: 16px;

        &:active {
          font-weight: bold;
        }
      }
    }
  }
}

@media (min-width: $desktop) {
  .nav {
    padding: 0;
    flex-direction: row;
    justify-content: flex-end;
    left: 0;
    right: 0;
    height: 80px;
    background: none;
    margin: 0 30px;

    &__element {
      margin: 50px;

      &.nav__element--login {
        margin-left: 15px;
        font-size: 16px;
      }

      &.nav__element--mydesk {
        width: 125px;
        color: black;
        justify-self: flex-end;
      }

      &.nav__element--logout {
        margin-left: 15px;
        font-size: 16px;
        width: 125px;
      }

      &.nav__element--register {
        width: 160px;
        background: none;
        color: black;
        box-shadow: none;
        font-size: 16px;
      }
    }
  }
}
</style>
