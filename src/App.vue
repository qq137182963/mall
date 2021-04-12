<template>
  <div id="app">
    <!-- exclude根据组件的name值来寻找，所以要设置组件的name值 -->
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/tabbar/MainTabBar";
export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style scope>
@import "assets/css/base.css";

</style>
