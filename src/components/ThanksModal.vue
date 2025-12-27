<script setup>
import IconRemove from './icons/IconRemove.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function closeModal() {
	router.push({ name: 'home' })
}
</script>

<template>
	<div class="modal">
		<div class="modal-overlay">
			<div class="modal">
				<button class="modal__close" @click="closeModal">
					<IconRemove />
				</button>

				<p class="text-base">
					Благодарим за покупку! Ваши ценные манускрипты прибудут в ближайшее
					время. Возвращайтесь ещё!
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/grid' as *;
.modal-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
}

.modal {
	position: relative;
	background: #fff;
	width: 320px;
	padding: 32px 24px;
	text-align: center;

	@media (min-width: $md) {
		width: 460px;
		padding: 60px 70px;
	}

	@media (min-width: $lg) {
		width: 640px;
		padding: 120px;
	}
}

.modal__close {
	position: absolute;
	top: 30px;
	right: 30px;
}
</style>
