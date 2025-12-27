import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    totalItems: (state) => 
      state.items.reduce((sum, item) => sum + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },

  actions: {
    addToCart(book) {
      const existing = this.items.find(i => i.id === book.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({
          ...book,
          quantity: 1,
        })
      }
    },

    removeFromCart(id) {
      this.items = this.items.filter(i => i.id !== id)
    },

    clearCart() {
      this.items = []
    },
  },
})
