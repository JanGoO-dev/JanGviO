import Vue from "vue";
import VueRouter from "vue-router";
import Explore from "../views/Explore.vue";
import Premium from "../views/Premium";
import Following from "../views/Following";
import Profile from "../views/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Explore,
  },
  {
    path: "/0",
    name: "MenuClose",
    component: Explore,
  },
  {
    path: "/premium",
    name: "Premium",
    component: Premium,
  },
  {
    path: "/following",
    name: "Following",
    component: Following,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
