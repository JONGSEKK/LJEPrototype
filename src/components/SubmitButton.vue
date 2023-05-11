<script setup>
    const props = defineProps({
        label: String,
        })
</script>

<template>
    <button type="submit" class="border-2 rounded-lg border-solid py-2 bg-blue-600 text-white mt-3">{{ label }}</button>
</template>