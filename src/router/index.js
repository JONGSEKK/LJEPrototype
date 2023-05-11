import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import ("../views/LoginView.vue"),
        },
        {
            path: "/daftar",
            component: () => import ("../views/RegisterView.vue"),
        },
        {
            path: "/home",
            component: () => import ("../views/HomeView.vue"),
        },
        {
            path: "/worker",
            component: () => import ("../views/WorkerView.vue"),
            children : [
                {
                    path: "",
                    component: () => import ("../views/WorkerBaseView.vue"),
                },
                {
                    path: "delete",
                    component: () => import ("../views/WorkerDeleteView.vue"),
                },
                {
                    path: "update",
                    component: () => import ("../views/WorkerUpdateView.vue"),
                },
            ]
        },
        {
            path: "/addWorker",
            component: () => import ("../views/AddWorkerView.vue"),
        },
        {
            path: "/updateWorker",
            component: () => import ("../views/UpdateWorker.vue"),
        },
        {
            path: "/viewWorker",
            component: () => import ("../views/viewWorker.vue"),
        },
        {
            path: "/sales",
            component: () => import ("../views/SalesRecord.vue"),
        },
        {
            path: "/promotion",
            component: () => import ("../views/PromotionView.vue"),
            children : [
                {
                    path: "",
                    component: () => import ("../views/PromotionBaseView.vue"),
                },
                {
                    path: "delete",
                    component: () => import ("../views/PromotionDeleteView.vue"),
                },
                {
                    path: "update",
                    component: () => import ("../views/PromotionUpdateView.vue"),
                },
            ]
        },
        {
            path: "/addPromotion",
            component: () => import ("../views/AddPromotion.vue"),
        },
        {
            path: "/updatePromotion",
            component: () => import ("../views/UpdatePromotion.vue"),
        },
        {
            path: "/inventory",
            component: () => import ("../views/InventoryView.vue"),
            children : [
                {
                    path: "",
                    component: () => import ("../views/InventoryBaseView.vue"),
                },
                {
                    path: "delete",
                    component: () => import ("../views/InventoryDeleteView.vue"),
                },
                {
                    path: "update",
                    component: () => import ("../views/InventoryUpdateView.vue"),
                },
            ]
        },
        {
            path: "/addInventory",
            component: () => import ("../views/AddInventory.vue"),
        },
        {
            path: "/updateInventory",
            component: () => import ("../views/UpdateInventory.vue"),
        },
        {
            path: "/stock",
            component: () => import ("../views/StockView.vue"),
        },
        {
            path: "/report",
            component: () => import ("../views/reportView.vue"),
        },
    ],
    linkActiveClass: "routerlink-active-link",
});

export default router;