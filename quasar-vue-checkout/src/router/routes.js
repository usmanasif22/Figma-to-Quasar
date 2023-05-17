const routes = [
  {
    path: "/",
    component: () => import("../components/Checkout.vue"),
  },
  {
    path: "/order",
    component: () => import("../components/OrderPage.vue"),
  },
  {
    path: "/product",
    component: () => import("../components/ProductPage.vue"),
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
