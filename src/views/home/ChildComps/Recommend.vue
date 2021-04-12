<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"Recommend",
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scope>
.recommend{
  display: flex;
  text-align: center;
  padding-top: 10px;
  padding-bottom:30px ;
  border-bottom:8px solid #eee ;
  
}
.recommend .item{
  flex: 1;
}
.recommend a{
  color: #4b4343;
}
.recommend img{
  width: 70px;
  height: 70px;
  margin-bottom: 7px;
}
</style>
