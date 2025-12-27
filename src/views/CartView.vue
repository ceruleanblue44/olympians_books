<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CartItem from '@/components/CartItem.vue'
import ThanksModal from '@/components/ThanksModal.vue'

const cartStore = useCartStore()
const showThanks = ref(false)

const handleOrder = () => {
	showThanks.value = true
	cartStore.clearCart()
}
</script>

<template>
	<div class="cart page">
		<Header />
		<h2 class="cart__title">Корзина</h2>
		<div class="container grid cart__details">
			<div class="col-lg-5 col-md-5 hide-xs text-center">
				<div class="text-base">Название товара</div>
			</div>
			<div class="col-lg-2 hide-md text-center">
				<div class="text-base">Цена за шт.</div>
			</div>
			<div class="col-lg-2 col-md-3 hide-xs text-center">
				<div class="text-base">Количество</div>
			</div>
			<div class="col-lg-2 col-md-3 hide-xs text-center">
				<div class="text-base">Общая цена</div>
			</div>
		</div>

		<div class="container" v-if="cartStore.items.length > 0">
			<div v-for="item in cartStore.items" :key="item.id" class="item-wrapper">
				<CartItem :item="item" />
			</div>

			<div class="cart__total">
				<div class="cart__total-text">Итого к оплате:</div>
				<div class="cart__total-price" v-if="cartStore.items.length > 0">
					{{ cartStore.totalPrice }} p.
				</div>
			</div>

			<div class="button-order">
				<button class="button" @click="handleOrder">Оформить заказ</button>
			</div>
		</div>

		<ThanksModal v-if="showThanks" @close="showThanks = false" />

		<Footer />
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.header-wrapper {
	width: 100%;
	background-color: $color-blue;
	margin-bottom: 40px;

	@media (min-width: $md) {
		margin-bottom: 90px;
	}

	@media (min-width: $lg) {
		margin-bottom: 140px;
	}
}

.cart {
	&__title {
		text-align: center;
	}

	&__details {
		@media (min-width: $md) {
			margin-bottom: 31px;
		}

		@media (min-width: $lg) {
			margin-bottom: 52px;
		}
	}

	&__total {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 27px;
		font-family: Forum;
		font-size: 24px;
		line-height: 36px;

		@media (min-width: $md) {
			flex-direction: row;
			justify-content: space-around;
			margin-bottom: 38px;
		}

		@media (min-width: $lg) {
			font-size: 42px;
			line-height: 54px;
			margin-bottom: 52px;
		}

		&-text {
			text-transform: uppercase;
		}
	}
}

.item-wrapper {
	margin-bottom: 20px;
}

button {
	border-color: $color-black;
	height: 60px;
	font-size: 24px;
	line-height: 26px;
	padding: 0px 29px;
	width: 100%;
	margin: auto;

	&:focus {
		border-color: $color-blue;
	}

	@media (min-width: $md) {
		width: 340px;
		height: 50px;
		font-size: 30px;
		line-height: 45px;
		padding: 0 67px;
	}

	@media (min-width: $md) {
		width: 640px;
	}
}

.button-order {
	display: flex;
	justify-content: center;
	margin-bottom: 40px;

	@media (min-width: $md) {
		margin-bottom: 90px;
	}

	@media (min-width: $lg) {
		margin-bottom: 140px;
	}
}
</style>
