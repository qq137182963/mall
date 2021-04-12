<template>
  <div class="list-view">
    <div class="list-view-item" v-for="(item,index) in message" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name:"ListView",
  props:{
    message:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.list-view{
  border-bottom:10px solid #eee;
}
.list-view-item{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  padding-left:30px;
}
</style>
