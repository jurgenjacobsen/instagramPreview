<script lang="ts">
	export default {
		props: {
			data: {
				type: Object,
				required: true,
			},
		},
	};
</script>

<template>
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
	<div class="feed mt-2 grid grid-cols-3 gap-1">
		<div class="aspect-[1/1]" v-for="post in data.posts">
			<img :src="'/feed/' + post.photo" class="w-full h-full object-cover" />
		</div>
	</div>
</template>
