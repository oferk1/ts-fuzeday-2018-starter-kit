import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Gallery from "./views/Gallery.vue";
import ShoppingCart from "./views/ShoppingCart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "gallery",
      component: Gallery
    },
    // {
    //     path: "/gallery",
    //     name: "gallery",
    //     component: Gallery
    // },
    {
      path: "/help",
      name: "help",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "help" */ "./views/Help.vue")
    },
    {
      path: "/gallery/item/:id",
      name: "item",
      component: () => import("./views/GalleryItem.vue")
    },
    {
      path: "/cart",
      name: "cart",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ShoppingCart
    }
  ]
});
