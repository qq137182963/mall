<template>
  <div class="tab-control">
    <div class="tab-control-item" 
    :class="{active:currentIndex===index}" 
    v-for="(item,index) in titles" :key="index"
    @click="isSelect(index,$event)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    isSelect(index,event){
      this.currentIndex=index;
      //向父组件发送点击事件
      this.$emit("tabClick",index,event);
    }
  }
}
</script>

<style scoped>
.tab-control{
  height: 40px;
  display: flex;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
  font-size:15px;
  position: relative;
  z-index: 3;
}
.tab-control-item span{
  padding: 5px;
}
.tab-control-item{
  flex: 1;
}
.active{
  color:var(--color-tint);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>
