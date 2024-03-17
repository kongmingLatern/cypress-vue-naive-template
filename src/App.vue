<template>
	<n-button @click="openModal">naive-ui</n-button>
	<form-modal></form-modal>
</template>

<script setup lang="ts">
import { useFormModal } from './store'

const { openModal } = useFormModal()
</script>
