<template>
	<n-modal
		v-model:show="showModal"
		preset="dialog"
		positive-text="确认"
		negative-text="取消"
		@positive-click="handlePositiveClick"
		@negative-click="handleNegativeClick"
		v-bind="$attrs"
	>
		<template #header>
			<slot name="header"></slot>
		</template>

		<slot></slot>

		<template #action>
			<slot name="action"></slot>
		</template>
	</n-modal>
</template>

<script setup lang="ts">
import { useFormModal } from '@/store'

const { showModal } = useFormModal()
const emits = defineEmits(['confirm', 'cancel'])

function handlePositiveClick() {
	// TODO: 确认
	emits('confirm')
}
function handleNegativeClick() {
	// TODO: 取消
	emits('cancel')
}
</script>

<style scoped></style>
