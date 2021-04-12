<template>
  <div class="home">
    <nav-bar class="nav-bar"><div slot="center" class="center">购物街</div></nav-bar>
    <tab-control 
        :titles="['流行','新款','精选']" 
        class="tabControl" 
        @tabClick="tabClick" 
        ref="tabControl1"
        v-show="isFixed"
        ></tab-control>
    <scroll class="content" 
    :probe-type="3" 
    :pull-up-load="true"
    ref="scroll" 
    @scroll="scroll" 
    @pullingUp="loadMore">
        <home-swiper class="home-swiper" :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
        <recommend :recommend="recommend"></recommend>
        <feature-view></feature-view>
        <tab-control 
        :titles="['流行','新款','精选']" 
        @tabClick="tabClick" 
        ref="tabControl2"
        ></tab-control>
        <goods-list :goods="list"></goods-list>
    </scroll> 
    <!-- 在组件上使用原生事件，需要用.native 把事件挂载到组件根目录 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./ChildComps/HomeSwiper"
import Recommend from "./ChildComps/Recommend"
import FeatureView from "./ChildComps/FeatureView"

import Scroll from "components/common/scroll/Scroll"
import NavBar from "components/common/navbar/NavBar";
import TabControl from 'components/content/tabcontrol/TabControl';
import GoodsList from "components/content/goods/GoodsList"
import BackTop from "components/content/backtop/BackTop";

import {getHomeMultidata,getHomeData} from "network/home";
import {debounce} from "common/utils"
export default {
  name:"Home",
  data(){
    return{
      banners:[], //存储轮播图数据
      recommend:[], //存储推荐模块数据
      //存取商品列表数据结构
      goods:{
        'pop':{page:1,list:[],position:-this.tabControlOffsetTop},
        'new':{page:1,list:[],position:-this.tabControlOffsetTop},
        'sell':{page:1,list:[],position:-this.tabControlOffsetTop}
      },
      currentIndex:0, //存储当前商品列表的索引值
      type:"",   //存储当前商品列表的数据类型
      position:0,    //存储当前的滚动位置
      tabControlOffsetTop:0,
      isFixed:false,
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created(){
    this.getHomeMultidata();
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  mounted(){
    //图片加载使用防抖函数
    var refresh=debounce(this.$refs.scroll.refresh,200);
    //事件总监监听图片加载事件
    this.$bus.$on("imageLoad",()=>{
      refresh();
    })
  },
  computed:{
    //判断是否显示backTop组件
    isShowBackTop(){
      return (-this.position.y)>1000
    },
    list(){
      return this.goods[this.type].list;
    },
  },
  methods:{
    //获取轮播图和推荐的数据信息
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
            this.banners=res.data.banner.list;
            this.recommend=res.data.recommend.list;
    });
    },
    //根据不同的类型获取不同的类型数据
    getHomeData(type){
      this.getType(this.currentIndex);
      const page=this.goods[type].page;
      getHomeData(type,page).then(res=>{
        this.goods[type].page+=1;
        this.goods[type].list.push(...res.data.list)
        this.$refs.scroll.finishPullUp();
      })
    },
    //根据子组件传入的索引，来渲染对应的类型数据
    getType(index){
      switch(index){
        case 0:
          this.type="pop";
          break
        case 1:
          this.type="new";
          break
        case 2:
          this.type="sell";
      }
    },
    tabClick(index){
      this.currentIndex=index;
      this.getType(index);
      //每次点击控制栏后，会跳转到原来浏览的位置
      this.$refs.scroll.scrollTo(0,this.goods[this.type].position,0);
      this.$refs.tabControl1.currentIndex=index;
      this.$refs.tabControl2.currentIndex=index;
    },
    //跳转到最顶部
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500);
    },
    //获取滚动位置
    scroll(position){
      this.position=position;
      this.isFixed=(-position.y)> this.tabControlOffsetTop;
      this.goods[this.type].position=position.y;
    },
    //上拉加载更多数据
    loadMore(){
      this.getHomeData(this.type);
    },
    swiperImageLoad(){
      //由于图片可能未加载完成，所以offsetTop的值是不准确的，
      // 所以要监听轮播图图片加载是否完成，加载完成后再使用offsetTop值才更准确
      this.tabControlOffsetTop=this.$refs.tabControl2.$el.offsetTop;
    }
  }
}
</script>

<style scoped>
.nav-bar{
    background-color: var(--color-tint);
}
.center{
  color: #fff;
}

.content{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabControl{
  top:44px;
}

  /* 由于better-scroll的内部机制是改变transfrom中的translate的值来滚动的
  ,所以设置为固定定位的tabControl也会随着滚动，所以会出现闪烁的情况
.Fixed{
  position: fixed;
  top: 44px;
}  */
</style>
