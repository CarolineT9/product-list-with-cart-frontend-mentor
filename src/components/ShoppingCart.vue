<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cart';
import ShoppingCartItem from './ShoppingCartItem.vue';

const cartStore = useCartStore()
const details = computed(() => {
    return cartStore.details // Directly accesses the store details
});
const cartItems = computed(() => {
    return cartStore.cartItemsCount
}
);
</script>
<template>
    <v-container >
        <div class="mb-5">
            <h1>Your Cart({{ cartItems }})</h1>
        </div>
        <ShoppingCartItem />      
        <v-card flat v-if="details.length === 0">
            <div class="text-center my-3">
                <img src="../../public/images/illustration-empty-cart.svg" alt="Empty Cart">
                <p>Your added items will appear here.</p>
            </div>
        </v-card>
    </v-container>
</template>



<style scoped>
h1{
    color: hsl(14, 86%, 42%);
}
p{
    color: hsl(12, 20%, 44%);
    font-weight: 500;
}
</style>