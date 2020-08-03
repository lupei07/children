<!--
 * @Author: lu
 * @Date: 2020-08-03 09:25:31
 * @LastEditTime: 2020-08-03 13:27:43
 * @FilePath: \children\src\components\Header.vue
 * @Description: 
-->

<template>
  <div class="top">
    <div class="con">
      <div class="shop-name">小鹿儿绵绵</div>

      <div class="nav">
        <router-link :class="$route.fullPath=='/'?'active posR' :''" to="/">首页</router-link>
        <router-link :class="$route.fullPath=='/list'?'active posR' :''" to="/list">全部</router-link>
        <router-link :class="$route.fullPath=='/list?type=1'?'active posR' :''" to="/list?type=1">女童</router-link>
        <router-link :class="$route.fullPath=='/list?type=2'?'active posR' :''" to="/list?type=2">男童</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {}
};
</script>
<style scoped lang='less'>
.top {
  max-width: 750px;
  top: 0;
  left: 0;
  width: 100%;
  height: 125px;
  position: fixed;
  background: url("~@/assets/images/header.jpg") top center no-repeat;
  background-size: 100% auto;
  z-index: 999;
  .con {
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
}
.shop-name {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
  padding: 20px 20px 0;
}
.nav {
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.nav a {
  color: #fff;
  padding: 0 10px;
}
.nav a.active::after {
  content: "";
  left: 10px;
  bottom: -8px;
  width: calc(100% - 20px);
  height: 4px;
  border-radius: 2px;
  background: #fff;
  position: absolute;
}
</style>