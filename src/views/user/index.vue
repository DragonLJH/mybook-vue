<template>
  <div class="user">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="userMsg">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="float: left; ">用户信息</span>
              <el-button
                style="float: right; padding: 3px 0"
                @click="ModelVisible = true"
                type="text"
              >修改用户信息</el-button>
            </div>

            <div class="msg">
              <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <el-card shadow="always">
                    <el-image :src="userMsg.userImg" fit="cover"></el-image>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <el-row :gutter="10">
                    <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
                      <el-tooltip placement="right">
                        <div slot="content">用户名</div>
                        <el-button>{{userMsg.userName}}</el-button>
                      </el-tooltip>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
                      <el-tooltip placement="right">
                        <div slot="content">用户手机号</div>
                        <el-button>{{userMsg.userNumber }}</el-button>
                      </el-tooltip>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
                      <el-tooltip placement="right">
                        <div slot="content">用户年龄</div>
                        <el-button>{{userMsg.userAge }}</el-button>
                      </el-tooltip>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
                      <el-tooltip placement="right">
                        <div slot="content">用户邮箱</div>
                        <el-button>{{userMsg.userEmail}}</el-button>
                      </el-tooltip>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="collection">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="float: left;">收藏</span>
            </div>
            <div>
              <el-row :gutter="10">
                <el-col
                  :xs="12"
                  :sm="12"
                  :md="6"
                  :lg="6"
                  :xl="6"
                  class="collection-item"
                  v-for="(item, index) in collectionList"
                  :key="index"
                >
                  <el-card shadow="always">
                    <el-image :src="item.img" fit="cover"></el-image>
                  </el-card>
                  <div class="collection-item-hover">
                    <div style="margin: 5px 0px;">{{item.name}}</div>
                    <div style="margin: 5px 0px;">{{item.type}}</div>
                    <div style="margin: 5px 0px;">{{item.msg}}</div>
                    <div>
                      <el-button
                        size="small"
                        type="primary"
                        icon="el-icon-edit"
                        circle
                        @click="toComment(item)"
                      ></el-button>
                      <el-button size="small" type="success" icon="el-icon-check" circle></el-button>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <div class="reserve"></div>

    <el-dialog title="修改用户信息" :visible.sync="ModelVisible" width="100%" center>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <el-card shadow="always">
            <div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="userMsg.userImg" :src="userMsg.userImg" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <el-input style="margin:10px 0px;" placeholder="修改用户名" v-model="userMsg.userName">
              <i slot="prefix" class="el-input__icon el-icon-user"></i>
              <template slot="prepend">
                <div style="width:70px">用户名</div>
              </template>
            </el-input>
            <el-input style="margin:10px 0px;" placeholder="修改手机号" v-model="userMsg.userNumber">
              <i slot="prefix" class="el-input__icon el-icon-phone-outline"></i>
              <template slot="prepend">
                <div style="width:70px;">手机号</div>
              </template>
            </el-input>
            <el-input style="margin:10px 0px;" placeholder="修改年龄" v-model="userMsg.userAge">
              <i slot="prefix" class="el-input__icon el-icon-d-caret"></i>
              <template slot="prepend">
                <div style="width:70px">年龄</div>
              </template>
            </el-input>
            <el-input style="margin:10px 0px;" placeholder="修改e-mail" v-model="userMsg.userEmail">
              <i slot="prefix" class="el-input__icon el-icon-message"></i>
              <template slot="prepend">
                <div style="width:70px">e-mail</div>
              </template>
            </el-input>
          </el-card>
        </el-col>
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button @click="ModelVisible = false">取 消</el-button>
        <el-button type="primary" @click="ModelVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { getCollectionList } from "@/api/user";
export default {
  computed: {
    ...mapGetters(["name"])
  },
  data() {
    return {
      ModelVisible: false,
      collectionList: [],
      firstUserMsg: {
        userImg: "http://dummyimage.com/300x200/9b79f2&text=" + this.name,
        userName: this.name,
        userNumber: 123456789,
        userAge: 18,
        userEmail: "123@123.com"
      },
      userMsg: {
        userImg: "http://dummyimage.com/300x200/9b79f2&text=" + this.name,
        userName: this.name,
        userNumber: 123456789,
        userAge: 18,
        userEmail: "123@123.com"
      }
    };
  },
  methods: {
    fetchCollectionList() {
      getCollectionList().then(response => {
        this.collectionList = response.data.items;
      });
    },
    handleAvatarSuccess(res, file) {
      this.userMsg.userImg = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    toComment(item) {
      let data = item;
      this.$router.push({
        path: "/comment/index",
        query: data
      });
    }
  },
  created() {
    let adata = this.$route.query;
    console.log(adata);
    getCollectionList().then(response => {
      let list = response.data.items;
      if (adata === null) {
      } else {
        list.push(adata);
      }
      this.collectionList = JSON.parse(JSON.stringify(list));
    });
    let userMsg = this.userMsg;
    userMsg.userImg = "http://dummyimage.com/300x200/9b79f2&text=" + this.name;
    userMsg.userName = this.name;
    userMsg.userNumber = 123456789;
    userMsg.userAge = 18;
    userMsg.userEmail = "123@123.com";
  },
  mounted() {}
};
</script>

<style scoped>
.userMsg {
  text-align: center;
}

.el-tooltip {
  width: 150px;
  margin: 5px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 100%;
  display: block;
}

.collection-item {
  position: relative;
  cursor: pointer;
}

.collection-item > .collection-item-hover {
  position: absolute;
  bottom: -1000px;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
}

.collection-item:hover > .collection-item-hover {
  bottom: 0px;
}

.collection-item:active > .collection-item-hover {
  bottom: 0px;
}
</style>                                                                                   