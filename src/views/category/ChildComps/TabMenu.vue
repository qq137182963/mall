<template>
  <scroll class="content" ref="menuscroll">
    <div class="tab-menu">
      <div v-for="(item,index) in categories" 
      :key="index" 
      @click="tabMenuClick(index)"
      :class="{isActive:currentIndex===index}">{{item.title}}</div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
export default {
  name:"TabMenu",
  data(){
    return{
      currentIndex:0
    }
  },
  components:{
    Scroll
  },
  props:{
    categories:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    tabMenuClick(index){
      this.currentIndex=index;
      this.$emit("tabMenuClick",index);
      this.$refs.menuscroll.refresh()
    }
  }
}
</script>

<style scoped>
.content{
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  width:28%;
  background-color: #f6f6f6;
}
.tab-menu{
  width:100%;
}
.tab-menu div{
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
  color: rgb(114, 97, 97);
}
.isActive{
  border-left: 3px solid var(--color-tint);
  color: var(--color-tint) !important;
  font-weight:700 ;
  background-color: #fff;
}
</style>
