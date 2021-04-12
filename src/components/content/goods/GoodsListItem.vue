<template>
  <div id="goods-list-item" @click="goodsClick">
    <div class="goods-list-item">
      <img v-lazy="showImage" alt="" @load="imageLoad">
      <p>{{list.title}}</p>
      <div class="span">
      <span class="price">{{list.price}}</span>
      <span class="cfav">{{list.cfav}}</span>
      </div>
      </div>
  </div>
</template>

<script>
export default {  
  name:"GoodsListItem",
  data(){
    return{
      iid:null
    }
  },
  props:{
    list:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    showImage(){
      if(this.$route.path.indexOf("/detail")!==-1){
        return this.list.image
      }else if(this.$route.path.indexOf("/category")!==-1){
        return this.list.img
      }else{
        try{
          return this.list.show.img
        }
        catch{
          return ""
        }
      }
    }
  },
  created(){
    this.iid=this.list.iid
  },
  methods:{
    imageLoad(){
      //事件总线发送图片加载事件
      if(this.$route.path.indexOf("/home")!==-1){
          this.$bus.$emit("imageLoad")
      }else if(this.$route.path.indexOf("/detail")!==-1){
          this.$bus.$emit("detailImageLoad")
      }else if(this.$route.path.indexOf("/category")!==-1){
          this.$bus.$emit("categoryImageLoad")
      }
      
    },
    goodsClick(){
      this.$router.push(`detail/${this.iid}`)
    }
  }
}
</script>

<style scoped>
#goods-list-item{
  width: 48%;
}
.goods-list-item{
  width: 100%;
  height: 300px;
}
.goods-list-item img{
  width: 100%;
  height: 250px;
  border-radius: 10px;
}
.goods-list-item p{
  margin-top:5px ;
  font-size:14px;
  width:100%;
  /* 文字不换行，超出部分省略号显示 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.span{
  margin-top: 5px;
  text-align: center;
  font-size:13px;
}
.span span{
  width: 48%;
}
.price{
  margin-right:15px;
  color:var(--color-tint);
}
.cfav{
  position: relative;
  margin-left:10px;
}
.cfav::before{
  content: '';
  position: absolute;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
