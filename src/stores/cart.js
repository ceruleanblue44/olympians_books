import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
	// reactive cart items
	const items = ref(JSON.parse(localStorage.getItem('cart')) || [])

	// total items in cart
	const totalItems = computed(() =>
		items.value.reduce((sum, item) => sum + item.quantity, 0)
	)

	const totalPrice = computed(() =>
		items.value.reduce(
			(sum, item) => sum + Number(item.price) * item.quantity, 0)
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
			// Remove if quantity reaches 0
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
		increment,
		decrement,
	}
})

// import { defineStore } from 'pinia'

// export const useCartStore = defineStore('cart', {
// 	state: () => ({
// 		items: [],
// 	}),

// 	getters: {
// 		totalItems: (state) =>
// 			state.items.reduce((sum, item) => sum + item.quantity, 0),

// 		totalPrice: (state) =>
// 			state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
// 	},

// 	actions: {
// 		addToCart(book) {
// 			const existing = this.items.find((i) => i.id === book.id)
// 			if (existing) {
// 				existing.quantity++
// 			} else {
// 				this.items.push({
// 					...book,
// 					quantity: 1,
// 				})
// 			}
// 		},

// 		removeFromCart(id) {
// 			this.items = this.items.filter((i) => i.id !== id)
// 		},

// 		clearCart() {
// 			this.items = []
// 		},
// 	},
// })

// import { defineStore } from 'pinia'
// import { computed, ref } from 'vue'

// export const useCartStore = defineStore('cart', () => {
// 	items: JSON.parse(localStorage.getItem('cart')) || []
// 	const items = ref([])

// 	function addToCart(book) {
// 		const existing = items.value.find((item) => item.id === book.id)

// 		if (existing) {
// 			existing.quantity++
// 		} else {
// 			items.value.push({
// 				...book,
// 				quantity: 1,
// 			})
// 		}
// 	}

// 	const totalItems = computed(() =>
// 		items.value.reduce((sum, item) => sum + item.quantity, 0)
// 	)

// 	return {
// 		items,
// 		addToCart,
// 		totalItems,
// 	}
// })
