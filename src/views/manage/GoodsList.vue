<!--
 * @Author: lu
 * @Date: 2020-08-03 13:38:32
 * @LastEditTime: 2020-08-03 16:48:37
 * @FilePath: \children\src\views\manage\GoodsList.vue
 * @Description: 
-->
<template>
  <div class="container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
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
      <el-form-item label="商品来源">
        <el-select v-model="formInline.goodsFrom" placeholder="商品来源">
          <el-option
            v-for="(item,index) in goodsFrom"
            :label="item.title"
            :key="index"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品状态">
        <el-select v-model="formInline.goodsStatus" placeholder="商品状态">
          <el-option
            v-for="(item,index) in goodsStatus"
            :label="item.title"
            :key="index"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="formInline.title" placeholder="标题"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <div class="oper">
      <el-button type="primary" size="small" plain>新建商品</el-button>
    </div>

    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="pic" label="商品" width="180">
        <template slot-scope="scope">
          <img width="70px" :src="scope.row.pic" />
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题">
        <template slot-scope="scope">
          <div>{{scope.row.title}}</div>
          <p>{{scope.row.shop}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="售价" width="180"></el-table-column>
      <el-table-column prop="pf" label="批发价" width="180"></el-table-column>
      <el-table-column prop="salesCount" label="总销量" width="180"></el-table-column>
      <el-table-column prop="operation" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click.native.prevent="dialogVisible = true" type="text" size="small">出售</el-button>
          <el-button @click.native.prevent="handlePublist(scope.row.id)" type="text" size="small">发布</el-button>
          <el-button @click.native.prevent="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click.native.prevent="handleOff(scope.row.id)" type="text" size="small">下架</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新建商品 -->
    <el-dialog title="新建商品" :visible.sync="visible" width="800px">
      <add-goods></add-goods>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 出售 -->
    <el-dialog title="出售" :visible.sync="dialogVisible" width="800px">
      <Sales ref="sales"></Sales>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { category, goodsFrom, goodsStatus } from "@/assets/js/search.js";
import Sales from "../../components/manage/Sales";
import AddGoods from "../../components/manage/AddGoods";
export default {
  data() {
    return {
      visible: true,
      dialogVisible: false,
      category,
      goodsFrom,
      goodsStatus,
      formInline: {
        title: "",
        category: "",
        goodsFrom: "",
        goodsStatus: ""
      },
      tableData: [
        {
          pic:
            "https://img.alicdn.com/bao/uploaded/i4/1586824901/O1CN01wszI0T1m4hjW3Glkc_!!1586824901.jpg_300x300.jpg",
          title: "王小虎",
          shop: "汶上县",
          price: "45.00",
          pf: "25.00",
          salesCount: 100
        }
      ],
      multipleSelection: []
    };
  },
  components: { Sales, AddGoods },
  methods: {
    handlePublist(id) {
      window.console.log(id);
    },
    handleEdit(row) {
      window.console.log(row);
    },
    handleOff(id) {
      window.console.log(id);
    },
    onSubmit() {},
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSubmit() {
      this.$refs.sales.submitForm();
    }
  },
  computed: {}
};
</script>
<style scoped>
.container {
  padding: 20px 0 0;
}
</style>