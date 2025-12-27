<script setup>
import Hero from '@/components/Hero.vue'
import BookCard from '@/components/BookCard.vue'
import About from '@/components/About.vue'
import Newsletter from '@/components/NewsLetter.vue'
import Footer from '@/components/Footer.vue'
import { useCartStore } from '@/stores/cart'
import { library } from '../data/books'

const cartStore = useCartStore()
</script>

<template>
	<div class="page">
		<Hero />
		<div v-for="book in library" :key="book.id">
		<BookCard :book="book"  @buy="emit('buy', $event)" /></div>
		<!-- <BookSlider :books="books" @buy="cartStore.addToCart" /> -->
		<!-- <About /> -->
		<!-- <Newsletter /> -->
		<Footer />
	</div>
</template>