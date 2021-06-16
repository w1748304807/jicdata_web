import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import routers from "./routers";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: routers,
});

router.beforeEach((to, from, next) => {
  if (["/", "/index"].indexOf(to.path) === -1) {
    store.dispatch("addTab", {
      to: {
        name: to.name ? to.name : "",
        title: to.meta && to.meta.title ? to.meta.title : "",
        path: to.path,
        closable: true,
      },
      from: {
        name: from.name ? from.name : "",
        title: from.meta && from.meta.title ? from.meta.title : "",
        path: from.path,
        closable: true,
      },
    });
  }

  next();
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
