<script setup>
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
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
        <v-card class="mt-5 mr-2">
          <ShoppingCart />
        </v-card>
      </v-container>
      </aside>
      
    </v-col>
  </v-row>
</template>

<style scoped>
.card {
  background-color: transparent;
}
</style>
