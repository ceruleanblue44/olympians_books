<script setup>
import Header from './Header.vue'
</script>

<template>
	<section class="hero-library-section">
		<Header />
		<div class="container grid">
			<div class="hero__title col-lg-7 col-md-8 col-xs-9">
				<h1 class="">Собрание древних знаний</h1>
			</div>
			<div class="col-12">
				<button class="button hero__button">Узнать больше</button>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.hero-library {
	&-section {
		height: 100vh;
		color: $color-white;
		height: 470px;
		background: url(/src/assets/images/hero-lib-bg.webp) no-repeat 49% 122% / auto 100% #1596C1;
		margin-bottom: 70px;

		@media (min-width: $md) {
			height: 680px;
			background-size: auto 100%;
			background-position: center bottom;
			margin-bottom: 90px;
		}

		@media (min-width: $lg) {
			height: 820px;
			background-size: auto 100%;
			background-position: center bottom;
		}
	}

	&__title {
		padding-block: 5px;

		@media (min-width: $md) {
			padding-block: 28px;
		}
		@media (min-width: $lg) {
			padding-block: 70px;
		}
	}
}
</style>
