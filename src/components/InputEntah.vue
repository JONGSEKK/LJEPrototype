<script setup>
    const props = defineProps({
    placeholder: String,
    inputType: String
    })

</script>

<template>
    <input v-bind:type="inputType" id="txtbox_ID" v-bind:placeholder="placeholder" class="w-full outline-none border-b-2 border-b-blue-600 pt-5 pb-3 mb-2 bg-transparent"/>
</template>