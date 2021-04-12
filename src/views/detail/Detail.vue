<template>
  <div class="detail">
    <detail-nav-bar @detailClick="detailClick" ref="nav"></detail-nav-bar>
    <scroll
    class="content" 
    :probe-type="3" 
    :pull-up-load="true"
    ref="scroll" 
    @scroll="scroll">
    <detail-swiper :top-images="topImages" @SwiperLoad="SwiperLoad"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-image-info :detailInfo="detailInfo" @detailLoadImage="detailLoadImage"></detail-image-info>
    <detail-goods-param :goodsParams="goodsParams" ref="DetailGoodsParam"></detail-goods-param>
    <detail-comment :rate="rate" ref="DetailComment"></detail-comment>
    <detail-recommend :recommendData="recommendData" ref="DetailRecommend"></detail-recommend>
    </scroll>
    <detail-tab-bar @addCart="addCart"></detail-tab-bar>
    <back-top @click.native="backClick" v-show="isShowBack"></back-top>
  </div>
 
</template>

<script>
import DetailNavBar from "./ChildComps/DetailNavBar"
import DetailSwiper from "./ChildComps/DetailSwiper"
import DetailBaseInfo from './ChildComps/DetailBaseInfo';
import DetailShopInfo from './ChildComps/DetailShopInfo';
import DetailImageInfo from "./ChildComps/DetailImageInfo"
import DetailGoodsParam from './ChildComps/DetailGoodsParam';
import DetailComment from './ChildComps/DetailComment';
import DetailRecommend from './ChildComps/DetailRecommend';
import DetailTabBar from "./ChildComps/DetailTabBar"

import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/content/backtop/BackTop"

import {debounce} from "common/utils"
import {getDetailData,Goods,Shop,GoodsParams,getRecommend} from "network/detail";


export default {
  name:"Detail",
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      goodsParams:{},
      rate:{},
      recommendData:{},
      scrollTopY:[],
      getThemeTopY:null,
      currentIndex:0,
      isShowBack:false,
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailGoodsParam,
    DetailComment,
    DetailRecommend,
    BackTop,
    DetailTabBar,
    Scroll
  },
  created(){
    this.iid=this.$route.params.iid;
    getDetailData(this.iid).then(res=>{
      const data=res.result;
      //获取商品基本信息
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      //获取轮播图信息
      this.topImages=data.itemInfo.topImages;
      //获取商店信息
      this.shop=new Shop(data.shopInfo);
      //获取商品信息
      this.detailInfo=data.detailInfo;
      //获取商品参数信息
      this.goodsParams=new GoodsParams(data.itemParams.info,data.itemParams.rule);
      //获取评论信息
      this.rate=data.rate;
    })
    getRecommend().then(res=>{
      this.recommendData=res.data
    })
    this.getThemeTopY=debounce(()=>{
        this.scrollTopY=[]
        this.scrollTopY.push(44);
        this.scrollTopY.push(this.$refs.DetailGoodsParam.$el.offsetTop+44);
        this.scrollTopY.push(this.$refs.DetailComment.$el.offsetTop+44);
        this.scrollTopY.push(this.$refs.DetailRecommend.$el.offsetTop+44);
        this.scrollTopY.push(Number.MAX_VALUE);
    },100)
    
  },
   mounted(){
     //图片加载使用防抖函数
    var refresh=debounce(this.$refs.scroll.refresh,200);
    //事件总监监听图片加载事件
    this.$bus.$on("detailImageLoad",()=>{
      refresh();
    }); 
  },
  methods:{
    SwiperLoad(){
      this.$refs.scroll.refresh();
    },
    detailLoadImage(){
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    scroll(position){
      this.position=-position.y
      let length=this.scrollTopY.length;
      for(let i=0;i<length-1;i++) {
        if(this.currentIndex!==i&&this.position>=this.scrollTopY[i]&&this.position<this.scrollTopY[i+1]){
          this.currentIndex=i;
          this.$refs.nav.currentIndex=this.currentIndex;
        }
      }
      this.isShowBack=(this.position)>1000
    },
    detailClick(index){
      this.currentIndex=index;
      this.$refs.scroll.scrollTo(0, -this.scrollTopY[index], 200)
    },
    backClick(){
      this.$refs.scroll.scrollTo(0, -44, 200);
    },
    addCart(){
      const product={};
      product.image=this.topImages[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.price=this.goods.realPrice;
      product.iid=this.iid;
      this.$store.dispatch("addCart",product);
    }
  }
}
</script>

<style scoped>
.detail{
  height: 100vh;
  position: relative;
  width: 100%;
  z-index: 9;
  background-color: #fff;
}
.content{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
