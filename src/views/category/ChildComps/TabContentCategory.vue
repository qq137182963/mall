<template>
  <div class="tab-content-category">
      <div class="tab-content-item" v-for="(item,index) in subCategories" :key="index">
        <a :href="item.link">
        <img :src="item.image" alt="">
        </a>
        <div class="title">{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name:"TabContentCategory",
  props:{
    subCategories:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.tab-content-category{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content:space-between;
  
}
.tab-content-item{
  width: 25%;
  padding: 10px;
}
.tab-content-item a{
  width:100%;
}
.tab-content-item img{
  width: 100%;
}
.tab-content-item .title{
  text-align: center;
  font-size: 12px;
  color: rgb(129, 145, 160);
  margin-top:10px;
}
</style>
