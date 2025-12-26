<script setup>
import Header from './Header.vue'
</script>

<template>
	<section class="hero-section">
		<Header />
		<div class="container grid">
			<div class="hero__title col-lg-7 col-md-8 col-xs-9">
				<h1 class="">Книги, которые вознесут вас на Олимп</h1>
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

.hero {
	&-section {
		height: 100vh;
		color: $color-white;
		height: 590px;
		background: url(/src/assets/images/hero-bg.webp) no-repeat 57% 122% / auto 91% #1596C1;
		margin-bottom: 70px;

		@media (min-width: $md) {
			height: 820px;
			background-size: auto 90%;
			background-position: center bottom;
			margin-bottom: 90px;
		}

		@media (min-width: 1000px) {
			height: 880px;
			background-size: auto 97%;
			background-position: center bottom;
			margin-bottom: 140px;
		}



		@media (min-width: $lg) {
			height: 940px;
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
