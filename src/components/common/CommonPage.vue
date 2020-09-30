<template>
  <div class="CommonPage">
    <!--<el-row :gutter="10">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(item, index) in showList" :key="index">
        <CommonMsgCard :item="item" />
      </el-col>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next"
        :total="total"
      ></el-pagination>
    </el-row>-->
  </div>
</template>

<script>
import CommonMsgCard from "@/components/common/CommonMsgCard";
export default {
  props: {
    items: Array
  },
  data() {
    return {
      showList: [],
      total: this.items.length
    };
  },
  methods: {
    fetchShowList(flag = 1) {
      this.showList = this.items.filters((val, index) => {
        return index > 15 * (flag - 1) && 15 * flag > index;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    // this.fetchShowList();
    console.log("commonPage", this.items);
  },
  components: {
    CommonMsgCard
  }
};
</script>

<style scoped>
</style>