<template>
  <div class="board-header">
    <router-link :to="`/${currentBoard?.name.toLowerCase()}`">
      <h1 class="custom-logo" :class="isClicked ? 'custom-logo--open' : ''">
        <img
          :src="currentBoard.logo"
          :alt="currentBoard.name"
          width="70"
          height="70"
        />
      </h1>
    </router-link>
    <h2 class="custom-title">{{ currentBoard?.name.toUpperCase() }}</h2>
    <ul class="nav" :class="isClicked ? 'nav--open' : ''">
      <div class="nav__container">
        <li class="nav__element nav__element--filter">
          <select
            id="area"
            name="area"
            v-model="area"
            @change="onChange($event)"
            required
            autofocus
          >
            <option disabled selected value>- Select an area -</option>
            <option value="All projects">All projects</option>
            <option value="Architecture">Architecture</option>
            <option value="Interiors">Interiors</option>
            <option value="Landscape">Landscape</option>
          </select>
        </li>

        <li v-if="isAuthenticated" class="nav__element nav__element--greeting">
          <p>Welcome back, {{ currentUser.username }}</p>
        </li>
      </div>
      <div class="nav__container">
        <li class="nav__element nav__element--mydesk" v-if="isAuthenticated">
          <router-link to="/desk">My Desk</router-link>
        </li>

        <li class="nav__element nav__element--login" v-if="!isAuthenticated">
          <router-link to="/login">Login</router-link>
        </li>

        <li
          class="nav__element nav__element--logout"
          v-on:click="logoutUser"
          v-else
        >
          Logout
        </li>
      </div>
      <li class="nav__element nav__element--heading">
        <h1>{{ currentBoard?.name.toUpperCase() }}</h1>
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
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "BoardHeader",
  data() {
    return {
      isClicked: false,
      area: "All projects",
    };
  },
  computed: {
    ...mapState(["isAuthenticated", "currentUser", "currentBoard"]),
  },
  methods: {
    ...mapActions([
      "logoutUserAction",
      "filterPapersAction",
      "loadCurrentBoardAction",
    ]),
    ...mapMutations(["STOP_LOADING"]),
    ...mapGetters(["redirectBoard"]),
    logoutUser() {
      this.logoutUserAction();
      this.redirectBoard();
      this.isClicked = false;
    },
    async onChange(event: any) {
      try {
        if (event.target.value === "All projects") {
          await this.loadCurrentBoardAction(this.currentBoard.id);
        } else {
          await this.filterPapersAction({
            idBoard: this.currentBoard.id,
            type: event.target.value,
          });
          this.isClicked = false;
          // this.redirectBoard();
        }
      } catch (error) {
        this.STOP_LOADING();
      }
    },
  },
});
</script>

<style lang="scss" scoped>
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
  z-index: 2;
}

.custom-logo {
  @include flex-center;
  @include main-logo;
  top: 15px;
  left: 15px;
}

.custom-title {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 20px;
  font-style: italic;
  position: absolute;
  left: 150px;
  display: none;
}

.burger {
  @include burger;
}

.nav {
  @include nav-menu;
}

@media (min-width: $tablet) {
  .board-header {
    background-color: $main-color;
  }

  .custom-logo {
    & img {
      margin-top: 10px;
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }

  .custom-title {
    display: block;
  }

  .nav {
    &__element {
      &.nav__element--filter {
        & select {
          width: 250px;
          margin-left: 30px;
        }
      }
      &.nav__element--mydesk {
        margin-bottom: 30px;
      }
    }
  }
}

@media (min-width: $desktop) {
  .nav {
    @include nav-menu;
  }
}
</style>
