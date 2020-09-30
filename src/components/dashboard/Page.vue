<template>
  <div class="CommonPage">
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(item, index) in showList" :key="index">
        <CommonMsgCard :item="item" />
      </el-col>
    </el-row>

    <el-pagination
      small
      background
      :pager-count="5"
      :page-size="16"
      @current-change="handleCurrentChange"
      layout="total, prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { getPageData } from "@/api/dashboard";
import CommonMsgCard from "@/components/common/CommonMsgCard";
export default {
  data() {
    return {
      items: [],
      showList: [],
      total: 0
    };
  },
  methods: {
    fetchPageData() {
      getPageData().then(response => {
        this.items = response.data.items;
        this.total = response.data.total;
        this.fetchShowList();
      });
    },
    fetchShowList(flag = 1) {
      this.showList = this.items.filter((val, index) => {
        return index >= 16 * (flag - 1) && 16 * flag > index;
      });
    },
    handleCurrentChange(val) {
      this.fetchShowList(val);
    }
  },
  created() {
    this.fetchPageData();
  },
  components: {
    CommonMsgCard
  }
};
</script>

<style scoped>
</style>