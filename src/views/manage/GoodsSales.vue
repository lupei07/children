<!--
 * @Author: lu
 * @Date: 2020-08-03 13:38:39
 * @LastEditTime: 2020-08-03 18:17:23
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

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="pic" label="商品" width="180">
        <template slot-scope="scope">
          <img width="70px" :src="scope.row.pic" />
        </template>
      </el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="描述" prop="desc"></el-table-column>
      <el-table-column prop="operation" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click.native.prevent="dialogVisible = true" type="text" size="small">发货</el-button>
          <el-button @click.native.prevent="handleOff(scope.row.id)" type="text" size="small">退款</el-button>
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
      formInline: {
        month: "",
        title: "",
        category: ""
      },
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
          shopId: "10333"
        }
      ]
    };
  },
  components: {},
  methods: { onSubmit() {} },
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