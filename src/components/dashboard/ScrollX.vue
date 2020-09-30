<template>
  <div class="ScrollX">
    <div v-for="(item, index) in scrollXData" :key="index">
      <CommonMsgCard :item="item" />
    </div>
  </div>
</template>

<script>
import { getScrollXData } from "@/api/dashboard";
import CommonMsgCard from "@/components/common/CommonMsgCard";
export default {
  components: { CommonMsgCard },
  data() {
    return {
      scrollXData: []
    };
  },
  methods: {
    fetchScrollXData() {
      getScrollXData().then(response => {
        this.scrollXData = response.data.items;
        console.log(response);
      });
    }
  },
  created() {
    this.fetchScrollXData();
  }
};
</script>

<style scoped>
.ScrollX {
  display: flex;
  overflow-x: scroll;
}
.ScrollX > div {
  /*flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。
    flex-shrink：表示在父元素宽度不够的情况下是否自动收缩
    0表示不自动收缩
    1表示自动收缩*/
  flex-shrink: 0;
  width: 200px;
  text-align: center;
  font-size: 14px;
  margin-left: 10px;
}
</style>