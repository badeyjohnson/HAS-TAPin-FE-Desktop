
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
      path: "/site/:id",
      component: () => import("../views/Site")
    },
    // {
    //   path: "/map",
    //   component: () => import("../views/Map")
    // },
    // {
    //   path: "/confirm",
    //   component: () => import("../views/Confirmation")
    // },
  ]
})

