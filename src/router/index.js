import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/error",
    name: "StepError",
    component: () => import("../views/StepError.vue")
  },
  {
    path: "/mis-datos",
    name: "StepInput",
    component: () => import("../views/StepInput.vue")
  },
  {
    path: "/pago-del-producto",
    name: "StepPayment",
    component: () => import("../views/StepPayment.vue")
  },
  {
    path: "/enhorabuena",
    name: "StepSucess",
    component: () => import("../views/StepSuccess.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
