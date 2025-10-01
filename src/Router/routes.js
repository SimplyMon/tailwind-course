import { createRouter, createWebHistory } from "vue-router";
import homeComponent from "@/Components/Home/home.vue";
import contactComponent from "@/Components/Home/contact.vue";
import productComponent from "@/Components/Products/product.vue";
import productDetailsComponent from "@/Components/Products/productDetails.vue";
import loginComponent from "@/Components/Home/login.vue";
import NotFound from "@/Components/Layout/NotFound.vue";
import piniaComponent from "@/Components/Home/pinia.vue";
const isAdmin = false;

const routes = [
  {
    path: "/",
    component: homeComponent,
    name: "home",
  },
  {
    path: "/contact-us",
    component: contactComponent,
    name: "contact",
  },
  {
    path: "/products",
    component: productComponent,
    name: "product",
    beforeEnter: (to, from, next) => {
      if (!isAdmin) {
        return next({ name: "login" });
      }
      next();
    },
  },
  {
    path: "/products-details/:productId/:productName?",
    component: productDetailsComponent,
    name: "productD",
  },
  {
    path: "/products-details",
    component: productDetailsComponent,
  },
  {
    path: "/login",
    component: loginComponent,
    name: "login",
  },
  {
    path: "/notFound",
    component: NotFound,
    name: "notfound",
  },
  {
    path: "/pinia-page",
    component: piniaComponent,
    name: "pinia",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "notfound" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "btn bg-success text-warning",
});

const isAuthenticated = true;

router.beforeEach((to, from) => {
  console.log("test");

  console.log(to, from);

  if (!isAuthenticated && to.name !== "login") {
    return { name: "login" };
  }
});

export default router;
