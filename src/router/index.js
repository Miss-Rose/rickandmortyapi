import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: { name: "CharactersPage", query: { page: 1 } },
  },
  {
    path: "/characters",
    name: "CharactersPage",
    component: () => import("../views/CharactersPage.vue"),
  },
  {
    path: "/character/:id",
    name: "CharacterDetails",
    component: () => import("../views/CharacterDetail.vue"),
  },
  {
    path: "/favourites",
    name: "FavouritesPage",
    component: () => import("../views/FavouritesPage.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFoundPage",
    component: () => import("../views/NotFoundPage"),
  },
  {
    path: "/404",
    redirect: { name: "NotFoundPage" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
