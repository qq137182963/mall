<template>
  <div class="profile">
    <nav-bar class="navbar">
      <div slot="center" class="center">商城</div>
    </nav-bar>
    <user-info></user-info>
    <list-view :message="['我的消息','积分商城','会员卡']"></list-view>
    <list-view :message="['我的购物车','下载购物APP']" class="special"></list-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import UserInfo from "./ChildComps/UserInfo"
import ListView from "./ChildComps/ListView"
export default {
  name:"Profile",
  components:{
    NavBar,
    UserInfo,
    ListView
  }
}

</script>

<style scoped>
.navbar{
  background-color: var(--color-tint);
}
.center{
  color: #fff;
}
.special{
  border:none !important ;
}
</style>
