import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
    {
      path: "/modes",
      name: "modes",
      component: ModesPage
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsPage
    },
    {
      path: "/draft",
      name: "draft",
      component: DraftPage
    },
  ]
});
