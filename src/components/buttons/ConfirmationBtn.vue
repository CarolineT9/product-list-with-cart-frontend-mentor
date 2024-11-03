<template>
    <v-btn class="confirm-btn" :text="text" flat/>
</template>

<script setup>
const props=  defineProps({
    text:{
        type: String,
        required: true
    }
})
</script>

<style scoped>
.confirm-btn{
    width: 100%;
    height: 50px !important;
    border-radius: 42px;
    text-transform: capitalize;
    font-weight: 500;
    color: white;
    background-color: hsl(14, 86%, 42%);
}
.confirm-btn:hover{
    background-color: hsl(14, 88%, 29%);
    
}
</style>