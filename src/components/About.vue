<template>
	<section class="container about">
		<div class="grid grid--no-gap about__row">
			<div class="col-lg-6 col-md-6 col-xs-12 order-xs-2">
				<div class="about__img">
					<img src="../assets/images/book.webp" alt="" />
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-xs-12">
				<div class="about__description">
					<h2 class="about__title">О нас</h2>
					<p class="about__text text-base">
						Книжное наследие от мыслителей Древней Греции и до людей
						современности. Это не просто магазин, а настоящий клуб любителей
						книги, который объединяет в своем культурном пространстве людей
						самых разных интересов.
					</p>
				</div>
			</div>
		</div>

		<div class="grid grid--no-gap about__row">
			<div class="col-lg-6 col-md-6 col-xs-12">
				<div class="about__description">
					<h2 class="about__title">Гармония</h2>
					<p class="about__text text-base">
						Наш проект «Гармония» объединяет читателей и авторов в реальности и
						в интернете. Каждую неделю проводятся встречи онлайн и вживую. Из
						наших регулярных рубрик вы узнаете много нового о книгах и
						писателях.
					</p>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-xs-12">
				<div class="about__img">
					<img src="../assets/images/bust.webp" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.about {
	margin-bottom: 70px;

	@media (min-width: $md) {
		margin-bottom: 90px;
	}

	@media (min-width: $lg) {
		margin-bottom: 140px;
	}

	&__img {
		display: flex;
		justify-content: center;
		height: 500px;
		overflow: hidden;
		
		@media (min-width: $md) {
			height: 100%;
		}
		
		img {
			max-width: unset;
			
			@media (min-width: 550px) {
				width: 100%;
				object-fit: cover;
			}
			
			@media (min-width: $md) {
				height: 100%;
				object-fit: cover;
			}
		}
	}

	&__title {
		font-size: 30px;
		line-height: 45px;

		@media (min-width: $md) {
			font-size: 48px;
			line-height: 72px;
		}

		@media (min-width: $lg) {
			font-size: 64px;
			line-height: 96px;
		}
	}

	&__description {
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
		min-height: 500px;
		padding: 35px 25px;
		color: $color-white;
		background-color: $color-blue;
		text-align: center;

		@media (min-width: $md) {
			padding: 40px 80px;
		}

		@media (min-width: $lg) {
			padding: 60px 124px;
		}
	}

	&__text {
		align-self: center;
	}
}
</style>
