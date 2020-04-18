import Vue from "vue";

import VueCompositionApi from "@vue/composition-api";
import { Pagination } from "element-ui";
import "@/styles/element-variables.scss";
import { useProvider } from "@/context";

import App from "./App.vue";
import router from "./router";
import * as colors from "./styles/colors";

Vue.use(VueCompositionApi);

Vue.component(Pagination.name, Pagination);

Vue.config.productionTip = false;

Vue.prototype.colors = colors;

new Vue({
  router,
  setup() {
    useProvider();
    return {};
  },
  render: h => h(App)
}).$mount("#app");
