<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useCartStore } from '../stores/cart';
import ActionButtons from './buttons/ActionButtons.vue';

const props = defineProps({
  dessert: {
    type: Object,
    required: true
  }
});

const cartStore = useCartStore();

// Computed for the image based on the screen size
const currentImage = computed(() => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    return props.dessert.image.mobile;
  } else if (window.matchMedia("(max-width: 1339px)").matches) {
    return props.dessert.image.tablet;
  } else {
    return props.dessert.image.desktop;
  }
});

function updateImageSrc() {
  currentImage.value = currentImage.value;
}

onMounted(() => {
  window.addEventListener('resize', updateImageSrc);
  updateImageSrc();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateImageSrc);
});

const showQuantityButtons = ref(false);

const addProduct = () => {
  cartStore.addProduct(props.dessert);
  showQuantityButtons.value = true;
};

const decrementQuantity = () => {
  cartStore.decrement(props.dessert.name);
};

// Computed for the product quantity in the cart
const quantity = computed(() => {
  const product = cartStore.details.find(d => d.dessert.name === props.dessert.name);
  return product ? product.quantity : 0;
});
</script>
<template>
  <v-card flat class="mx-auto card" color="surface-variant" max-width="340" @mouseenter="showQuantityButtons = true"
    @mouseleave="showQuantityButtons = false">
    <v-img height="250" :src="currentImage" />
    <v-card-action>
      <v-btn v-if="!showQuantityButtons" class="btn" variant="outlined" min-width="180" height="50" @click="addProduct">
        <v-icon class="mr-2">
          <img src="../../public/images/icon-add-to-cart.svg" alt="" />
        </v-icon>
        <span class="btn-text">Add to Cart</span>
      </v-btn>
      <ActionButtons v-if="showQuantityButtons" :quantity="quantity" @add-product="addProduct"
        @decrement-quantity="decrementQuantity" />
    </v-card-action>
    <v-card-text class="card-content">
      <v-card-subtitle class="subtitle">{{ dessert.category }}</v-card-subtitle>
      <v-card-title class="title">{{ dessert.name }}</v-card-title>
      <v-card-title class="price mt-n3">${{ dessert.price.toFixed(2) }}</v-card-title>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.btn {
  border-radius: 45px;
  border: 1px solid hsl(12, 20%, 44%);
  margin-left: 21%;
  margin-top: -8%;
  background-color: white;
}

.img {
  border-radius: 12px;
}

.card {
  background-color: transparent !important;
}

.card-content {
  background-color: transparent;
}

.subtitle {
  color: hsl(12, 20%, 44%);
  font-weight: 400;
}

.title {
  color: hsl(14, 65%, 9%);
  font-weight: 700;
}

.price {
  color: hsl(14, 86%, 42%);
  font-weight: 700;
}

.btn-text {
  color: hsl(14, 65%, 9%);
  text-transform: capitalize;
}
</style>
