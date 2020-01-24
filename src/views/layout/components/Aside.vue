<template>
  <div class="menu-bar-container">
    <!-- logo -->
    <div
      class="logo"
      :class="isCollapse ? 'menu-bar-collapse-width' : 'menu-bar-width'"
    >
      <img :src="this.logo" />
      <div>{{ isCollapse ? "" : sysName }}</div>
    </div>
    <!-- 导航菜单 -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :class="isCollapse ? 'menu-bar-collapse-width' : 'menu-bar-width'"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="1-1" @click="$router.push('user')">{{
          $t("sys.userMng")
        }}</el-menu-item>
        <el-menu-item index="1-2" @click="$router.push('menu')">{{
          $t("sys.menuMng")
        }}</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      sysName: "Apple",
      logo: ""
    };
  },
  computed: {
    ...mapState({
      appName: state => state.app.appName,
      isCollapse: state => state.app.isCollapse
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    this.sysName = "Apple";
    this.logo = require("@/assets/logo.png");
  }
};
</script>
<style scoped lang="scss">
.menu-bar-container {
  position: fixed;
  top: 0px;
  left: 0;
  bottom: 0;
  z-index: 1020;
  .el-menu {
    position: absolute;
    top: 50px;
    bottom: 0px;
    width: 200px;
  }
  .logo {
    position: absolute;
    top: 0px;
    height: 50px;
    line-height: 50px;
    background: #4b5f6e;
    cursor: pointer;
    img {
      width: 35px;
      height: 35px;
      border-radius: 0px;
      margin-top: 10px;
      margin-left: 10px;
      float: left;
    }
    div {
      display: inline-block;
      font-size: 25px;
      color: white;
      padding-left: 20px;
    }
  }
  .menu-bar-width {
    width: 200px;
  }
  .menu-bar-collapse-width {
    width: 65px;
  }
}
</style>
