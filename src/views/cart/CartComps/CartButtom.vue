<template>
    <div class="cart-buttom">
      <check-button class="check-button" @checkClick="selectAll" :isCheck="isSelectAll"></check-button>
      <span class="selectAll">全选</span>
      <span class="total">合计:￥{{total}}</span>
      <div class="toComputed" @click="toComputed">去计算({{length}})</div>
    </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton"
export default {
  name:"CartButtom",
  components: { 
    CheckButton 
  },
  computed:{
    isSelectAll:{
      get(){
        return !(this.CartList.filter(item=>!item.isCheck).length)
      },
      set(val){
        return val;
      }
    },
    length(){
      return this.$store.state.CartList.filter(item=>item.isCheck).length;
    },
    CartList(){
      return this.$store.state.CartList;
    },
    total(){
      return this.CartList.filter(item=>item.isCheck).reduce((perv,item)=>{
        return perv+item.price*item.count
      },0)
    }
  },
  methods:{
    selectAll(){
      if(this.CartList.find(item=>!item.isCheck)){
        this.CartList.forEach(item=>item.isCheck=true);
        this.isSelectAll=true;
      }else{
        this.CartList.forEach(item=>item.isCheck=false);
        this.isSelectAll=false;
      }
    },
    toComputed(){
      if(this.CartList.every(item=>!item.isCheck)){
        this.$toast.show("没有选中的商品",1500)
      }else{
        this.$toast.show(`支付成功,总金额为:${this.total}元`,1500)
      }
      
    }
  }
}
</script>

<style scoped>
.cart-buttom{
  height: 44px;
  width: 100%;
  background-color: rgb(238, 238, 238);
  position: fixed;
  bottom: 49px;
  display: flex;
  align-items: center;
}
.check-button{
  margin-left:5px;
}
.selectAll{
  flex: 1;
  margin-left:5px;
  color: rgb(97, 92, 92);
}
.total{
  flex: 3;
  color: rgb(97, 92, 92);
}
.toComputed{
  flex: 2;
  text-align: center;
  width: 100px;
  height: 44px;
  line-height: 44px;
  color:#fff;
  background-color: rgb(255, 24, 0);
}
</style>
