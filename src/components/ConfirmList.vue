<template>
    <v-card flat v-for="(item, index) in details" :key="index">
        <div class="d-flex  align-center container px-4">
            <img class="my-3" :src="item.dessert.image.thumbnail" alt="dessert image" height="48">
            <div class="cart-description flex-column product-description ">
                <div class="title">{{ item.dessert.name }}</div>
                <div class="d-flex justify-space-around ">
                    <span class="quantity">{{ item.quantity }} x</span>
                    <span class="price">$ {{ item.dessert.price.toFixed(2) }}</span>
                    <span class="amount">$ {{ subtotals[index].subtotal }}</span>
                    
                </div>
            </div>
        </div>
        <v-divider class="bg-black"></v-divider>
    </v-card>

    <div v-if="details.length >= 1" class="order my-5 d-flex  justify-space-between">
        <p>Order total</p>
        <p class="total-cost">${{ totalCarCost.toFixed(2) }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore()
const details = computed(() => {
    return cartStore.details

});

const subtotals = computed(() => {
    return details.value.map(item => ({
        name: item.dessert.name,
        subtotal: (item.quantity * item.dessert.price).toFixed(2)
    }));
});
const totalCarCost = computed(() => {
    return cartStore.totalAmount
}
);

</script>

<style scoped>
.container{
    background-color: rgb(244, 237, 235);
    
    
}
.cart-description {
    width: 40%;
}

.product-description {
    width: 80%;
    margin-left: 2%;
}

.title {
    color: hsl(14, 65%, 9%);
    font-weight: 700;
}

.quantity {
    color: hsl(14, 86%, 42%);
    font-weight: 700;
}

.price {
    color: hsl(12, 20%, 44%);

}

img {
    margin-bottom: 9px;
    margin-right: 5.5px;

}

.btn-delete {
    border: 1px solid hsl(12, 20%, 44%);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;

}
p{
    color: hsl(14, 65%, 9%);
}
.total-cost{
    font-weight: 700;
}

</style>