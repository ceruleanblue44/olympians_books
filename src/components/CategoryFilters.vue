<script setup>
defineProps({
	categories: {
		type: Array,
		required: true,
	},
	activeCategory: {
		type: String,
		default: 'all',
	},
})

const emit = defineEmits(['select'])
</script>

<template>
	<div class="container categories__wrapper">
		<ul class="categories">
			<li class="category">
				<div class="category__btn disabled">
					<button>
						<span class="h4 text-center">Категория</span>
					</button>
				</div>
			</li>
			<li class="category" v-for="category in categories" :key="category">
				<div class="category__btn">
					<button
						:class="{ active: category === activeCategory }"
						@click="emit('select', category)">
						<span class="text-base text-center">{{ category }}</span>
					</button>
				</div>
			</li>
		</ul>
	</div>
</template>
<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.categories {
	display: flex;
	flex-direction: column;

	@media (min-width: $md) {
		flex-direction: row;
		justify-content: space-around;
	}

	&__wrapper {
		margin-bottom: 23px;

		@media (min-width: $md) {
			margin-bottom: 56px;
		}

		@media (min-width: $lg) {
			margin-bottom: 70px;
		}
	}

	.category {
		&__btn {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 23px;

			@media (min-width: $md) {
				margin-bottom: 0;
			}

			& .active {
				span {
					color: $color-blue;
				}

				border-bottom: 3px solid $color-blue;
			}

			&.disabled button {
				cursor: default;
			}
		}
	}
}
</style>
