import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import ModesPage from "./components/modes/ModesPage.vue";
import ProfilePage from "./components/profile/ProfilePage.vue";
import SettingsPage from "./components/settings/SettingsPage.vue";
import DraftPage from "./components/draft/DraftPage.vue";


Vue.use(Router);

export default new Router({
  mode: 'history',   //uses BrowserRouter
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
    // {
    //   path: "/about",
    //   name: "about",
    //   component: About
    // }
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
