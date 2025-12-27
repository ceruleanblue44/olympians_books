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

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
	const items = ref([])

	function addToCart(book) {
		const existing = items.value.find((item) => item.id === book.id)

		if (existing) {
			existing.quantity++
		} else {
			items.value.push({
				...book,
				quantity: 1,
			})
		}
	}

	const totalItems = computed(() =>
		items.value.reduce((sum, item) => sum + item.quantity, 0)
	)

	return {
		items,
		addToCart,
		totalItems,
	}
})
