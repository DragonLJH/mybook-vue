<template>
  <div class="dashboard-container">
    <Carousel />

    <h1>推荐</h1>
    <CommonShow />
    <h1>推荐1</h1>
    <ScrollX />

    <h1>推荐2</h1>
    <Page />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Carousel from "@/components/dashboard/Carousel";
import ScrollX from "@/components/dashboard/ScrollX";
import Page from "@/components/dashboard/Page";
import CommonShow from "@/components/dashboard/CommonShow";
export default {
  components: {
    Carousel,
    ScrollX,
    Page,
    CommonShow
  },
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.Carousel {
  margin: 10px 0px;
}
.ScrollX {
  margin: 10px 0px;
}
</style>
