import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
	const items = ref(JSON.parse(localStorage.getItem('cart')) || [])

	const totalItems = computed(() =>
		items.value.reduce((sum, item) => sum + item.quantity, 0)
	)

	const totalPrice = computed(() =>
		items.value.reduce(
			(sum, item) => sum + Number(item.price) * item.quantity,
			0
		)
	)

	const addToCart = (book) => {
		const existing = items.value.find((item) => item.id === book.id)

		if (existing) {
			existing.quantity++
		} else {
			items.value.push({ ...book, quantity: 1 })
		}

		localStorage.setItem('cart', JSON.stringify(items.value))
	}

	const removeFromCart = (id) => {
		items.value = items.value.filter((item) => item.id !== id)
		localStorage.setItem('cart', JSON.stringify(items.value))
	}

	const clearCart = () => {
		items.value = []
		localStorage.removeItem('cart')
	}

	const increment = (id) => {
		const item = items.value.find((i) => i.id === id)
		if (item) {
			item.quantity++
			localStorage.setItem('cart', JSON.stringify(items.value))
		}
	}

	const decrement = (id) => {
		const item = items.value.find((i) => i.id === id)
		if (item) {
			item.quantity--
			if (item.quantity <= 0) {
				items.value = items.value.filter((i) => i.id !== id)
			}
			localStorage.setItem('cart', JSON.stringify(items.value))
		}
	}

	return {
		items,
		totalItems,
		totalPrice,
		addToCart,
		removeFromCart,
		clearCart,
		increment,
		decrement,
	}
})
