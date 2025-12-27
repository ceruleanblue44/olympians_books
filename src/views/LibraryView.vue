<script setup>
import HeroLibrary from '@/components/HeroLibrary.vue'
import BookCard from '@/components/BookCard.vue'
import Footer from '@/components/Footer.vue'
import { useCartStore } from '@/stores/cart'
import { library } from '@/data/library'
import CategoryFilters from '@/components/CategoryFilters.vue'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const activeCategory = ref(route.query.category || null)

const categories = computed(() => {
	return [...new Set(library.map((book) => book.genre))]
})

const filteredBooks = computed(() => {
	if (!activeCategory.value) {
		return library
	}

	return library.filter((book) => book.genre === activeCategory.value)
})

const categorySelect = (category) => {
	if (activeCategory.value === category) {
		activeCategory.value = null
		router.replace({ query: {} })
	} else {
		activeCategory.value = category
		router.replace({
			query: { category },
		})
	}
}

const cartStore = useCartStore()
</script>

<template>
	<div class="page">
		<HeroLibrary />
		<h2 class="section-title">Библиотека</h2>
		<CategoryFilters
			:categories="categories"
			:active-category="activeCategory"
			@select="categorySelect" />

		<div class="container library grid grid--row-gap">
			<div
				class="col-lg-4 col-md-6 col-xs-12"
				v-for="book in filteredBooks"
				:key="book.id">
				<BookCard :book="book" @buy="cartStore.addToCart" />
			</div>
		</div>
		<Footer />
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.library {
	margin-bottom: 40px;

	@media (min-width: $md) {
		margin-bottom: 45px;
	}

	@media (min-width: $lg) {
		margin-bottom: 70px;
	}
}
</style>
