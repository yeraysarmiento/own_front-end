<template>
  <div class="desk">
    <h2 class="desk__title" @click="getUsername">
      Welcome <span class="desk__username">{{ currentUser.username }}</span>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Desk",
  components: {},
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    ...mapActions(["getToken"]),
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.getToken();
    }
  },
});
</script>

<style lang="scss">
@import "../assets/styles/_mixins.scss";

.desk {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 150px 0;
  padding: 0 30px;

  &__title {
    @include own-title;
  }

  &__username {
    text-decoration: underline;
    text-underline-offset: 6px;
  }
}
</style>
