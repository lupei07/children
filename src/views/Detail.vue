<!--
 * @Author: lu
 * @Date: 2020-08-03 09:25:31
 * @LastEditTime: 2020-08-03 10:52:30
 * @FilePath: \children\src\views\Detail.vue
 * @Description: 
-->

<template>
  <div class="warp">
    <Header></Header>
    <img style="height:70px;margin:10px auto;display:block" src="@/assets/images/9.png" />
    <div class="info">
      <h3 class="price">¥ 45.00</h3>
      <div class="detail">
        夏季潮范旗袍2020女童短袖古风女孩公主裙复古多色名族连衣裙童装
        <br />
        <br />颜色: 扇子狗狗, 绿格子, 红草莓, 招财猫, 泫雅花, 小碎花, 小红花, 粉格子, 小樱桃, 大碎花
        <br />
        <br />尺码: 7码/身高90cm, 9码/身高100cm, 11码/身高110cm, 13码/身高120cm, 15码/身高130cm, 17码/身高140cm, 19码/身高150cm
      </div>
      <img
        src="https://img.alicdn.com/bao/uploaded/i4/1586824901/O1CN01wszI0T1m4hjW3Glkc_!!1586824901.jpg_300x300.jpg"
        alt
      />
      <img src="//xq.350.net/assets/tpl_images/934/thumbnail.jpg" alt />

      <div class>
        <img style="width:100%" src="@/assets/images/11.png" />
        <span
          v-clipboard:copy="'我在闲鱼发布了【迪士尼夏季韩版女童装网纱短袖连衣裙外贸童裙品牌童装】椱ァ製这段描述后，打开闲鱼€PsbRc0T6vJI€后打开闲鱼'"
          v-clipboard:success="handleCopy"
          v-clipboard:error="onError"
          class="anticon_user copy"
          @click.stop
        >复制淘口令</span>
        我在闲鱼发布了【迪士尼夏季韩版女童装网纱短袖连衣裙外贸童裙品牌童装】椱ァ製这段描述后，打开闲鱼€PsbRc0T6vJI€后打开闲鱼
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  data() {
    return {};
  },
  components: { Header, Footer },
  methods: {
    handleCopy() {
      // 复制
      this.$message.success("复制成功");
    },
    onError() {
      // 复制失败
      this.$message.error("复制失败");
    }
  },
  computed: {}
};
</script>
<style scoped lang='less'>
.warp {
  padding-top: 125px;
}
.info {
  padding: 10px;
  font-size: 14px;
  line-height: 20px;
  .price {
    color: #d10202;
    font-size: 18px;
  }
  .detail {
    padding: 10px 0;
  }
  img {
    max-width: 100%;
  }
  .anticon_user {
    display: block;
    width: 144px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: rgb(255, 192, 192);
    border-radius: 17px;
    cursor: move;
    color: #fff;
    margin-bottom: 10px;
  }
}
</style>