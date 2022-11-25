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
  {
    path: "/sent",
    name: "Sent",
    meta: { authorized: true },
    component: () => import("../views/sent.vue"),
  },
  {
    path: "/thrash",
    name: "Thrash",
    meta: { authorized: true },
    component: () => import("../views/thrash.vue"),
  },
  {
    path: "/spam",
    name: "Spam",
    meta: { authorized: true },
    component: () => import("../views/spam.vue"),
  },
  {
    path: "/draft",
    name: "Draft",
    meta: { authorized: true },
    component: () => import("../views/drafts.vue"),
  },
];
export default routes;
