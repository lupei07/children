<!--
 * @Author: lu
 * @Date: 2020-08-03 16:42:26
 * @LastEditTime: 2020-08-03 18:02:02
 * @FilePath: \children\src\components\manage\AddGoods.vue
 * @Description: 新建商品
-->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="售价">
            <el-input v-model="form.price"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="批发价">
            <el-input v-model="form.pf"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="关联店铺">
            <el-select v-model="form.shop" multiple placeholder="请选择" style="width:100%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <Ueditor></Ueditor>
  </div>
</template>
<script>
import Ueditor from "../Ueditor";
export default {
  data() {
    return {
      form: { title: "", price: "", pf: "", shop: [] },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  components: { Ueditor },
  methods: {},
  computed: {}
};
</script>
<style scoped>
</style>