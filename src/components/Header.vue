<script setup>
import HeaderMenu from './HeaderMenu.vue'
import { ref } from 'vue'
import IconOpen from './icons/IconOpen.vue'
import CartIcon from './CartIcon.vue'

const showMenu = ref(false)

</script>

<template>
	<div class="header-wrapper">
		<header
			class="container header">
			<Transition>
				<HeaderMenu v-if="showMenu" @close="showMenu = false" />
			</Transition>
			<div class="header__logo">
				Olympians<br />
				books
			</div>
			<a class="header__menu" @click="showMenu = true">
				<IconOpen :class="showMenu ? 'rotate' : ''" />
			</a>
			<!-- <a class="header__cart">
				<img src="../assets/icons/menu-cart.svg"
					 alt="menu" />
			</a> -->
			<router-link :to="{ name: 'cart' }">
				<CartIcon />
			</router-link>
		</header>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.header {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-block: 8px;
	margin-inline: auto;

	&-wrapper {
		width: 100%;
	}

	@media (min-width: $lg) {
		padding-block: 14px;
	}

	&__menu {
		position: absolute;
		left: calc(50% - 32px);
		cursor: pointer;
		color: $color-white;
		transition: color 0.3s ease-in-out;

		&:hover,
		&:active {
			color: $color-gray;
		}
	}

	&__logo {
		font-family: $font-logo;
		font-size: 10px;
		line-height: 15px;
		color: $color-white;
		letter-spacing: 2.8px;

		@media (min-width: $md) {
			font-size: 14px;
			line-height: 21px;
		}

		@media (min-width: $lg) {
			font-size: 24px;
			line-height: 36px;
		}
	}

	.v-enter-active {
		animation: show 1s reverse;
	}

	.v-leave-active {
		animation: show 1s;
	}

	@keyframes show {
		0% {
			transform: translateY(0);
		}

		20% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-800px);
		}
	}
}
</style>
