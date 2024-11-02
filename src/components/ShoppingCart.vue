<template>
    <v-container>
        <div class="mb-5">
            <h2>Your Cart({{ total }})</h2>
        </div>
        <v-card class="d-flex  align-center " flat v-for="(item, index) in details" :key="index">
            <img class="my-3" :src="item.dessert.image.thumbnail" alt="dessert image" height="48">
            <div class="cart-description flex-column product-description ">
                <div class="title">{{ item.dessert.name }}</div>
                <div class="d-flex justify-space-around ">
                    <span class="quantity">{{ item.quantity }} x</span>
                    <span class="price">$ {{ item.dessert.price.toFixed(2) }}</span>
                    <span class="amount">$7.00</span>
                    <v-bnt class="btn-delete" @click="deleteProdutct(item.dessert.name)">
                        <v-icon class="icon">
                            <img src="../assets/images/icon-remove-item.svg" alt="Icon to remove an item from the cart">
                        </v-icon>
                    </v-bnt>
                </div>
                
            </div>
       
        </v-card>
        <div class="my-5">
            <p>Order total</p>
        </div>
        <v-card flat v-if="details.length === 0">
            <div class="text-center my-3">
                <img src="../assets/images/illustration-empty-cart.svg" alt="">
                <p>Your added items will appear here.</p>
            </div>
        </v-card>
    </v-container>


</template>

<script setup>
import { computed, watch } from 'vue'

import { useCartStore } from '../stores/cart';


const cartStore = useCartStore()

const deleteProdutct = (d) =>{
    cartStore.deleteProduct(d)
}
const total = computed(() => {
    return cartStore.cartItemsCount
}
)
const details = computed(() => {
    return cartStore.details // Acessa diretamente os detalhes da store

});



</script>

<style scoped>
span {
    font-weight: 400;
}

.cart-description {
    width: 40%;
}

.title {
    color: hsl(14, 65%, 9%);
    font-weight: 700;
}

.price {
    color: hsl(12, 20%, 44%);

}

.product-description {
    width: 80%;
    margin-left: 2%;
}

.quantity {
    color: hsl(14, 86%, 42%);
    font-weight: 700;
}
.btn-delete{
    border: 1px solid hsl(12, 20%, 44%);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;

}
img{
    margin-bottom: 9px;
  margin-right: 5.5px;
   
}
.amount {}
</style>