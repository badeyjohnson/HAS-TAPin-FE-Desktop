import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/dashboard",
      component: () => import("../views/Dashboard"),
      beforeEnter: requireAuth
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
      beforeEnter: (to, from, next) => {
        if (JSON.parse(localStorage.getItem("isAuth")) === true) {
          next("/dashboard");
        } else {
          next();
        }
      }
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

function requireAuth(to, from, next) {
  if (!JSON.parse(localStorage.getItem("isAuth"))) {
    next({
      path: "/login",
      query: null
    });
  } else {
    next();
  }
}

export default router;
