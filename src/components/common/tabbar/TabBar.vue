<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TabBar"
}
</script>

<style scoped>
.tabBar{
  display: flex;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, .1);
  background-color: #f6f6f6;
}

</style>
