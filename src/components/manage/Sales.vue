<!--
 * @Author: lu
 * @Date: 2020-08-03 14:35:17
 * @LastEditTime: 2020-08-03 15:57:57
 * @FilePath: \children\src\components\manage\Sales.vue
 * @Description: 出售弹框
-->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="售价">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="批发价">
        <el-input v-model="form.pf"></el-input>
      </el-form-item>
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
export default {
  data() {
    return {
      form: {
        price: "",
        pf: "",
        address: ""
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
    },
    handleJx() {
      let { address } = this.form;
      address = address.replace(",", " ");
      const arr = address.split(" ");
      this.tableData.push({
        name: arr[0],
        tel: arr[1],
        address: arr[2],
        num: 1
      });
      this.form.address = "";
    }
  },
  computed: {}
};
</script>
<style scoped>
</style>