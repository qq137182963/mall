<template>
    <div class="cart-list-item">
        <div class="check-button"><check-button @checkClick="checkClick" :isCheck="product.isCheck"></check-button></div>
        <div class="cart-image">
          <img :src="product.image" alt="">
        </div>
        <div class="cart-text">
          <p>{{product.title}}</p>
          <p>{{product.desc}}</p>
          <div class="price-count">
            <span class="price">￥{{product.price}}</span>
            <span class="count">x{{product.count}}</span>
          </div>
        </div>
    </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton"
export default {
  name:"CartListItem",
  components:{
    CheckButton
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    checkClick(isCheck){
      this.product.isCheck=isCheck;
    }
  }
}
</script>

<style scoped>
.cart-list-item{
  display: flex;
  margin-top:3% ;
  border-bottom: 2px solid #eee;
  padding-bottom: 3%;
}
.check-button{
  flex: 1;
  margin: 0 3px;
  transform: translateY(30%);
}
.cart-image{
  flex: 3;
  
}
.cart-image img{
  height: 100%;
  width: 100%;
  border-radius: 10px 10px;
}
.cart-text{
  width: 60%;
  margin-top:3% ;
  flex: 8;
  padding:0 3%;
}
.cart-text p{
  width:100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cart-text p:nth-child(1){
  font-size: 18px;
  color:rgb(59, 57, 57)
}
.cart-text p:nth-child(2){
  margin:12% 0 15%;
  font-size: 15px;
  color:rgb(170, 170, 170)
}
.price-count{
  position: relative;
  width:100%;
}
.price{
  color:var(--color-tint);
  font-size:20px;
  font-weight: 700;
}
.count{
  position: absolute;
  right: 0;
  font-size:18px;
  color: rgb(90, 90, 90);
}
</style>
