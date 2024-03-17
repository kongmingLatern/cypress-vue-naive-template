import { ref } from 'vue'

const showModal = ref(false)
export function useFormModal() {
	function openModal() {
		showModal.value = true
	}
	function closeModal() {
		showModal.value = false
	}
	return {
		showModal,
		openModal,
		closeModal,
	}
}
