<script setup>
import ConfirmList from './ConfirmList.vue';
import { useCartStore } from '../stores/cart';

const props = defineProps({
    isActive: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['update:isActive']); // Usando update:isActive para sincronizar com o v-model

const cartStore = useCartStore(); // Acessando a store do carrinho

// Método para iniciar um novo pedido e fechar o modal
function startNewOrder() {
  cartStore.clearCart(); // Limpa o carrinho
  emit('update:isActive', false); // Fecha o modal ao emitir false
}
</script>

<template>
  <v-dialog v-model="props.isActive" width="550" max-height="700">
    <v-card>
      <div class="px-4 py-4 serve">
        <v-card-text>
          <img src="../assets/images/icon-order-confirmed.svg" alt="">
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food!</p>
        </v-card-text>
        <div class="ml-4">
          <ConfirmList />
        </div>
        <v-spacer></v-spacer>
        <v-btn class="confirm-btn" text="Start New Order" @click="startNewOrder" flat></v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.confirm-btn {
    width: 100%;
    height: 50px !important;
    border-radius: 42px;
    text-transform: capitalize;
    font-weight: 500;
    color: white;
    background-color: hsl(14, 86%, 42%);
}

.confirm-btn:hover {
    background-color: hsl(14, 88%, 29%);
}

h1 {
    color: hsl(14, 65%, 9%);
}

p {
    color: hsl(7, 20%, 60%);
}
</style>
