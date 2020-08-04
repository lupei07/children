<!--
 * @Author: lu
 * @Date: 2020-08-04 11:24:43
 * @LastEditTime: 2020-08-04 13:57:08
 * @FilePath: \children\src\components\manage\AddShop.vue
 * @Description: 新建分销店铺
-->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="店铺来源">
        <el-select v-model="form.express" placeholder="店铺来源" style="width:100%">
          <el-option
            v-for="(item,index) in goodsFrom"
            :label="item.title"
            :key="index"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="店铺链接">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { goodsFrom } from "@/assets/js/search.js";
export default {
  data() {
    return {
      goodsFrom,
      form: { name: "", goodsFrom: "", url: "" }
    };
  },
  components: {},
  methods: {},
  computed: {}
};
</script>
<style scoped>
</style>