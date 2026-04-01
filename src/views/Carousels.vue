<script lang="ts">
export default {
    name: 'Carousels',
    data() {
        return {
            posts: [
                'IMG_0735.jpg',
            ],
            stories: [
                'IMG_0735.jpg',
            ]
        };
    },
    methods: {
        updatePostsJSON() {
            try {
                // @ts-ignore
                this.posts = JSON.parse(this.$refs.postsJSON.value);
            } catch (error) {
                console.error(error);
            }
		},
        updateStoriesJSON() {
            try {
                // @ts-ignore
                this.stories = JSON.parse(this.$refs.storiesJSON.value);
            } catch (error) {
                console.error(error);
            }
		}
    }
}
</script>

<template>
    <main>
        <div class="mx-20 mt-10">
            <h1 class="text-2xl">
                Post Carousel
            </h1>
            <div class="carousel">
                <div class="carousel-inner">
                    <div v-for="(post, index) in posts" :key="index" class="carousel-item">
                        <img :src="'/feed/' + post" alt="Instagram Post" class="w-full h-auto">
                    </div>
                </div>
            </div>
            <div class="p-2">
                <button
				@click="updatePostsJSON"
				class="rounded py-1 px-4 bg-neutral-800 hover:ring-1 ring-neutral-500 w-[5%]"
                >
                    Update
                </button>
                <textarea
                    class="w-[90%] text-neutral-950 rounded p-2 ml-[5%]"
                    :value="JSON.stringify(posts, null, 1)"
                    ref="postsJSON"
                ></textarea>
            </div>
            <hr>
            <h1 class="text-2xl mt-4">
                Story Carousel
            </h1>
            <div class="carousel">
                <div class="carousel-inner">
                    <div v-for="(story, index) in stories" :key="index" class="carousel-item story">
                        <img :src="'/feed/' + story" alt="Instagram Story" class="w-full h-auto aspect-[9/16] object-cover">
                    </div>
                </div>
            </div>
            <div class="p-2">
                <button
				@click="updateStoriesJSON"
				class="rounded py-1 px-4 bg-neutral-800 hover:ring-1 ring-neutral-500 w-[5%]"
                >
                    Update
                </button>
                <textarea
                    class="w-[90%] text-neutral-950 rounded p-2 ml-[5%]"
                    :value="JSON.stringify(stories, null, 1)"
                    ref="storiesJSON"
                ></textarea>
            </div>
        </div>
    </main>
</template>

<style scoped>
.carousel {
  overflow-x: scroll;
  white-space: nowrap;
  display: flex;
}

.carousel-inner {
  display: flex;
  flex-direction: row;
}

.carousel-item:not(.story) {
  flex: 0 0 33.33%;
  padding: 4px;
  box-sizing: border-box;
}

.carousel-item.story {
  flex: 0 0 11.11%;
  padding: 6px;
  box-sizing: border-box;
}

.post-caption {
  padding: 8px;
}
</style>