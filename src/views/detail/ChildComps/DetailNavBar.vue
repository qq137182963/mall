<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="nav-bar-left" @click="toBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="nav-bar-center">
        <div 
        v-for="(item,index) in titles" :key="index" 
        class="nav-bar-center-item" 
        @click="detailClick(index)"
        :class="{isActive:currentIndex===index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name:"DetailNavBar",
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  methods:{
    detailClick(index){
      this.currentIndex=index;
      this.$emit("detailClick",index);
    },
    toBack(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.nav-bar-center{
  display: flex;
  font-size: 13px;
}
.nav-bar-center-item{
  flex: 1;
}
.nav-bar-left{
  padding-left:15px ;
  padding-top:7px;
}
.isActive{
  color: var(--color-tint);
}
</style>
