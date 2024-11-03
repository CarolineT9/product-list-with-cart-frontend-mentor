<script setup>
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ConfirmationBtn from './components/buttons/ConfirmationBtn.vue'
import { computed } from 'vue';
import { useCartStore } from './stores/cart';
const cartStore = useCartStore
const details = computed(() => {
    return cartStore.details // Acessa diretamente os detalhes da store

});

const text = 'Confirm order'
</script>

<template>
  <v-row>
    <v-col cols="12" lg="8">
      <main>
        <v-container>
          <v-card flat class=" card mt-5 ml-2">
            <h1>Desserts</h1>
            <div class="d-flex ">
              <ProductList />
            </div>
          </v-card>
        </v-container>
      </main>

    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="12" lg="3">
      <aside>
        <v-container>
          <v-card flat class="mt-5 mr-2">
            <ShoppingCart />
          </v-card>
          <div >
            <div class="d-flex justify-center mt-3">
              <img src="./assets/images/icon-carbon-neutral.svg" alt="">
              <p>This is a <span>carbon-neutral</span> delivery</p>
            </div>
            <ConfirmationBtn :text="text" class="mt-3" />
          </div>
        </v-container>
      </aside>

    </v-col>
  </v-row>
</template>

<style scoped>
.card {
  background-color: transparent;
}

p {
  color: hsl(14, 65%, 9%)
}

span {
  font-weight: 700;
}
</style>
