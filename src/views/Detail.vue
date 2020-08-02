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
  methods: {},
  computed: {}
};
</script>
<style scoped>
.warp {
  padding-top: 125px;
}
</style>