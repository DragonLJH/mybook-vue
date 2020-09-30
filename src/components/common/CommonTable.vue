<template>
  <div class="CommonTable">
    <div class="like-table" v-for="(item, index) in showList" :key="index">
      <el-col :xs="24" :sm="24" :md="4" :lg="4">{{index+1}}</el-col>
      <el-col :xs="24" :sm="24" :md="20" :lg="20">
        <el-col :xs="12" :sm="12" :md="4" :lg="4">
          <el-image :src="item.img" fit="cover"></el-image>
        </el-col>
        <el-col :xs="12" :sm="12" :md="4" :lg="4">{{item.name}}</el-col>
        <el-col :xs="12" :sm="12" :md="4" :lg="4">{{item.type}}</el-col>
        <el-col :xs="12" :sm="12" :md="4" :lg="4">{{item.msg}}</el-col>
        <el-col :xs="12" :sm="12" :md="4" :lg="4">{{item.number}}</el-col>
        <el-col :xs="12" :sm="12" :md="4" :lg="4">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            circle
            @click="searchToComment(item)"
          ></el-button>
          <el-button size="mini" type="success" icon="el-icon-check" circle></el-button>
          <el-button size="mini" type="info" icon="el-icon-star-off" circle @click="toUser(item)"></el-button>
        </el-col>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showList: Array
  },
  data() {
    return {};
  },
  methods: {
    searchToComment(item) {
      let data = item;
      this.$router.push({
        path: "/comment/index",
        query: data
      });
    },
    toUser(item) {
      let data = item;
      this.$router.push({
        path: "/user/index",
        query: data
      });
    }
  }
};
</script>

<style scoped>
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
</style>