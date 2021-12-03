import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import router from "./router";
import store from "./store";

library.add(faPhone);
library.add(faXmark);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
