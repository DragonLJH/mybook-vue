<template>
  <div class="Comment">
    <div class="Comment-div">
      <el-card shadow="hover">
        <el-row>
          <el-col :span="24">
            <el-image :src="item.img" fit="cover"></el-image>
          </el-col>
          <el-col :span="24">{{item.name}}</el-col>
          <el-col :span="24">{{item.type}}</el-col>
          <el-col :span="24">{{item.msg}}</el-col>
          <el-col :span="24">{{item.number}}</el-col>
          <el-col :span="24">
            <el-button size="mini" type="success" icon="el-icon-check" circle></el-button>
            <el-button size="mini" type="info" icon="el-icon-star-off" circle @click="toUser(item)"></el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div>
      <el-row :gutter="30">
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <div class="form">
            <el-card shadow="always">
              <h2>{{name}} 评论</h2>
              <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea"></el-input>
              <el-button
                type="primary"
                style="float:right;margin:10px 0px;"
                @click="submitComment"
              >提交</el-button>
            </el-card>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-card shadow="always">
            <el-table :data="showTableData" style="width: 100%">
              <el-table-column label="用户名" min-width="180">
                <template slot-scope="scope">
                  <i class="el-icon-user"></i>
                  <span style="margin-left: 10px">{{ scope.row.userName}}</span>
                </template>
              </el-table-column>
              <el-table-column label="评论" min-width="180">
                <template slot-scope="scope">
                  <i class="el-icon-edit"></i>
                  <span style="margin-left: 10px">{{ scope.row.comment}}</span>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              :pager-count="5"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="total"
            ></el-pagination>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getTableData } from "@/api/comment";
export default {
  data() {
    return {
      item: {
        img: "http://dummyimage.com/300x200/9b79f2&text=William Jackson",
        name: "William Jackson",
        type: "SEC",
        msg: "Oqrju pbwgwbxhaq nwiiydx imkkx idhbn wyphpmch wvvqot",
        number: 10
      },
      textarea: "",
      tableData: [],
      showTableData: [],
      total: 0,
      currentPage: 0
    };
  },
  methods: {
    fetchTableData() {
      getTableData().then(response => {
        console.log("getTableData", response);
        this.tableData = response.data.items;
        this.total = response.data.total;
        this.filterData();
      });
    },
    filterData(flag = 1) {
      this.showTableData = this.tableData.filter((val, index) => {
        return 10 * flag > index && index >= 10 * (flag - 1);
      });
    },
    handleCurrentChange(val) {
      this.filterData(val);
    },
    submitComment() {
      let list = this.tableData;

      let obj = { userName: "", comment: "" };
      obj.userName = this.name;
      obj.comment = this.textarea;
      let number = 0;
      let flag = list.some((val, index) => {
        number = index;
        return val.userName === obj.userName;
      });
      if (flag) {
        this.$set(list, number, obj);
      } else {
        list.unshift(obj);
        this.total = this.total + 1;
      }
      this.textarea = "";
      this.currentPage = 1;
      this.filterData();
    },
    toUser(item) {
      let data = item;
      this.$router.push({
        path: "/user/index",
        query: data
      });
    }
  },
  created() {
    this.item = this.$route.query;
    this.fetchTableData();
  },
  mounted() {},
  computed: {
    ...mapGetters(["name"])
  }
};
</script>

<style scoped>
.Comment-div {
  align-items: center;
  margin: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  border: solid 1px #ccc;
  border-radius: 20px;
}
.Comment-div:hover {
  background-color: #eee;
}

.form {
  text-align: center;
}
</style>