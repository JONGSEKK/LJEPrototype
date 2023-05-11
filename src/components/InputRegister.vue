<script setup>
    const props = defineProps({
    placeholder: String,
    })

</script>

<template>
    <input type="text" v-bind:placeholder="placeholder" class="w-4/5 outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/>
</template>