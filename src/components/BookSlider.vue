<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BookCard from '@/components/BookCard.vue'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'

defineProps({
	books: {
		type: Array,
		required: true,
	},
})

const emit = defineEmits(['buy'])

const glideElement = ref(null)
let glideInstance = null

onMounted(() => {
	glideInstance = new Glide(glideElement.value, {
		type: 'carousel',
		perView: 3,
		gap: 20,
		breakpoints: {
			1000: { perView: 1, gap: 10, peek: { before: 20, after: 20 } },
		},
	}).mount()
})

onBeforeUnmount(() => {
	glideInstance?.destroy()
})
</script>

<template>
	<div class="container">
		<h2 class="section-title">Горячие новинки</h2>
		<div class="book-slider">
			<div class="glide" ref="glideElement">
				<div class="glide__track" data-glide-el="track">
					<ul class="glide__slides">
						<li v-for="book in books" :key="book.id" class="glide__slide">
							<!-- <BookCard :book="book" /> -->
							<BookCard :book="book"  @buy="emit('buy', $event)" />
						</li>
					</ul>
				</div>
				<div class="glide__controls">
					<div class="glide__arrows" data-glide-el="controls">
						<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
							<img src="../assets/icons/arrow-left.svg" alt="" />
						</button>
						<div class="glide__bullets" data-glide-el="controls[nav]">
							<button
								v-for="(book, i) in books"
								:key="i"
								class="glide__bullet"
								:data-glide-dir="'=' + i"></button>
						</div>
						<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
							<img src="../assets/icons/arrow-right.svg" alt="" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.book {
	&-slider {
		position: relative;
		margin-bottom: 40px;

		@media (min-width: $md) {
			margin-bottom: 45px;
		}

		@media (min-width: $lg) {
			margin-bottom: 70px;
		}

		&__title {
			text-align: center;
			margin-bottom: 80px;

			@media (min-width: $md) {
				margin-bottom: 160px;
			}

			@media (min-width: $lg) {
				margin-bottom: 140px;
			}
		}
	}

	&-card {
		border: 3px solid $color-black;
		padding: 25px;
		display: flex;
		flex-direction: column;
		width: 290px;

		@media (min-width: $md) {
			width: 340px;
		}

		@media (min-width: $lg) {
			width: 420px;
		}

		&__cover-image {
			margin-bottom: 40px;
			display: flex;
			justify-content: center;

			@media (min-width: $md) {
				margin-bottom: 26px;
			}

			@media (min-width: $lg) {
				margin-bottom: 29px;
			}

			img {
				width: 132px;

				@media (min-width: $md) {
					width: 200px;
				}
			}
		}

		&__description {
			display: grid;
			grid-template-rows: auto 1fr;
			height: 100%;
		}

		&__genre {
			align-self: center;
		}

		&__footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 10px;
			margin-top: auto;

			@media (min-width: $md) {
				gap: 20px;
			}
		}

		&__price {
			margin: auto;
		}

		button {
			font-size: 24px;
			line-height: 36px;
			color: $color-black;
			border: 3px solid $color-black;
			background: transparent;
			padding: 10px 7px;

			@media (min-width: $md) {
				padding: 10px 19px;
			}

			@media (min-width: $lg) {
				font-size: 30px;
				line-height: 1.5;
				padding: 12px 29px;
			}

			&:hover {
				background-color: $color-gray-light;
			}

			&:active {
				background: $color-blue;
			}
		}
	}
}

.glide {
	position: relative;

	&__track {
		overflow: hidden;

		@media (min-width: 1000px) {
			margin-bottom: 70px;
		}

		@media (max-width: $md) {
			margin-bottom: 40px;
		}
	}

	&__slides {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	&__slide {
		display: flex;
		justify-content: center;
		min-height: 500px !important;

		@media (min-width: $md) {
			min-height: 585px !important;
		}

		@media (min-width: $lg) {
			min-height: 650px !important;
		}
	}

	&__controls {
		display: flex;
		justify-content: center;
	}

	&__arrows {
		display: flex;
		align-items: center;

		button {
		}

		@media (max-width: 1000px) {
			justify-content: space-between;
			position: absolute;
			top: 47%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 80%;
		}

		@media (max-width: $md) {
			position: unset;
			transform: unset;
			width: 161px;
		}
	}

	&__arrow {
		cursor: pointer;
		pointer-events: all;
		transition: all 0.3s ease;

		&:hover {
			border: none;
			background: none;
		}

		@media (max-width: 1000px) {
			transform: scale(2);
		}

		@media (max-width: $md) {
			transform: unset;
		}
	}


	&__arrow--left {
		margin-right: 77px;

		@media (max-width: 1000px) {
			margin: 0;
		}
	}

	&__arrow--right {
		margin-left: 77px;

		@media (max-width: 1000px) {
			margin: 0;
		}
	}

	&__arrow:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	&__bullets {
		display: flex;
		justify-content: center;
		gap: 55px;

		@media (max-width: 1000px) {
			display: none;
		}
	}

	&__bullet {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 3px solid $color-black;
		cursor: pointer;
		padding: 0;
		transition: all 0.3s ease;
	}

	&__bullet--active {
		background-color: $color-black;
	}
}
</style>
