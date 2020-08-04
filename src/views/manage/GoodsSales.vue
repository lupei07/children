<!--
 * @Author: lu
 * @Date: 2020-08-03 13:38:39
 * @LastEditTime: 2020-08-04 13:14:02
 * @FilePath: \children\src\views\manage\GoodsSales.vue
 * @Description: 
-->
<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="时间">
        <el-date-picker v-model="formInline.month" type="month" placeholder="选择月"></el-date-picker>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="formInline.category" placeholder="商品分类">
          <el-option
            v-for="(item,index) in category"
            :label="item.title"
            :key="index"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="formInline.title" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="收件人">
        <el-input v-model="formInline.title" placeholder="收件人"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="formInline.title" placeholder="电话"></el-input>
      </el-form-item>
      <el-form-item label="订单">
        <el-select v-model="formInline.orderType" placeholder="商品分类">
          <el-option
            v-for="(item,index) in orderType"
            :label="item.title"
            :key="index"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.orderType" placeholder="状态">
          <el-option
            v-for="(item,index) in salesStatus"
            :label="item.title"
            :key="index"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <div class="oper">
      <el-button type="primary" size="small" plain @click="handleOut">导出</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="pic" label="商品" width="100">
        <template slot-scope="scope">
          <img width="70px" :src="scope.row.pic" />
        </template>
      </el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="订单来源" prop="num" width="100"></el-table-column>
      <el-table-column label="商品数量" prop="num" width="100"></el-table-column>
      <el-table-column label="售价" prop="price" width="100"></el-table-column>
      <el-table-column label="批发价" prop="pf" width="100"></el-table-column>
      <el-table-column label="收件人" prop="name"></el-table-column>
      <el-table-column label="电话" prop="tel"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
      <el-table-column label="快递" prop="address">
        <template slot-scope="scope">
          <p>{{scope.row.express}}</p>
          <p>{{scope.row.express_sn}}</p>
        </template>
      </el-table-column>
      <el-table-column label="备注" prop="message" width="180"></el-table-column>
      <el-table-column label="状态" prop="message" width="180"></el-table-column>
      <el-table-column prop="operation" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click.native.prevent="visible = true" type="text" size="small">发货</el-button>
          <el-button @click.native.prevent="handleBz(scope.row)" type="text" size="small">备注</el-button>
          <el-popconfirm title="确定退款吗？" @onConfirm="handleOff(scope.row.id)">
            <el-button type="text" slot="reference">退款</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 发货 -->
    <el-dialog title="发货" :visible.sync="visible" width="400px">
      <DeliverGoods v-if="visible" ref="deliver"></DeliverGoods>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit(1)">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 备注 -->
    <el-dialog title="发货" :visible.sync="bzVisible" width="400px">
      <el-input v-model="message" type="textarea"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit(2)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { category, orderType, salesStatus } from "@/assets/js/search.js";
import DeliverGoods from "../../components/manage/DeliverGoods";
export default {
  data() {
    return {
      category,
      orderType,
      salesStatus,
      visible: false,
      formInline: {
        month: "",
        title: "",
        category: ""
      },
      bzVisible: false,
      message: "", //编辑备注
      tableData: [
        {
          id: "12987122",
          pic:
            "https://img.alicdn.com/bao/uploaded/i4/1586824901/O1CN01wszI0T1m4hjW3Glkc_!!1586824901.jpg_300x300.jpg",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
          message: "ssss",
          express: "中通快递",
          express_sn: "92838282384",
          num: 1,
          price: 45,
          pf: 40,
          tel: 13093758431
        }
      ]
    };
  },
  components: { DeliverGoods },
  methods: {
    handleOut() {},
    onSubmit() {},
    handleSubmit() {},
    handleBz(row) {
      window.console.log(row);
      this.message = row.message;
      this.bzVisible = true;
    },
    handleOff() {}
  },
  computed: {}
};
</script>
<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>