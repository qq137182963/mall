<template>
  <div class="user-info">
    <div class="login">
      <div class="acvtar"></div>
      <div class="center">
        <div>登录/注册</div>
        <span>暂无绑定手机号</span>
      </div>
      <div class="right">></div>
    </div>
    <div class="assets">
      <div class="money">
        <div>
          <span class="active">0.00</span>
          <span class="infor">元</span>
        </div>
        <span class="infor">我的余额</span>
      </div>
      <div class="discount">
        <div>
          <span class="active">0</span>
          <span class="infor">个</span>
        </div>
        <span class="infor">我的优惠</span>
      </div>
      <div class="grade">
        <div>
          <span class="active">0</span>
          <span class="infor">分</span>
        </div>
        <span class="infor">我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"UserInfo"
}
</script>

<style scoped>
.login{
  display: flex;
  background-color: var(--color-tint);
  color: #fff;
  height: 80px;
  align-items: center;
}
.acvtar{
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50% 50%;
  background-color: #fff;
  margin-left: 10px;
}
.center{
  flex: 7;
  margin-left: 10px;
}
.center span{
  font-size: 13px;
  margin-left: 10px;
}
.right{
  flex: 1;
}
.user-info{
  margin-top:44px;
}
.assets{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 85px;
  border-bottom: 10px solid #eee;
}
.active{
  color: rgb(255, 95, 62);
  font-size: 20px;
  font-weight: 700;
}
.infor{
  font-size: 13px;
  color: rgb(70, 64, 64);
}
</style>
