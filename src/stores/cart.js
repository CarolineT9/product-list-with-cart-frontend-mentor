// stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: ('cartDetail', [])
  }),
  getters:{
    // calcular um valor a partir de um estadoo...
    cartItemsCount: (state) =>{
      let count = 0
      state.details.forEach(detail => {
          count += detail.quantity
      })
      return count
    },
    
    totalAmount: (state) => {
      let total = 0
      state.details.forEach(d => {
       total += d.dessert.price * d.quantity
       
    })
    return total

    }
  },
  actions: {
    //função para adicionar o produto ao carrinho de compra
    addProduct(dessert) {
      const detailFound = this.details.find(d => d.dessert.name === dessert.name)
      if (detailFound) {
        detailFound.quantity += 1 // Aqui, aumentamos a quantidade em vez de sair da função
      } else {
        this.details.push({
          dessert,
          quantity: 1
        })
      }
    },
    //função para deletar o produto do carrinho de compras
    deleteProduct(dessertName){
    
      const index = this.details.findIndex(d => d.dessert.name === dessertName)
      this.details.splice(index, 1)
    },
    
    //função que diminui quatidade de produto no carrinho
    decrement(dessertName){
      const detailFound = this.details.find(d => d.dessert.name === dessertName)
      if(detailFound){
        detailFound.quantity -= 1
        if(detailFound.quantity === 0){
          this.deleteProduct(dessertName)
        }
      }
    },
    // action to clear the cart
    clearCart() {
      this.details = [];
    }
  }
})