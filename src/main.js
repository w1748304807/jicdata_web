import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "@/router";
import store from "@/store";
import "@/components";
import App from "./App.vue";

Vue.config.productionTip = false;

import Contextmenu from "vue-contextmenujs";
Vue.use(Contextmenu);

Vue.prototype.$moment = require("moment");
Vue.use(ElementUI, { size: "small", zIndex: 100 });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
