<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>

<script>
//对于better-scroll的使用，出现的许多问题都是content内容计算不正确的问题，比如图片还没请求过来，better-scroll就已经初始化完成了，
import BScroll from "better-scroll"
export default {
  name:"Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    this.scroll=new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      click:true,
      pullUpLoad:this.pullUpLoad
    })
    this.scroll.on("scroll",(position)=>{
      this.$emit("scroll",position);
    })
    this.scroll.on("pullingUp",()=>{
      this.$emit("pullingUp");
    })
  },
  methods:{
    scrollTo(x,y,delay){
      this.scroll&&this.scroll.scrollTo&&this.scroll.scrollTo(x,y,delay);
    },
    refresh(){
      this.scroll&&this.scroll.refresh&&this.scroll.refresh();
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp&&this.scroll.finishPullUp();
    }
  }
}
</script>

<style>
</style>

