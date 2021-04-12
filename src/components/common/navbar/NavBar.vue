<template>
  <div class="navBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:"NavBar",

}
</script>

<style scoped>
.navBar{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0px 1px 1px rgba(100,100,100,.1);
}
.left{
  width:60px;
}
.center{
  flex: 1;
  text-align: center;
}
.right{
  width:60px;
}
</style>
