<template>
  <div class="search">
    <el-row>
      <el-col :xs="6" :sm="6" :md=" {span: 3, offset:5}" :lg=" {span: 3, offset: 5}">
        <el-select v-model="select" placeholder="请选择" style="width:100%">
          <el-option label="类型" value="type">
            <span style="float: left">类型</span>
            <span style="float: right; color: #8492a6; font-size: 13px">type</span>
          </el-option>
          <el-option label="书名" value="name">
            <span style="float: left">书名</span>
            <span style="float: right; color: #8492a6; font-size: 13px">name</span>
          </el-option>
        </el-select>
      </el-col>
      <el-col :xs="18" :sm="18" :md="11" :lg="11">
        <el-input placeholder="请输入内容" v-model="searchName">
          <i slot="suffix" class="el-input__icon el-icon-search iSearch" @click="searchList"></i>
          <i
            slot="suffix"
            class="el-input__icon el-icon-refresh iSearch"
            style="margin-left: 5px;"
            @click="resetList"
          ></i>
        </el-input>
      </el-col>
    </el-row>
    <CommonTable :showList="showList" />
    <el-pagination
      small
      background
      @current-change="handleCurrentChange"
      :current-page.sync="page"
      :pager-count="5"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { getSearchData } from "@/api/search";
import CommonTable from "@/components/common/CommonTable";
export default {
  components:{
    CommonTable
  },
  data() {
    return {
      items: [],
      showList: [],
      list: [],
      searchName: "",
      select: "",
      page: 1,
      total: 0
    };
  },
  methods: {
    fetchSearchData() {
      getSearchData().then(response => {
        this.items = JSON.parse(JSON.stringify(response.data.items));
        this.total = response.data.total;
        this.list = JSON.parse(JSON.stringify(response.data.items));
        this.showItems();
      });
    },
    handleCurrentChange(val) {
      this.showItems(val);
    },
    showItems(flag = 1) {
      this.showList = this.list.filter((val, index) => {
        return 10 * (flag - 1) <= index && 10 * flag > index;
      });
    },
    searchList() {
      let select = this.select;
      let searchName = this.searchName;
      if (select === "" || searchName === "") {
        this.list = JSON.parse(JSON.stringify(this.items));
        this.total = this.list.length;
        this.showItems();
      }

      switch (select) {
        case "type":
          this.list = this.items.filter((val, index) => {
            return val.type === searchName;
          });
          this.total = this.list.length;
          this.showItems();
          break;
        case "name":
          this.list = this.items.filter((val, index) => {
            return val.name === searchName;
          });
          this.total = this.list.length;
          this.showItems();
          break;
      }

      this.select = "";
      this.searchName = "";
    },
    resetList() {
      this.select = "";
      this.searchName = "";
      this.list = JSON.parse(JSON.stringify(this.items));
      this.total = this.list.length;
      this.showItems();
    },
    searchToComment(item) {
      let data = item;
      this.$router.push({
        path: "/comment/index",
        query: data
      });
    }
  },
  created() {
    this.fetchSearchData();
  },
  mounted() {}
};
</script>

<style scoped>
.search > .el-row:first-child {
  background-color: #ccc;
}

.like-table {
  align-items: center;
  margin: 10px 0px 0px 0px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
}
.like-table:hover {
  background-color: #eee;
}

.iSearch {
  background-color: #a6a9ad;
  cursor: pointer;
  border: solid 1px #999;
  border-radius: 10px;
}
.iSearch:hover {
  background-color: #919497;
}
</style>