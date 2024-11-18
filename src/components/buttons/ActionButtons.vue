<script setup>
const props = defineProps({
  quantity: {
    type: Number,
    required: true
  }
});


const emit = defineEmits(["add-product", "decrement-quantity"]);
</script>
<template>
  <v-btn class="btn-action" variant="outlined" min-width="180" height="50">
    <v-row >
      <v-col cols="4">
        <v-btn size="x-small" flat class="qnty-btn" @click="($event) => $emit('decrement-quantity')">
          <img src="../../../public/images/icon-decrement-quantity.svg" alt="" />
        </v-btn>
      </v-col>
      <v-col cols="4" class=" d-flex justify-center align-center" >
        <p class="ml-3">{{props.quantity}}</p>
      </v-col> 
      <v-col cols="4">
        <v-btn size="x-small" flat class="qnty-btn " @click="($event) => $emit('add-product')">
          <img src="../../../public/images/icon-increment-quantity.svg" alt="" />
        </v-btn>
      </v-col>
    </v-row>


  </v-btn>
</template>

<style scoped>
.btn-action {

  border: none;
  display: flex;
  justify-content: space-between;
  border-radius: 45px;
  margin-left: 21%;
  margin-top: -8%;
  background-color: hsl(14, 86%, 42%);
}


.qnty-btn {
  border: 1.5px solid white;
  background-color: hsl(14, 86%, 42%);
  border-radius: 50px;
  height: 35px !important;


}
</style>