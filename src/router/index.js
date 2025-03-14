import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RetoDetailView from "@/views/RetoDetailView.vue";
import RetosListDetail from "@/views/RetosListDetail.vue";

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
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0, behavior: "smooth" };
    }
  },
});

export default router;
