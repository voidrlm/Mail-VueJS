const routes = [
  {
    path: "/",
    name: "Login",
    meta: { authorized: false },
    component: () => import("../views/userAuthentication.vue"),
  },
  {
    path: "/inbox",
    name: "Inbox",
    meta: { authorized: true },
    component: () => import("../views/inbox.vue"),
  },
  {
    path: "/important",
    name: "Important",
    meta: { authorized: true },
    component: () => import("../views/important.vue"),
  },
];
export default routes;
