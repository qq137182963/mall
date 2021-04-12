<template>
  <div class="Cart">
    <nav-bar class="cart-nav">
      <div slot="center" >购物车({{this.length}})</div>
    </nav-bar>
    <scroll class="content" 
    ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-buttom ref="CartButtom"></cart-buttom>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import CartList from "./CartComps/CartList"
import CartButtom from "./CartComps/CartButtom"
export default {
  name:"Cart",
  data(){
    return{
      isCheck:true
    }
  },
  components:{
    NavBar,
    CartList,
    CartButtom,
    Scroll
  },
  computed:{
    length(){
      return this.$store.state.CartList.length;
    }
  },
  activated(){
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
.cart-nav{
  background-color: var(--color-tint);
  color:#fff;
}
.content{
  overflow: hidden;
  position: absolute;
  top:44px;
  left: 0;
  right: 0;
  bottom: 93px;
}
</style>
