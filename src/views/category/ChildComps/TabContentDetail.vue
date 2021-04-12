<template>
  <div class="tab-content-detail">
    <goods-list-item :list="item" 
    v-for="(item,index) in goodslist" :key="index" 
    class="goods-list-item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem"
export default {
  name:"TabContentDetail",
  components:{
    GoodsListItem
  },
  props:{
    goodslist:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>
.tab-content-detail{
  display: flex;
  flex-wrap: wrap;
}
.goods-list-item{
  width: 40%;
  margin: 2px;
}
</style>
