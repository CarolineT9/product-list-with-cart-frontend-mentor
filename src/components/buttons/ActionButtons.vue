<template>
    <v-btn  class="btn-action add-card" variant="outlined" min-width="180" height="50">
        <tr>
          <td>
            <v-btn flat class="qnty-btn" size="x-small" @click="$event => $emit('decrement-quantity')">
              <v-icon><img src="../../assets/images/icon-decrement-quantity.svg" alt=""></v-icon>
            </v-btn>
            
            <v-btn flat class="qnty-btn" size="x-small"><v-icon class="mr-2" @click="$event => $emit('add-product')"><img
                  src="../../assets/images/icon-increment-quantity.svg" alt=""></v-icon></v-btn>
          </td>
        </tr>
      </v-btn> 
</template>
<script setup>


import { useCartStore } from '../../stores/cart';

const cartStore = useCartStore();
const emit = defineEmits(['add-product', 'decrement-quantity'])



</script>
<style scoped>
.btn-action {
    border-radius: 45px;
    margin-left: 21%;
    margin-top: -8%; 
    background-color: hsl(14, 86%, 42%);

  }
  .add-card {
   
  }
  .qnty-btn{
    background-color: hsl(14, 86%, 42%) ;
    }  
</style>