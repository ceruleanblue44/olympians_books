<script setup>
import { useCartStore } from '@/stores/cart'
import IconRemove from './icons/IconRemove.vue'

const cartStore = useCartStore()

const { item } = defineProps({ item: Object })

const removeItem = () => {
	cartStore.removeFromCart(item.id)
}

function increment() {
	cartStore.increment(item.id)
}

function decrement() {
	cartStore.decrement(item.id)
}
</script>

<template>
	<div class="container grid cart-item">
		<div class="col-lg-2 col-md-2 col-xs-12 self-center">
			<img :src="item.src" alt="Book cover" class="" />
		</div>
		<div class="col-lg-3 col-md-3 col-xs-12 self-center">
			<div class="text-base">{{ item.title }}</div>
		</div>
		<div class="col-lg-2 self-center hide-md">
			<div class="text-base">{{ item.price }} р.</div>
		</div>
		<div class="col-lg-3 col-md-3 col-xs-12 self-center">
			<div class="cart-item__quantity-control">
				<button @click="decrement">-</button>
				<span class="text-base">{{ item.quantity }} шт.</span>
				<button @click="increment">+</button>
			</div>
		</div>

		<div class="col-lg-2 col-md-2 col-xs-12 self-center">
			<div class="text-base">{{ +item.price * item.quantity }} р.</div>
		</div>

		<button class="cart-item__remove" @click="removeItem">
			<IconRemove class="" />
		</button>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.cart-item {
	position: relative;
	width: 100%;
	border: 3px solid $color-black;
	gap: 10px;
	padding: 25px;

	@media (min-width: $md) {
		padding: 25px 65px 30px;
	}

	@media (min-width: $lg) {
		padding: 55px 110px 55px 42px;
	}

	img {
		width: 90px;
	}

	&__remove {
		position: absolute;
		right: 30px;
		top: 30px;

		@media (min-width: $md) {
			top: 50%;
			transform: translateY(-50%);
		}

		svg {
			width: 32px;
			height: 32px;
		}
	}

	&__quantity-control {
		display: flex;
		align-items: center;

		span {
			display: inline-block;
			margin: 0 20px;
		}

		button {
			font-size: 36px;
			line-height: 36px;
		}
	}
}
</style>
