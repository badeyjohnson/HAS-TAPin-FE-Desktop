import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/dashboard",
      component: () => import("../views/Dashboard")
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue")
    },
    {
      path: "/job/:id",
      component: () => import("../views/Job"),
    },
    {
      path: "/site/create",
      component: () => import("../views/Create"),
    }
  ]
});
