<template>
  <div class="CommonMsgCard">
    <el-card shadow="hover">
      <el-card shadow="always">
        <el-image :src="item.img" fit="cover"></el-image>
      </el-card>
      <div style="margin: 5px 0px;">{{item.name}}</div>
      <div style="margin: 5px 0px;">{{item.type}}</div>
      <div style="margin: 5px 0px;">{{item.msg}}</div>
      <div class="collection">
        <el-button size="mini" type="info" icon="el-icon-star-off" circle @click="toUser"></el-button>
      </div>

      <div class="operation">
        <el-button size="small" type="primary" icon="el-icon-edit" circle @click="toComment"></el-button>
        <el-button size="small" type="success" icon="el-icon-check" circle></el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {};
  },
  methods: {
    toComment() {
      let data = this.item;
      this.$router.push({
        path: "/comment/index",
        query: data
      });
    },
    toUser() {
      let data = this.item;
      this.$router.push({
        path: "/user/index",
        query: data
      });
    }
  }
};
</script>

<style scoped>
.CommonMsgCard {
  cursor: pointer;
  margin: 10px 0px;
  text-align: center;
}
.CommonMsgCard > .el-card {
  height: 300px;
  position: relative;
}
.collection {
  position: absolute;
  top: 0px;
  right: 0px;
}
.operation {
  position: absolute;
  left: 35%;
  bottom: 0px;
}
</style>