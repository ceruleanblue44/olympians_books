<script setup>
defineProps({
	book: {
		type: Object,
		required: true,
	},
})

const emit = defineEmits(['buy'])
</script>

<template>
	<div class="book-card">
		<div class="book-card__cover-image">
			<img :src="book.src" :alt="book.title" />
		</div>

		<div class="book-card__description">
			<p class="book-card__title text-base text-center">
				{{ book.title }}
			</p>
			<p class="book-card__genre text-s text-center">
				{{ book.genre }}
			</p>
		</div>

		<div class="book-card__footer">
			<div class="book-card__price text-base">{{ book.price }} р.</div>

			<button class="button book-card__btn" @click="emit('buy', book)">
				КУПИТЬ
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.book {
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
</style>
