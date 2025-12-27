<script setup>
import Hero from '@/components/Hero.vue'
import BookSlider from '@/components/BookSlider.vue'
import About from '@/components/About.vue'
import Newsletter from '@/components/NewsLetter.vue'
import Footer from '@/components/Footer.vue'
import { useCartStore } from '@/stores/cart'
import { library } from '../data/library'

const cartStore = useCartStore()

const books = library.slice(0, 3)

</script>

<template>
	<div class="page">
		<Hero />
		<BookSlider :books="books" @buy="cartStore.addToCart" />
		<About />
		<Newsletter />
		<Footer />
	</div>
</template>
