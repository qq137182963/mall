<template>
  <div class="tabBarItem" @click="tabBarItemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"pink"
    }
  },
  computed:{
    isActive:{
      get(){
        return this.$route.path.indexOf(this.path)!==-1;
      },
      set(){}
    },
    isActiveColor(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    tabBarItemClick(){
      this.$router.push(this.path);
    }
  }
}
</script>

<style scoped>
.tabBarItem{
  flex: 1;
  font-size: 12px;
}
.tabBarItem img{
  margin-top: 3px;
  width: 24px;
  padding-bottom:3px ;
}
</style>
