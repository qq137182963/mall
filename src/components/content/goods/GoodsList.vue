<template>
  <div id="goods-list">
    <div class="goods-list">
      <goods-list-item v-for="(item,index) in goods" :key="index" :list="item"></goods-list-item>
    </div>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name:"GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  /* flex布局中，宽度不够换行显示 */
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
