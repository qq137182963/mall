<template>
  <div class="cart-list">
    <div v-for="(item,index) in product" :key="index">
      <cart-list-item :product="item"></cart-list-item>
    </div>
  </div>
</template>

<script>
import CartListItem from "./CartListItem"
export default {
  name:"CartList",
  components: { 
    CartListItem 
  },
  data(){
    return{
      product:[]
    }
  },
  created(){
    this.product=this.$store.state.CartList;
  }

}
</script>

<style>
.cart-list{
  position: relative;
  margin-top: 20px;
}
</style>
