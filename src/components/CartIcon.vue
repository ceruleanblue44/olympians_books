<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
	<div class="cart-icon">
		<img src="@/assets/icons/menu-cart.svg" alt="Cart" />

		<span v-if="cartStore.totalItems > 0" class="cart-icon__badge">
			{{ cartStore.totalItems }}
		</span>
	</div>
</template>

<style scoped lang="scss">
.cart-icon {
	position: relative;

	&__badge {
		position: absolute;
		top: -6px;
		right: -10px;
		background: tomato;
		color: white;
		border-radius: 50%;
		font-size: 12px;
		padding: 2px 6px 5px;
		line-height: 1;
	}
}
</style>
