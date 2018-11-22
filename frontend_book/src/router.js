import Vue from "vue";
import Router from "vue-router";
import BookList from "./views/BookList.vue";
import BookDetail from "./views/BookDetail.vue";
import BookAdd from "./views/BookAdd.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: BookList
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: BookDetail
    },
    {
      path: "/add",
      name: "add",
      component: BookAdd
    }
  ]
});
