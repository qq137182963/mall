<template>
  <div class="Category">
      <nav-bar class="nav-bar">
        <div slot="center" class="center">商品分类</div>
      </nav-bar>
      <div class="cateContent">
        <tab-menu :categories="categories" @tabMenuClick="tabMenuClick"></tab-menu>
        <scroll class="tab-content" ref="tabScroll">
          <div>
            <tab-content-category :subCategories="subCategories"></tab-content-category>
            <tab-control :titles="['综合','新品','销量']" @tabClick="tabClick"></tab-control>
            <tab-content-detail :goodslist="goodslist[type]"></tab-content-detail>
          </div>
        </scroll>
      </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import TabControl from 'components/content/tabcontrol/TabControl'

import TabMenu from "./ChildComps/TabMenu"
import TabContentCategory from './ChildComps/TabContentCategory'
import TabContentDetail from "./ChildComps/TabContentDetail"

import {getCategory,getSubcategory,getCategoryDetail} from "network/category"


export default {
  name:"Category",
  data(){
    return{
      categories:[],
      subCategories:[],
      currentIndex:0,
      type:"pop",
      goodslist:{
        "pop":[],
        "sell":[],
        "new":[]
      }
    }
  },
  components:{
    NavBar,
    TabMenu,
    TabContentCategory,
    TabControl,
    Scroll,
    TabContentDetail
  },
  created(){
    this.getCategory();
  },
  methods:{
    getCategory(){
      getCategory().then(res=>{
      // console.log(res);
      this.categories=res.data.category.list;
      this.getSubcategory(0);
    })
    },
    getSubcategory(index){
      const maitKey=this.categories[index].maitKey
      getSubcategory(maitKey).then(res=>{
        // console.log(res);
        this.subCategories=res.data.list;
        // console.log(this.subCategories);
        this.getCategoryDetail("pop");
        this.getCategoryDetail("sell");
        this.getCategoryDetail("new");
        this.$bus.$on("categoryImageLoad",()=>{
          this.$refs.tabScroll.refresh()
        })
      })
    },
    tabMenuClick(index){
      this.currentIndex=index;
      this.getSubcategory(index);
      this.$refs.tabScroll.scrollTo(0,0,0);
    },
    getCategoryDetail(type){
      const miniWallkey=this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey,type).then(res=>{
        this.goodslist[type]=res;
        this.$refs.tabScroll.refresh();
      })
    },
    getTypeContent(index){
      switch(index){
        case 0:
          this.type="pop"
          break;
        case 1:
          this.type="sell"
          break;
        case 2:
          this.type="new"
          break;
      }
    },
    tabClick(index){
      this.getTypeContent(index);
      // this.getTypeContent(index);
      this.getCategoryDetail(this.type);
      
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
  font-size: 17px;
  font-weight: 600;
}
.tab-content{
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 49px;
  left: 28%;
  width:72%;
  overflow: hidden;
}
</style>
