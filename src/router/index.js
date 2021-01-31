import config from '../config.js';
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${config.HOME_PATH}`,
    component: Home
  },
  {
    path: `/${config.HOME_PATH}`,
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: `/${config.ERROR_PATH}`,
    name: "StepError",
    component: () => import("../views/StepError.vue")
  },
  {
    path: `/${config.DATA_INPUT_PATH}`,
    name: "StepInput",
    component: () => import("../views/StepInput.vue")
  },
  {
    path: `/${config.PAYMENT_PATH}`,
    name: "StepPayment",
    component: () => import("../views/StepPayment.vue")
  },
  {
    path: `/${config.SUCCESS_PATH}`,
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
