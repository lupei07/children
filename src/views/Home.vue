<!--
 * @Author: lu
 * @Date: 2020-07-31 14:26:35
 * @LastEditTime: 2020-08-03 13:26:39
 * @FilePath: \children\src\views\Home.vue
 * @Description: 
--> 
<template>
  <div class="warp">
    <div class="banner posR">
      <Header></Header>
      <img width="100%" src="@/assets/images/banner.jpg" />
    </div>

    <div class="bg">
      <img width="50%" src="@/assets/images/1.png" />
    </div>

    <div class="title-con">
      <h2>掌柜推荐</h2>
      <p class="content">推荐商品,都是经过商品验货,可以放心购买,也可以咨询掌柜看验货视频!</p>
    </div>

    <goods-list :type="1"></goods-list>

    <div class="bg">
      <img width="80%" src="@/assets/images/3.png" />
    </div>

    <div class="title-con">
      <h2>热卖热销专区</h2>
    </div>

    <goods-list-hot></goods-list-hot>
    <Footer></Footer>
  </div>
</template>

<script>
import GoodsList from "../components/GoodsList";
import GoodsListHot from "../components/GoodsListHot";

import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: { Header, GoodsList, GoodsListHot, Footer }
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
.bg {
  text-align: center;
}
.title-con {
  text-align: center;
  padding: 10px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.title-con .content {
  padding: 10px 50px;
  color: #ccc;
}
</style>
