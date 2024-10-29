<template>
    <v-container >
        <div class="mb-5">
            <h2>Your Cart()</h2>
        </div>
        
        <v-card class="d-flex justify-space-between align-center ">
            
            <v-avatar>
                <img src="../assets/images/image-baklava-thumbnail.jpg" alt="">
            </v-avatar>
            <div class="cart-description flex-column  ">
                <div class="title">Titulo</div>
                <div class="d-flex justify-space-between ">
                    <span class="quantity">1X</span>
                    <span class="price">$7.00</span>
                    <span class="amount">$7.00</span>
                </div>
            </div>
            <div>
                <v-bnt>
                    <v-icon>
                        <img src="../assets/images/icon-remove-item.svg" alt="">
                    </v-icon>
                </v-bnt>
            </div>
        </v-card>
    </v-container>
   
</template>

<script setup>

</script>

<style scoped>

.cart-description{
    width: 40%;
}
.title{
    color: hsl(14, 65%, 9%);
    font-weight: 700;
}

.price{
    color: hsl(12, 20%, 44%);
    font-weight: 400;
}
.amount{

}
</style>