<template>
  <div class="check-button" :class="{isActive:isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="" @click="checkClick" >
  </div>
</template>

<script>
export default {
  name:"CheckButton",
  data(){
    return{
      isSelfCheck:true
    }
  },
  props:{
     isCheck:{
       type:Boolean,
       default:true
     }
  },
  created(){
    this.isSelfCheck=this.isCheck;
  },
  methods:{
    checkClick(){
      this.isSelfCheck=!this.isSelfCheck;
      this.$emit("checkClick",this.isSelfCheck)
    }
  }
}
</script>

<style scoped>
.check-button{
  width: 22px;
  height: 22px;
  border-radius: 50% 50%;
  border:1px solid #7a7373 ;
  text-align: center;
  
}
.isActive{
  background-color: red;
  border:1px solid red ;
}
.check-button img{
  width:100%;
  height: 100%;
  border-radius: 50% 50%;
}
</style>
