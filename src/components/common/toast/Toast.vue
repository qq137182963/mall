<template>
  <div class="toast" v-show="isShow">
    <div class="toastText">{{message}}</div>
  </div>
</template>

<script>
export default {
  name:"Toast",
  data(){
    return{
      isShow:false,
      message:""
    }
  },
  methods:{
    show(message,duration){
      this.message=message;
      this.isShow=true;
      setTimeout(()=>{
        this.message="";
        this.isShow=false;
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  height: 30px;
  background-color: rgba(0, 0, 0, .8);
  border-radius: 30px;
  padding:0 10px;
  z-index: 999;
}
.toastText{
  text-align: center;
  color: #fff;
  width:100%;
  line-height: 30px;
  
  font-size: 13px;
}
</style>
