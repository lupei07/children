<!--
 * @Author: lu
 * @Date: 2020-08-03 14:35:17
 * @LastEditTime: 2020-08-04 13:18:12
 * @FilePath: \children\src\components\manage\Sales.vue
 * @Description: 出售弹框
-->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row :gutter="24">
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
          <el-form-item label="分类">
            <el-select v-model="form.category" placeholder="商品分类" style="width:100%">
              <el-option
                v-for="(item,index) in category"
                :label="item.title"
                :key="index"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="关联店铺">
            <el-select v-model="form.category" placeholder="店铺分类" style="width:100%">
              <el-option
                v-for="(item,index) in category"
                :label="item.title"
                :key="index"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="收件人">
        <el-input
          v-model="form.address"
          placeholder="如:小鹿 187******** 浙江省杭州市xx区xx街道xxx"
          @keyup.enter.native="handleJx"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="tel" label="手机号" width="120"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="num" label="数量" width="120">
        <template slot-scope="scope">
          <el-input size="small" v-model="scope.row.num"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="message" label="备注" width="120">
        <template slot-scope="scope">
          <el-input size="small" v-model="scope.row.message"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="opertion" label="操作" width="100">
        <template slot-scope="scope">
          <el-popconfirm title="确定删除吗？" @onConfirm="handleDel(scope.$index)">
            <el-button type="text" slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { category } from "@/assets/js/search.js";
export default {
  data() {
    return {
      category,
      form: {
        price: "",
        pf: "",
        address: "",
        category: ""
      },
      tableData: []
    };
  },
  components: {},
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const { model } = this.$refs.form;
          window.console.log(model);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleDel(index) {
      window.console.log(index);
      const { tableData } = this;
      this.tableData = tableData.filter((item, key) => key != index);
    },
    handleJx() {
      let { address } = this.form;
      address = address.replace(",", " ");
      const arr = address.split(" ");
      this.tableData.push({
        name: arr[0],
        tel: arr[1],
        address: arr[2],
        num: 1,
        message: ""
      });
      this.form.address = "";
    }
  },
  computed: {}
};
</script>
<style scoped>
</style>