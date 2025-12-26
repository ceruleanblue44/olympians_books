<script setup></script>

<template>
	<header class="container header">
		<div class="header__logo">
			Olympians<br />
			books
		</div>
		<div class="header__menu">
			<img src="../assets/icons/menu-closed.svg" alt="menu" />
		</div>
		<div class="header__cart">
			<img src="../assets/icons/menu-cart.svg" alt="menu" />
		</div>
	</header>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-block: 8px;
	margin-inline: auto;

	@media (min-width: $lg) {
		padding-block: 14px;
	}

	&__logo {
		font-family: $font-logo;
		font-size: 10px;
		line-height: 15px;
		color: $color-white;

		@media (min-width: $md) {
			font-size: 14px;
			line-height: 21px;
		}
		@media (min-width: $lg) {
			font-size: 24px;
			line-height: 36px;
		}
	}
}
</style>
