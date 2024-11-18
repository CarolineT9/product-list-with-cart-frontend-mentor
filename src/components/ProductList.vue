<script setup>
import ProductCard from './ProductCard.vue';
import items from '../data/data.json'
import { reactive } from 'vue'

const desserts = reactive(items);

</script>
<template>
    <v-row>
        <v-col v-for="dessert in desserts" :key="dessert.name" cols="12" lg="4">
            <ProductCard :dessert="dessert" />
        </v-col>
    </v-row>
</template>

<style scoped></style>