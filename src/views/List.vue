<!--
 * @Author: lu
 * @Date: 2020-07-31 17:13:17
 * @LastEditTime: 2020-07-31 17:14:42
 * @FilePath: \children\src\components\Footer.vue
 * @Description: 
--> 
<template>
  <div class="warp">
    <Header></Header>
    <goods-list :type="2"></goods-list>
  </div>
</template>
<script>
import Header from "../components/Header";
import GoodsList from "../components/GoodsList";

export default {
  data() {
    return {};
  },
  components: { Header, GoodsList },
  methods: {},
  computed: {}
};
</script>
<style scoped>
.warp {
  padding-top: 125px;
}
</style>