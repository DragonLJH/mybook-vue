<template>
  <div class="tabs">
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-s-platform"></i> Computer
          <el-badge :value="ComputerData.length" :max="99"></el-badge>
        </span>
        <CommonTable :showList="ComputerData" />
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-discover"></i> SEM<el-badge :value="SEMData.length" :max="99"></el-badge>
        </span>
        <CommonTable :showList="SEMData" />
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-phone"></i> Communication<el-badge :value="CommunicationData.length" :max="99"></el-badge>
        </span>
        <CommonTable :showList="CommunicationData" />
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-notebook-1"></i> Other<el-badge :value="OtherData.length" :max="99"></el-badge>
        </span>
        <CommonTable :showList="OtherData" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getTabsData } from "@/api/tabs";
import CommonTable from "@/components/common/CommonTable";
export default {
  components: { CommonTable },
  data() {
    return {
      Data: [],
      ComputerData: [],
      SEMData: [],
      CommunicationData: [],
      OtherData: []
    };
  },
  methods: {
    fetchTabsData() {
      getTabsData().then(response => {
        this.Data = response.data.items;
        this.ComputerData = this.Data.filter((val, index) => {
          return val.type === "Computer";
        });
        this.SEMData = this.Data.filter((val, index) => {
          return val.type === "SEM";
        });
        this.CommunicationData = this.Data.filter((val, index) => {
          return val.type === "Communication";
        });
        this.OtherData = this.Data.filter((val, index) => {
          return val.type === "Other";
        });
      });
    }
  },
  created() {
    this.fetchTabsData();
  },
  mounted() {}
};
</script>

<style scoped>
.el-badge__content.is-fixed {
  top: 10px;
}
</style>