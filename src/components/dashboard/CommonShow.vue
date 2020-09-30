<template>
  <div class="CommonShow">
    <el-row :gutter="10">
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
        v-for="(item, index) in items"
        :key="index"
        class="fixed"
      >
        <el-card shadow="always">
          <el-image :src="item.img" fit="cover"></el-image>
        </el-card>
        <div class="hidden-display">
          <div style="margin: 5px 0px;">{{item.name}}</div>
          <div style="margin: 5px 0px;">{{item.type}}</div>
          <div style="margin: 5px 0px;">{{item.msg}}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getCommonShowData } from "@/api/dashboard";

export default {
  data() {
    return { items: [] };
  },
  methods: {
    fetchCommonShowData() {
      getCommonShowData().then(response => {
        this.items = response.data.items;
        console.log("CommonShow", response);
      });
    }
  },
  created() {
    this.fetchCommonShowData();
  },
  mounted() {}
};
</script>

<style scoped>
.fixed {
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.fixed > .hidden-display {
  width: 100%;
  height: 150px;
  text-align: center;
  position: absolute;
  bottom: -150px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.9);
}
.fixed:hover > .hidden-display {
  bottom: 0px;
}
.fixed:active > .hidden-display {
  bottom: 0px;
}
</style>