import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreditsView from "../views/CreditsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/game/:id",
    name: "game",
    props: true,
    component: () =>
      import(/* webpackChunkName: "group-game" */ "../views/GameView.vue"),
  },
  {
    path: "/credits",
    name: "credits",
    component: CreditsView,
  },
  {
    path: "/search/:query",
    name: "search",
    props: true,
    component: () =>
      import(/* webpackChunkName: "group-search" */ "../views/SearchView.vue"),
  },
  {
    path: "*",
    redirect: { name: "home" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
