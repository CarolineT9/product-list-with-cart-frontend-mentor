<template>
  <v-card flat class="mx-auto card" color="surface-variant" max-width="340">
    <v-img height="250" :src="currentImage" />
    <v-card-action>
      <v-btn  class="btn" variant="outlined" min-width="180" height="50">
        <v-icon class="mr-2"><img src="/public/images/icon-add-to-cart.svg" alt=""></v-icon> <span class="btn-text">Add to Cart</span>
      </v-btn>
    </v-card-action>
    <v-card-text class="card-content">
      <v-card-subtitle class="subtitle">{{ dessert.name }}</v-card-subtitle>
      <v-card-title class="title">{{ dessert.name }}</v-card-title>
      <v-card-title class="price mt-n3">${{ dessert.price.toFixed(2) }}</v-card-title>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

// Define o prop como um objeto único
const props = defineProps({
  dessert: {
    type: Object,
    required: true
  }
});

// Computed para a imagem com base no tamanho da tela
const currentImage = computed(() => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    return props.dessert.image.mobile;
  } else if (window.matchMedia("(max-width: 1339px)").matches) {
    return props.dessert.image.tablet;
  } else {
    return props.dessert.image.desktop;
  }
});

// Atualiza a imagem ao redimensionar a janela
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
</script>

<style scoped>
.btn {
  border-radius: 45px;
  border: 1px solid  hsl(12, 20%, 44%);
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

.btn-text{
  color:hsl(14, 65%, 9%);
  text-transform: capitalize;
}
</style>