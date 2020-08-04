<!--
 * @Author: lu
 * @Date: 2020-08-04 10:51:43
 * @LastEditTime: 2020-08-04 10:53:45
 * @FilePath: \children\src\components\manage\DeliverGoods.vue
 * @Description: 发货
-->
<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="快递公司">
      <el-select v-model="form.express" placeholder="快递公司" style="width:100%">
        <el-option
          v-for="(item,index) in express"
          :label="item.title"
          :key="index"
          :value="item.id"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="快递单号">
      <el-input v-model="form.price"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
import { express } from "@/assets/js/search.js";
export default {
  data() {
    return {
      express,
      form: { express: "" }
    };
  },
  components: {},
  methods: {},
  computed: {}
};
</script>
<style scoped>
</style>