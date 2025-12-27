<script setup>
import { ref, onBeforeUnmount } from 'vue'
import IconOpen from './icons/IconOpen.vue'
const emit = defineEmits(['close'])

const rotate = ref(false)

function hide() {
	rotate.value = true

	setTimeout(() => {
		emit('close')
	}, 300)

	setTimeout(() => {
		rotate.value = false
	}, 300)
}

onBeforeUnmount(() => {
	rotate.value = true

	setTimeout(() => {
		rotate.value = false
	}, 300)
})
</script>

<template>
	<nav class="header-menu">
		<button class="icon open" @click="hide">
			<IconOpen :class="rotate ? 'rotate' : ''" />
		</button>
		<!-- <a>Главная</a> -->
		<!-- <a>Каталог</a> -->
		<!-- <a>Корзина</a> -->
		<router-link :to="{ name: 'home' }">Главная</router-link>
		<router-link :to="{ name: 'library' }">Каталог</router-link>
		<router-link :to="{ name: 'cart' }">Корзина</router-link>
	</nav>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.header-menu {
	position: fixed;
	top: 0;
	left: calc(50% - 160px);
	width: 320px;
	z-index: 1;
	background-color: $color-white;
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 19px 0 76px 0;
	font-family: Forum;
	font-size: 22px;
	line-height: 33px;
	align-items: center;

	@media (min-width: $md) {
		left: calc(50% - 170px);
		width: 340px;
		gap: 26px;
		padding: 20px 0 72px 0;
	}

	@media (min-width: $lg) {
		font-size: 30px;
		line-height: 45px;
		left: calc(50% - 210px);
		width: 420px;
		gap: 35px;
		padding: 41px 0 113px 0;
	}

	a {
		color: $color-black;

		&:first-child {
			margin-top: 5px;
		}

		&:hover,
		&:active {
			color: $color-gray;
		}

		@media screen and (max-width: 768px) {
			font-size: 26px;
		}
	}

	button.icon {
		color: $color-black;
		cursor: pointer;
		transition: color 0.3s ease-in-out;

		&:hover,
		&:active {
			color: $color-gray;
		}

		svg {
			transform: rotate(180deg);
			transition: transform 0.3s ease-in-out;

			&.rotate {
				transform: rotate(0deg);
			}

			@media (max-width: $lg) {
				transform: rotate(180deg) scale(0.5);
				transition: none;

				&.rotate {
					transform: rotate(0deg) scale(0.5);
					transition: transform 0.3s ease-in-out;
				}
			}
		}
	}
}
</style>
