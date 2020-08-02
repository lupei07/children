<!--
 * @Author: lu
 * @Date: 2020-07-31 17:13:17
 * @LastEditTime: 2020-07-31 17:14:42
 * @FilePath: \children\src\components\Footer.vue
 * @Description: 
--> 
<template>
  <div class="top">
    <div class="con">
      <div class="shop-name">小鹿儿绵绵</div>

      <div class="nav">
        <router-link class="first posR" to="/">首页</router-link>
        <router-link to="/">全部</router-link>
        <router-link to="/">女童</router-link>
        <router-link to="/">男童</router-link>
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
.nav a.first::after {
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