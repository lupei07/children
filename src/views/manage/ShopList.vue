<!--
 * @Author: lu
 * @Date: 2020-08-04 11:09:33
 * @LastEditTime: 2020-08-04 13:58:52
 * @FilePath: \children\src\views\manage\ShopList.vue
 * @Description: 
-->
<template>
  <div>
    <div class="oper">
      <el-button type="primary" size="small" plain @click="visible=true">新建店铺</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="店铺ID" prop="id" width="100"></el-table-column>
      <el-table-column label="店铺名称" prop="shop_name"></el-table-column>
      <el-table-column label="店铺地址" prop="url"></el-table-column>
      <el-table-column label="总销量" prop="num" width="180"></el-table-column>
      <el-table-column label="来源" prop="from" width="180"></el-table-column>
      <el-table-column label="启用" prop="address" width="180">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.enable"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="handleEnable(scope.row.id)"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作" width="100">
        <template slot-scope="scope">
          <el-popconfirm title="确定删除吗？" @onConfirm="handleDel(scope.row.id)">
            <el-button type="text" slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新建 -->
    <el-dialog title="发货" :visible.sync="visible" width="400px">
      <add-shop v-if="visible" ref="shop"></add-shop>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit(1)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import AddShop from "../../components/manage/AddShop";
export default {
  data() {
    return {
      visible: false,
      tableData: [
        {
          shop_name: "宁波市镇海米途纺织品有限公司",
          url: "http://m.1688.com/offer/619353116781.html",
          enable: true
        }
      ]
    };
  },
  components: { AddShop },
  methods: {
    handleEnable() {},
    handleDel() {}
  },
  computed: {}
};
</script>
<style scoped>
</style>