<!--
 * @Author: lu
 * @Date: 2020-08-03 10:58:57
 * @LastEditTime: 2020-08-04 11:10:48
 * @FilePath: \children\src\views\manage\LpManage.vue
 * @Description: 
-->
<template>
  <div>
    <el-container>
      <el-header>
        <div class="nav">
          <router-link :class="$route.fullPath=='/lp-manage'?'active':''" to="/lp-manage">商品列表</router-link>
          <router-link :class="$route.fullPath=='/goods-sales'?'active':''" to="/goods-sales">已售商品</router-link>
          <router-link :class="$route.fullPath=='/shop-list'?'active':''" to="/shop-list">关联店铺</router-link>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
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
.el-header {
  width: 100%;
  margin: 0 auto;
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #e6e6e6;
  .nav {
    display: flex;
  }
  .nav a {
    padding: 0 25px;
    color: #333;
  }
  .nav a.active {
    background: #09aaff;
    color: #fff;
  }
}

.el-main {
  // padding: 0;
}
</style>