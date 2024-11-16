<script setup>
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ConfirmationBtn from './components/buttons/ConfirmationBtn.vue'
import Dialog from './components/Dialog.vue';
import { computed, ref } from 'vue';
import { useCartStore } from './stores/cart';

const cartStore = useCartStore();
const details = computed(() => {
    return cartStore.details 
});

const text = 'Confirm order';
const isDialogActive = ref(false); 

function openDialog() {
  isDialogActive.value = true; 
}

function closeDialog() {
  isDialogActive.value = false; 
}
</script>

<template>
  <v-row>
    <v-col cols="12" lg="8">
      <main>      
        <v-container>      
          <v-card flat class=" card mt-5"> 
            <div class="px-5 title-container" >
              <h1 >Desserts</h1>  
            </div>          
                             
            <div class="d-flex">
              
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
          <div>
            <div class="d-flex justify-center mt-3">
              <img src="./assets/images/icon-carbon-neutral.svg" alt="">
              <p>This is a <span>carbon-neutral</span> delivery</p>
            </div>
            <ConfirmationBtn v-if="details.length > 0" :text="text" class="mt-3" @click="openDialog"/>
          </div>
        </v-container>
      </aside>
    </v-col>
  </v-row>

 
  <Dialog :isActive="isDialogActive" @update:isActive="isDialogActive = $event"/>
</template>

<style scoped>
.card {
  background-color: transparent;
}
.title-container{
  max-width: 100%;
  text-align: center;
  margin-bottom: 10px;
  margin-left: -5rem;
  
}
p {
  color: hsl(14, 65%, 9%);
}

span {
  font-weight: 700;
}

/* Para telas maiores que 420px */
@media (min-width: 1280px) {
  .title-container{
    max-width: 100%;
    text-align: start;
    margin-left: 0;
  }
}
</style>
