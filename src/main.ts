import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";

import App from "./App.vue";
import TodoUpdate from "./views/TodoUpdate.vue";
import Home from "./views/Home.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "Home" },
    {
      path: "/update/:id",
      component: TodoUpdate,
      name: "TodoUpdate",
      props: true,
    },
  ],
});

createApp(App).use(router).mount("#app");
