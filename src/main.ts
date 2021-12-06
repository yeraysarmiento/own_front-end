import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faXmark,
  faChevronLeft,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import router from "./router";
import store from "./store";

library.add(faPhone);
library.add(faEdit);
library.add(faXmark);
library.add(faChevronLeft);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
