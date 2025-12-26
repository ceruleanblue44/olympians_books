<script setup>
const books = [
	{
		id: 1,
		title: 'Н. Кун, “Легенды и мифы Древней Греции”',
		genre: 'Эпос и фольклор',
		price: 174,
	},
	{
		id: 2,
		title: 'Гомер, “Илиада”',
		genre: 'Эпос и фольклор',
		price: 155,
	},
	{
		id: 3,
		title: 'Ж. Верн, “Двадцать тысяч лье под водой”',
		genre: 'Приключения',
		price: 168,
	},
]
</script>

<template>
	<section class="books">
		<div class="container">
			<h2 class="books__title text-center">Горячие новинки</h2>

			<div class="row">
				<div
					class="col-lg-4 col-md-6 mb-4"
					v-for="book in books"
					:key="book.id">
					<div class="book-card">
						<h3 class="book-card__title">{{ book.title }}</h3>
						<p class="book-card__genre">{{ book.genre }}</p>
						<div class="book-card__footer">
							<span class="book-card__price">{{ book.price }} р.</span>
							<button class="book-card__buy btn btn-outline-dark">
								Купить
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.books {
	margin-bottom: 70px;
	&__title {
		margin-bottom: 40px;

		@media (min-width: $md) {
			margin-bottom: 45px;
		}

		@media (min-width: $lg) {
			margin-bottom: 70px;
		}
	}
}
</style>
