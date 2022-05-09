import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "highlight.js/styles/vs.css";
import "gitart-vue-dialog/dist/style.css";
import "highlight.js/lib/common";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

library.add(faHouse);

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
