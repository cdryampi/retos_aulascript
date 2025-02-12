import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RetoDetailView from "../views/RetoDetailView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "home",
  },
  {
    path: "/reto/:id",
    component: RetoDetailView,
    name: "reto-detalle",
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
