<script setup lang="ts">
	const { data } = await useAsyncData('home', () => {
		return queryCollection('content').path('/').first()
	})

	useSeoMeta({
		title: data.value?.title,
		description: data.value?.description,
	})
</script>

<template>
	<ContentRenderer :value="data" />
</template>
