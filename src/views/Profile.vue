<script lang="ts">
	import ProfileHeader from "@/components/ProfileHeader.vue";
	import ProfileFeed from "@/components/ProfileFeed.vue";

	// @ts-ignore
	import config from "./../config.json";

	export default {
		data() {
			return {
				data: config,
				profileHeaderData: config,
				saved: false,
			};
		},
		components: {
			ProfileHeader,
			ProfileFeed,
		},
		beforeCreate() {
			if (localStorage.getItem("data") !== null) {
			}
		},
		methods: {
			saveData() {
				localStorage.setItem("data", JSON.stringify(this.profileHeaderData));
				this.saved = true;
				setTimeout(() => {
					this.saved = false;
				}, 2000);
			},
		},
	};
</script>

<template>
	<main class="grid lg:grid-cols-2 xl:grid-cols-3">
		<div class="block lg:hidden xl:block p-4">
			<div class="ring-1 ring-neutral-400 px-4 pt-4 pb-2 rounded-lg">
				<div class="pb-2 flex">
					<span class="flex-1">Username</span>
					<input
						v-model="profileHeaderData.username"
						class="ring-1 ring-neutral-400 dark:bg-neutral-800 px-2 py-1 rounded flex-1 justify-end"
					/>
				</div>
				<div class="pb-2 flex">
					<span class="flex-1">Name</span>
					<input
						v-model="profileHeaderData.displayName"
						class="ring-1 ring-neutral-400 dark:bg-neutral-800 px-2 py-1 rounded flex-1 justify-end"
					/>
				</div>
				<div class="pb-2 flex">
					<span class="flex-1">Bio</span>
					<textarea
						v-model="profileHeaderData.bio"
						class="ring-1 ring-neutral-400 dark:bg-neutral-800 px-2 py-1 rounded resize-none hover:resize-y focus:resize-y flex-1 justify-end"
					/>
				</div>
				<div class="pb-2 flex">
					<span class="flex-1">Followers</span>
					<input
						type="number"
						v-model="profileHeaderData.followers"
						class="ring-1 ring-neutral-400 dark:bg-neutral-800 px-2 py-1 rounded flex-1 justify-end"
					/>
				</div>
				<div class="pb-2 flex">
					<span class="flex-1">Following</span>
					<input
						v-model="profileHeaderData.following"
						type="number"
						class="ring-1 ring-neutral-400 dark:bg-neutral-800 px-2 py-1 rounded flex-1 justify-end"
					/>
				</div>
				<div class="pb-2">
					<button
						@click="saveData()"
						class="rounded bg-neutral-200 dark:bg-neutral-800 px-8 py-1"
					>
						Save
					</button>
					<button
						v-if="saved"
						class="rounded px-8 py-1 bg-green-500/40 text-green-500 cursor-default ml-2"
					>
						Saved!
					</button>
				</div>
			</div>

			<div class="mt-4 text-sm ring-1 ring-neutral-400 px-4 py-4 rounded-lg">
				<span class="font-semibold">Highlights</span> and
				<span class="font-semibold">Posts</span> should be edited in
				<code class="bg-neutral-200 dark:bg-neutral-800 py-0.5 px-1 rounded"
					>/src/config.json</code
				>
				file.
			</div>

			<div class="mt-4 text-sm ring-1 ring-neutral-400 px-4 py-4 rounded-lg">
				The images used for <span class="font-semibold">Highlights</span> and
				<span class="font-semibold">Posts</span> should be placed in
				<code class="bg-neutral-200 dark:bg-neutral-800 py-0.5 px-1 rounded"
					>/public/hightlights</code
				>
				and
				<code class="bg-neutral-200 dark:bg-neutral-800 py-0.5 px-1 rounded"
					>/public/feed</code
				>
				folders respectively.
			</div>
		</div>
		<div class="">
			<ProfileHeader :data="profileHeaderData" />

			<ProfileFeed :data="data" />
		</div>
	</main>
</template>
