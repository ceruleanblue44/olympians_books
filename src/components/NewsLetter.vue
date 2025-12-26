<script setup>
import { ref, computed, useTemplateRef } from 'vue'
const email = ref('')
const isInvalid = ref(false)
const input = useTemplateRef('input')

const isValid = computed(() => {
	return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)
})

const hasError = computed(
	() => isInvalid.value && !isValid.value && email.value.length
)
const submit = () => {
	isInvalid.value = false
	email.value = ''
	console.log('submitted')
}

</script>

<template>
	<section class="newsletter container grid">
		<div class="col-lg-1 col-md-1 hide-xs">&nbsp;</div>
		<div class="col-lg-10 col-md-10 col-xs-12">
			<h3 class="newsletter__title">Хотите знать о книгах всё?</h3>
			<p class="text-base newsletter__subtitle">
				Подпишитесь на нашу новостную рассылку
			</p>

			<form class="newsletter__form">
				<input
					type="email"
					class="newsletter__input"
					placeholder="Email"
					ref="input"
					v-model="email"
					@blur="isInvalid = true"
					@focus="isInvalid = false"
					:class="hasError ? 'error' : ''" />
				<button class="button newsletter__button" type="submit.prevent" @click="submit" :disabled="!isValid">Отправить</button>
			</form>
		</div>
	</section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;

.newsletter {
	text-align: center;
	margin-bottom: 90px;

	@media (min-width: $lg) {
		margin-bottom: 140px;
	}

	&__title {
		margin-bottom: 10px;

		@media (min-width: $md) {
			margin-bottom: 20px;
		}

		@media (min-width: $lg) {
			margin-bottom: 14px;
		}
	}

	&__subtitle {
		margin-bottom: 40px;

		@media (min-width: $md) {
			margin-bottom: 43px;
		}

		@media (min-width: $lg) {
			margin-bottom: 60px;
		}
	}

	&__form {
		display: flex;
		gap: 10px;
		flex-direction: column;
		align-items: center;

		@media (min-width: $md) {
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
			gap: 20px;
		}

		input {
			display: inline-block;
			width: 100%;
			height: 60px;
			border: 3px solid $color-black;
			font-size: 30px;
			font-family: Raleway;
			padding: 2px 12px 6px 12px;

			&:focus {
				outline: none;
				border-color: $color-blue;
			}
			&.error {
				border-color: tomato;
			}
			@media (min-width: $md) {
				height: 50px;
				font-size: 20px;
				padding: 5px;
			}
		}
		button {
			border-color: $color-black;
			height: 60px;
			font-size: 30px;
			padding: 0px 29px;

			&:focus {
				border-color: $color-blue;
			}

			@media (min-width: $md) {
				height: 50px;
				font-size: 24px;
				line-height: 45px;
				padding: 0 67px;
			}
		}
	}
}
</style>
