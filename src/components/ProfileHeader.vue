<script lang="ts">
	// @ts-ignore
	import ThemeToggler from "@/components/btn/ThemeToggler.vue";

	export default {
		data() {
			return {
				bio: "",
				data: this.$props.data,
			};
		},
		props: {
			data: {
				type: Object,
				required: true,
			},
		},
		components: {
			ThemeToggler,
		},
		beforeMount() {
			this.bio = this.data.bio
				.replace(/\n/g, "<br/>")
				.replace(
					/@([\w.-]+)/g,
					'<a class="text-blue-100" target="_blank" href="https://instagram.com/$1">@$1</a>',
				);

			setInterval(() => {
				this.bio = this.data.bio
					.replace(/\n/g, "<br/>")
					.replace(
						/@([\w.-]+)/g,
						'<a class="text-blue-100" target="_blank" href="https://instagram.com/$1">@$1</a>',
					);
			}, 100);
		},
	};
</script>

<template>
	<div class="mt-2 pl-4 text-lg">
		<span class="text-neutral-400 font-semibold">@</span>{{ data.username }}

		<ThemeToggler class="float-right" />
	</div>
	<div
		class="mt-6 grid grid-cols-4 px-4 text-center h-[128px] justify-center align-middle"
	>
		<div>
			<img
				:src="'/photos/' + data.photo"
				class="w-[128px] rounded-full ring-2 ring-neutral-400 dark:ring-neutral-600 ring-offset-4 ring-offset-white dark:ring-offset-black"
			/>
		</div>
		<div class="text-lg my-auto">
			<span class="font-semibold">{{ data.posts.length }}</span>
			<p>Posts</p>
		</div>
		<div class="text-lg my-auto">
			<span class="font-semibold">{{ data.followers }}</span>
			<p>Followers</p>
		</div>
		<div class="text-lg my-auto">
			<span class="font-semibold">{{ data.following }}</span>
			<p>Following</p>
		</div>
	</div>

	<div class="px-4 py-2">
		<h1 class="text-2xl font-semibold">
			{{ data.displayName }}
		</h1>
		<p class="text-sm" v-html="bio"></p>
	</div>

	<div class="px-4 pt-4">
		<div class="grid grid-cols-7 gap-x-6">
			<div class="text-center text-sm" v-for="hightlight in data.highlights">
				<img
					:src="'/hightlights/' + hightlight.photo"
					class="rounded-full aspect-square object-cover ring-2 ring-neutral-400 dark:ring-neutral-600 ring-offset-2 ring-offset-white dark:ring-offset-black"
				/>
				<span class="mt-2 block">{{
					hightlight.title.length > 0 ? hightlight.title : "ㅤ"
				}}</span>
			</div>
		</div>
	</div>
</template>
