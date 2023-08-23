import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Main.vue";

const router = createRouter({
	//@ts-ignore
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
	],
});

export default router;
