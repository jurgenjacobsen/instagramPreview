<script lang="ts">
	// @ts-ignore
	function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	// @ts-ignore
	function setCookie(cname, cvalue, exdays = 365) {
		const d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		let expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function changeTheme(theme: string) {
		let documentTheme = document.documentElement.classList;

		if (theme === "dark") {
			documentTheme.add("dark");
			setCookie("theme", "dark");
			return "dark";
		} else {
			documentTheme.remove("dark");
			setCookie("theme", "light");
			return "light";
		}
	}

	import { defineComponent } from "vue";

	export default defineComponent({
		name: "ThemeToggler",
		data() {
			return {
				theme: getCookie("theme"),
			};
		},
		mounted() {
			changeTheme(this.theme);
		},
		methods: {
			changeThemeHandler(event: any) {
				this.theme = changeTheme(
					getCookie("theme") === "dark" ? "light" : "dark",
				);
			},
		},
	});
</script>

<template>
	<button
		@click="changeThemeHandler"
		class="cursor-pointer flex space-x-2 transition-colors rounded-full items-center ring-1 ring-neutral-400 justify-center text-neutral-700 dark:text-neutral-400 p-2 sm:w-max bg-neutral-200 hover:bg-neutral-200/40 dark:bg-neutral-800 dark:hover:bg-neutral-800/40"
	>
		<svg
			v-if="theme === 'dark'"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			class="h-3.5 w-3.5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			></path>
		</svg>
		<svg
			v-if="theme === 'light'"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			class="h-3.5 w-3.5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			></path>
		</svg>
	</button>
</template>
