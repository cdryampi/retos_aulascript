import { createRouter, createWebHashHistory } from "vue-router";
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
  {
    path: "/worker-ejecucion.js",
    redirect: () => window.location.origin + "/worker-ejecucion.js",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
