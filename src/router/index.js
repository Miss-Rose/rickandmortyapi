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
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FavouritesPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
