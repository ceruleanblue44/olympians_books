<script setup></script>

<template>
	<div class="footer-wrapper">
		<footer class="container grid footer">
			<div class="footer__logo-phone col-lg-6 col-md-6 col-xs-6">
				<div class="footer__logo">
					Olympians<br />
					books
				</div>
				<a class="phone text-base" href="tel:+30922040281">+30922040281</a>
			</div>
			<div class="col-lg-6 col-md-6 col-xs-6">
				<nav class="footer__nav">
					<a class="footer__nav-link text-base">Главная</a>
					<a class="footer__nav-link text-base">Каталог</a>
					<a class="footer__nav-link text-base">Корзина</a>
				</nav>
			</div>
		</footer>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.footer {
	&-wrapper {
		width: 100%;
		background-color: $color-blue;
	}

	padding-block: 22px 41px;
	margin-inline: auto;
	color: $color-white;

	@media (min-width: $md) {
		padding-block: 30px;
	}

	@media (min-width: $lg) {
		padding-block: 14px;
	}

	&__logo-phone {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;

		@media (min-width: $md) {
			flex-direction: row;
			justify-content: unset;
		}
	}

	&__logo {
		font-size: 20px;
		line-height: 30px;
		font-family: $font-logo;
		letter-spacing: 2.8px;
		color: $color-white;

		@media (min-width: $lg) {
			font-size: 30px;
			line-height: 45px;
		}
	}

	.phone {
		margin: auto;

		@media (max-width: $md) {
			margin: 0;
		}
	}

	&__nav {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		height: 100%;
		justify-content: space-between;

		@media (min-width: $md) {
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
		}

		@media (min-width: $lg) {
			padding-block: 14px;
		}

		&-link:not(:last-child) {
			margin-bottom: 33px;

			@media (min-width: $md) {
				margin-bottom: 0;
			}
		}

		a {
			cursor: pointer;
		}
	}
}
</style>
