<!--
 * @Author: lu
 * @Date: 2020-07-31 17:36:48
 * @LastEditTime: 2020-07-31 17:58:40
 * @FilePath: \children\src\components\GoodsListHot.vue
 * @Description: 
--> 
<template>
  <ul class="list">
    <li>
      <img
        width="100%"
        src="https://img.alicdn.com/bao/uploaded/i4/1586824901/O1CN01wszI0T1m4hjW3Glkc_!!1586824901.jpg_300x300.jpg"
      />
      <div class="text">
        <img src="@/assets/images/8.png" />
        <span>RMB 35.80</span>
      </div>
    </li>
    <li>
      <img
        width="100%"
        src="https://img.alicdn.com/bao/uploaded/i4/1586824901/O1CN01wszI0T1m4hjW3Glkc_!!1586824901.jpg_300x300.jpg"
      />
      <div class="text">
        <img src="@/assets/images/8.png" />
        <span>RMB 35.80</span>
      </div>
    </li>
    <li>
      <img
        width="100%"
        src="https://img.alicdn.com/bao/uploaded/i4/1586824901/O1CN01wszI0T1m4hjW3Glkc_!!1586824901.jpg_300x300.jpg"
      />
      <div class="text">
        <img src="@/assets/images/8.png" />
        <span>RMB 35.80</span>
      </div>
    </li>
    <li>
      <img
        width="100%"
        src="https://img.alicdn.com/bao/uploaded/i4/1586824901/O1CN01wszI0T1m4hjW3Glkc_!!1586824901.jpg_300x300.jpg"
      />
      <div class="text">
        <img src="@/assets/images/8.png" />
        <span>RMB 35.80</span>
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
  methods: {},
  computed: {}
};
</script>
<style scoped lang='less'>
.list {
  display: flex;
  flex-wrap: wrap;
  li {
    flex: 1;
    max-width: 50%;
    min-width: 30%;
    padding: 5px;
    img {
      border-radius: 20px;
    }
    .text {
      margin: 10px 0;
      border-radius: 8px;
      height: 30px;
      border: 2px dotted #e6e6e6;
      font-family: verdana;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 10px;
        height: 9px;
        margin-right: 10px;
      }
    }
  }
}
</style>