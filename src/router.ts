import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import Login from "./components/Login";
import ModesPage from "./components/modes/ModesPage";
import ProfilePage from "./components/profile/ProfilePage";
import SettingsPage from "./components/settings/SettingsPage";
import DraftPage from "./components/draft/DraftPage";


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
