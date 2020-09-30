<template>
  <div class="Carousel">
    <h1>轮播推荐</h1>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,index) in carouselData" :key="index">
        <el-card shadow="hover">
          <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <el-card shadow="always">
                <el-image :src="item.img" fit="cover"></el-image>
              </el-card>
              <div style="margin: 10px 0px;">{{item.name}}</div>
              <div style="margin: 10px 0px;">{{item.type}}</div>
              <div style="margin: 10px 0px;">{{item.msg}}</div>
            </el-col>
          </el-row>
        </el-card>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getCarouselData } from "@/api/dashboard";
export default {
  data() {
    return {
      carouselData: []
    };
  },
  methods: {
    fetchCarouselData() {
      getCarouselData().then(response => {
        this.carouselData = response.data.items;
        console.log(response);
      });
    }
  },
  created() {
    this.fetchCarouselData();
  }
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
}
.el-carousel {
  height: 300px;
  text-align: center;
  overflow: hidden;
}
</style>