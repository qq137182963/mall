<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="" @load="SwiperLoad">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/content/swiper/Swiper.js"
export default {
  name:"DetailSwiper",
  data(){
    return{
      isLoad:false
      }
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    SwiperLoad(){
       if(!this.isLoad){
          this.$emit("SwiperLoad");
          this.isLoad=true;
        }
    }
  }
}
</script>

<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
  margin-top:44px;
}
</style>
