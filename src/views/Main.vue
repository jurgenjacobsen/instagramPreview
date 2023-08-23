<script lang="ts">
	export default {
		data() {
			return {
				username: localStorage.getItem("username") || "john.doe",
				displayName: localStorage.getItem("displayName") || "John Doe",
				bio: localStorage.getItem("bio") || "This is my bio",
				followers: localStorage.getItem("followers") || 1,
				following: localStorage.getItem("following") || 1,
				posts: (JSON.parse(
					localStorage.getItem("posts") as any,
				) as unknown as string[]) || [""],
				profileIcon:
					"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
				settings: {
					feedPhotosPrefix: "/feed/",
					loadImages: ["profileIcon"],
				},
				savedPosts: false,
				savedProfile: false,
				updatedPosts: false,
			};
		},
		methods: {
			saveImage(refImg: string) {
				const imageInput = this.$refs[refImg] as any;
				const file = imageInput.files[0];

				if (file) {
					const reader = new FileReader();
					reader.onload = (event) => {
						const imageData = event.target?.result;
						try {
							localStorage.setItem(refImg, imageData as any);
						} catch (error) {
							let warn = this.$refs[refImg + "Warn"] as any;
							if (warn) {
								warn.classList.add("opacity-100");
								warn.classList.add("inline-block");
								setTimeout(() => {
									warn.classList.remove("opacity-0");
								}, 2000);
							}
						}
						// @ts-ignore
						this[refImg] = imageData as any;
					};
					reader.readAsDataURL(file);
				}
			},
			addPost() {
				this.posts.push("");
				this.savePosts();
			},
			removePost(index: number) {
				this.posts.splice(index, 1);
				this.savePosts();
			},
			savePosts() {
				localStorage.setItem("posts", JSON.stringify(this.posts));
				this.savedPosts = true;
				setTimeout(() => {
					this.savedPosts = false;
				}, 2000);
			},
			saveProfile() {
				localStorage.setItem("username", this.username);
				localStorage.setItem("displayName", this.displayName);
				localStorage.setItem("followers", String(this.followers));
				localStorage.setItem("following", String(this.following));
				localStorage.setItem("bio", this.bio);
				this.savedProfile = true;
				setTimeout(() => {
					this.savedProfile = false;
				}, 2000);
			},
			updatePostsJSON() {
				try {
					// @ts-ignore
					this.posts = JSON.parse(this.$refs.postsJSON.value);
					this.savePosts();
					this.updatedPosts = true;
					setTimeout(() => {
						this.updatedPosts = false;
					}, 2000);
				} catch (error) {
					console.error(error);
				}
			},
		},
		created() {
			for (const image of this.settings.loadImages) {
				// @ts-ignore
				const imageData = localStorage.getItem(image);
				// @ts-ignore
				if (imageData) this[image] = imageData;
			}

			setInterval(() => {
				console.log(this.posts);
			}, 5000);
		},
	};
</script>

<template>
	<main class="grid xl:grid-cols-3 p-6 gap-4">
		<div class="ring-1 rounded ring-neutral-500 bg-neutral-800 p-4 space-y-2">
			<form
				@submit.prevent="saveImage('profileIcon')"
				class="p-4 rounded bg-neutral-700"
			>
				<label class="block text-xs font-semibold">Profile Icon</label>
				<input
					type="file"
					ref="profileIcon"
					accept="image/*"
					class="block rounded ring-1 ring-neutral-500 w-3/4"
				/>

				<div class="mt-2">
					<button
						type="submit"
						class="rounded py-1 px-4 bg-neutral-800 hover:ring-1 ring-neutral-500"
					>
						Load
					</button>
					<span
						ref="profileIconWarn"
						class="opacity-0 cursor-default rounded py-2 px-4 bg-yellow-500/40 text-yellow-300 ml-1"
						>Image is too big to be saved! (Max. 1mb)</span
					>
				</div>
			</form>

			<form @submit.prevent="" class="p-4 rounded bg-neutral-700">
				<label class="block text-xs font-semibold">Profile</label>
				<div class="grid grid-cols-1 2xl:grid-cols-2 gap-2 mt-2">
					<div class="w-full">
						<label class="block text-xs font-semibold">Username</label>
						<input
							v-model="username"
							type="text"
							class="rounded w-full py-1 px-2 text-neutral-950 focus:outline-none focus:ring-1 ring-neutral-500"
						/>
					</div>
					<div class="w-full">
						<label class="block text-xs font-semibold">Display Name</label>
						<input
							v-model="displayName"
							type="text"
							class="rounded w-full py-1 px-2 text-neutral-950 focus:outline-none focus:ring-1 ring-neutral-500"
						/>
					</div>
					<div class="w-full">
						<label class="block text-xs font-semibold">Followers</label>
						<input
							v-model="followers"
							type="number"
							class="rounded w-full py-1 px-2 text-neutral-950 focus:outline-none focus:ring-1 ring-neutral-500"
						/>
					</div>
					<div class="w-full">
						<label class="block text-xs font-semibold">Following</label>
						<input
							v-model="following"
							type="number"
							class="rounded w-full py-1 px-2 text-neutral-950 focus:outline-none focus:ring-1 ring-neutral-500"
						/>
					</div>
					<div class="w-full col-span-2">
						<label class="block text-xs font-semibold">Bio</label>
						<textarea
							v-model="bio"
							class="rounded w-full py-1 px-2 text-neutral-950 focus:outline-none focus:ring-1 ring-neutral-500"
						></textarea>
					</div>
				</div>

				<div class="space-x-2 mt-2">
					<button
						class="rounded py-1 px-4 bg-neutral-800 hover:ring-1 ring-neutral-500"
						@click="saveProfile"
					>
						Save Profile
					</button>
					<span
						class="rounded py-2 px-4 bg-green-500/40 text-green-500 cursor-default"
						v-if="savedProfile"
						>Saved!</span
					>
				</div>
			</form>

			<form @submit.prevent="" class="p-4 rounded bg-neutral-700">
				<label class="block text-xs font-semibold">Feed</label>
				<div class="grid grid-cols-1 2xl:grid-cols-2 gap-2">
					<div
						v-for="(post, index) in posts"
						:key="index"
						class="w-full relative"
					>
						<input
							v-model="posts[index]"
							type="text"
							class="rounded w-full py-1 px-2 text-neutral-950 focus:outline-none focus:ring-1 ring-neutral-500"
						/>
						<button
							@click="removePost(index)"
							class="absolute rounded-r -right-[0.12rem] p-1 bg-neutral-800 ml-1"
						>
							❌
						</button>
					</div>
				</div>
				<div class="space-x-2 mt-2">
					<button
						class="rounded py-1 px-4 bg-neutral-800 hover:ring-1 ring-neutral-500"
						@click="addPost"
					>
						Add Post
					</button>
					<button
						class="rounded py-1 px-4 bg-neutral-800 hover:ring-1 ring-neutral-500"
						@click="savePosts"
					>
						Save Posts
					</button>
					<span
						class="rounded py-2 px-4 bg-green-500/40 text-green-500 cursor-default"
						v-if="savedPosts"
						>Saved!</span
					>
				</div>
			</form>
		</div>

		<div class="ring-1 rounded ring-neutral-500">
			<div class="mt-2 pl-4 text-lg">
				<span class="text-neutral-400 font-semibold">@</span>{{ username }}

				<ThemeToggler class="float-right" />
			</div>

			<div
				class="mt-6 grid grid-cols-4 px-6 text-center h-[128px] justify-center align-middle"
			>
				<div>
					<img
						:src="profileIcon"
						class="w-[128px] h-[128px] aspect-[1/1] object-cover rounded-full ring-2 ring-neutral-500 dark:ring-neutral-600 ring-offset-4 ring-offset-white dark:ring-offset-black"
					/>
				</div>
				<div class="text-lg my-auto">
					<span class="font-semibold">{{ posts.length }}</span>
					<p>Posts</p>
				</div>
				<div class="text-lg my-auto">
					<span class="font-semibold">{{ followers }}</span>
					<p>Followers</p>
				</div>
				<div class="text-lg my-auto">
					<span class="font-semibold">{{ following }}</span>
					<p>Following</p>
				</div>
			</div>

			<div class="px-6 py-2">
				<h1 class="text-2xl font-semibold">{{ displayName }}</h1>
				<p class="text-sm" v-html="bio"></p>
			</div>

			<div class="px-4 pt-4">
				<div class="mt-4 grid grid-cols-3 text-center">
					<div class="py-2 border-b-black dark:border-b-white border-b-2">
						<svg
							class="inline-block"
							fill="currentColor"
							height="18"
							width="18"
							viewBox="0 0 16 16"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z"
							/>
						</svg>
					</div>
					<div class="py-2 text-neutral-400">
						<svg
							class="inline-block"
							fill="currentColor"
							height="24"
							width="22"
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g data-name="Layer 2" id="Layer_2">
								<path
									d="M27.85,29.06H4.15A3.15,3.15,0,0,1,1,25.91V11.06H31V25.91A3.15,3.15,0,0,1,27.85,29.06ZM3,13.06V25.91a1.15,1.15,0,0,0,1.15,1.15h23.7A1.15,1.15,0,0,0,29,25.91V13.06Z"
								/>
								<path
									d="M31,13.06H1V6.21A3.15,3.15,0,0,1,4.15,3.06h23.7A3.15,3.15,0,0,1,31,6.21Zm-28-2H29V6.21a1.15,1.15,0,0,0-1.15-1.15H4.15A1.15,1.15,0,0,0,3,6.21Z"
								/>
								<rect
									height="2"
									transform="translate(3.38 20.72) rotate(-71.23)"
									width="8.58"
									x="11.87"
									y="7"
								/>
								<rect
									height="2"
									transform="translate(8.61 28.02) rotate(-71.24)"
									width="8.58"
									x="19.58"
									y="7"
								/>
								<rect
									height="2"
									transform="translate(-2.06 13.13) rotate(-71.23)"
									width="8.58"
									x="3.85"
									y="7"
								/>
								<path
									d="M14.28,24.61a1.11,1.11,0,0,1-1.11-1.11v-7a1.11,1.11,0,0,1,1.71-.93l5.44,3.5a1.11,1.11,0,0,1,0,1.86l-5.44,3.51A1.1,1.1,0,0,1,14.28,24.61Zm-.48-1.86h0Zm1.37-4.63v3.74L18.07,20Zm-1.37-.89h0Z"
								/>
							</g>
						</svg>
					</div>
					<div class="py-2 text-neutral-400">
						<svg
							class="inline-block"
							fill="currentColor"
							height="24"
							width="24"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clip-rule="evenodd"
								d="M4 19.0544C4 19.3312 4.22486 19.5553 4.50165 19.5544L19.5016 19.5049C19.7771 19.504 20 19.2804 20 19.0049V7.49999C20 7.22385 19.7761 6.99999 19.5 6.99999H15.5C15.2348 6.99999 14.9804 6.89463 14.7929 6.7071L12 3.91422L9.20711 6.7071C9.01957 6.89463 8.76522 6.99999 8.5 6.99999H4.5C4.22386 6.99999 4 7.22385 4 7.49999V19.0544ZM4.50824 21.5544C3.12432 21.5589 2 20.4383 2 19.0544V7.49999C2 6.11928 3.11929 4.99999 4.5 4.99999H8.08579L11.2929 1.7929C11.6834 1.40237 12.3166 1.40237 12.7071 1.7929L15.9142 4.99999H19.5C20.8807 4.99999 22 6.11928 22 7.49999V19.0049C22 20.3824 20.8857 21.5004 19.5082 21.5049L4.50824 21.5544Z"
								fill="currentColor"
								fill-rule="evenodd"
							/>
							<path
								clip-rule="evenodd"
								d="M12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9ZM9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10Z"
								fill="currentColor"
								fill-rule="evenodd"
							/>
							<path
								clip-rule="evenodd"
								d="M9.17071 17H14.8293C14.4175 15.8348 13.3062 15 12 15C10.6938 15 9.58254 15.8348 9.17071 17ZM7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18C17 18.5523 16.5523 19 16 19H8C7.44772 19 7 18.5523 7 18Z"
								fill="currentColor"
								fill-rule="evenodd"
							/>
						</svg>
					</div>
				</div>

				<!-- FEED -->
				<div class="feed my-2 grid grid-cols-3 gap-1">
					<div
						class="aspect-[1/1]"
						v-for="(post, idx) in posts"
						v-if="posts.length > 0"
					>
						<img
							:src="(!post.startsWith('http') ? settings.feedPhotosPrefix : '') + post"
							:key="idx"
							class="w-full h-full object-cover"
							v-if="post.length! > 0"
							:title="post"
							:alt="post"
						/>
					</div>
					<div v-else class="col-span-3 text-center">
						<p class="text-center text-neutral-400 mt-16 font-semibold text-xl">
							No posts yet!
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="ring-1 rounded ring-neutral-500 p-4 space-y-2">
			<label class="block text-xs font-semibold">Profile Icon</label>
			<button
				@click="updatePostsJSON"
				class="rounded py-1 px-4 bg-neutral-800 hover:ring-1 ring-neutral-500"
			>
				Update
			</button>
			<span
				class="rounded py-2 px-4 bg-green-500/40 text-green-500 cursor-default ml-2"
				v-if="updatedPosts"
				>Saved!</span
			>
			<textarea
				class="w-full text-neutral-950 h-screen rounded p-2"
				:value="JSON.stringify(posts, null, 1)"
				ref="postsJSON"
			></textarea>
		</div>
	</main>
</template>
