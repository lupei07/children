<!--
 * @Author: lu
 * @Date: 2020-07-31 15:31:22
 * @LastEditTime: 2020-07-31 17:12:19
 * @FilePath: \children\src\components\GoodsList.vue
 * @Description: 
--> 
<template>
  <ul class="list">
    <li class="borderbox">
      <div class="box">
        <div class="img">
          <img
            width="100%"
            src="https://img.alicdn.com/bao/uploaded/i4/1586824901/O1CN01wszI0T1m4hjW3Glkc_!!1586824901.jpg_300x300.jpg"
          />
        </div>
        <div class="text posR">
          <img height="40" width="100%" src="@/assets/images/6.png" />
          <h2 v-if="type==1">RMB 45.00</h2>
          <p v-else>标题</p>
          <i class="star posA">
            <img height="18" src="@/assets/images/5.png" />
          </i>
        </div>
      </div>
    </li>
    <li class="borderbox">
      <div class="box">
        <div class="img">
          <img
            width="100%"
            src="https://img.alicdn.com/bao/uploaded/i4/1586824901/O1CN01wszI0T1m4hjW3Glkc_!!1586824901.jpg_300x300.jpg"
          />
        </div>
        <div class="text posR">
          <img height="40" width="100%" src="@/assets/images/6.png" />
          <h2 v-if="type==1">RMB 45.00</h2>
          <p v-else>标题</p>
          <i class="star posA">
            <img height="18" src="@/assets/images/5.png" />
          </i>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  methods: {},
  computed: {}
};
</script>
<style scoped lang='less'>
.list {
  li {
    float: left;
    width: 50%;
    .box {
      margin: 10px;
      border: 2px dotted #e6e6e6;
      border-radius: 10px;
      padding: 10px;
    }
    &:nth-child(odd) .box {
      margin-right: 5px;
    }
    &:nth-child(even) .box {
      margin-left: 5px;
    }
    .text {
      height: 40px;
      font-family: verdana;
      text-align: center;
      color: 666;
      h2,
      p {
        width: 100%;
        position: absolute;
        top: 10px;
      }
      .star {
        right: 10px;
        bottom: -9px;
      }
    }
  }
}
</style>