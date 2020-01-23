<template>
  <div class="headbar">
    <!-- 导航菜单隐藏显示切换 -->
    <span class="hamburg">
      <i class="el-icon-menu"></i>
    </span>
    <!-- 导航菜单 -->
    <span class="nav-bar">
      <el-menu
        class="el-menu-demo"
        background-color="#4b5f6e"
        text-color="#fff"
        active-text-color="#ffd04b"
        mode="horizontal"
      >
        <el-menu-item index="1">rfgg</el-menu-item>
        <el-menu-item index="2">222</el-menu-item>
        <el-menu-item index="3">3333</el-menu-item>
      </el-menu>
    </span>
    <span class="tool-bar">
      <!-- 用户信息 -->
      <el-dropdown class="user-info-dropdown" trigger="hover">
        <span class="el-dropdown-link"
          ><img src="@assets/images/user.png" />{{ user.name }}</span
        >
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>44</el-dropdown-item>
          <el-dropdown-item>555</el-dropdown-item>
          <el-dropdown-item>
            uopp
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "apple",
        avatar: ""
      }
    };
  },
  mounted() {
    this.sysName = "Apple";
    var user = sessionStorage.getItem("user");
    if (user) {
      this.name = user;
      this.avatar = require("@assets/images/user.png");
    }
  }
};
</script>

<style scoped lang="scss">
.headbar {
  position: absolute;
  left: 200px;
  right: 0px;
  height: 50px;
  line-height: 50px;
  border-color: rgba(180, 190, 190, 0.8);
  border-left-width: 1px;
  border-left-style: solid;

  background: #4b5f6e;
  .hamburg {
    margin-left: auto;
    float: left;
    width: 52px;
    padding-left: 20px;
    color: #fff;
    background: #4b5f6e;
  }
  .nav-bar {
    margin-left: auto;
    float: left;
    .el-menu {
      height: 50px;
      line-height: 50px;
      background: #4b5f6e;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
      }
    }
  }
  .tool-bar {
    float: right;
    .user-info-dropdown {
      font-size: 12px;
      padding-right: 20px;
      color: #fff;
      cursor: pointer;
      img {
        width: 30px;
        height: 30px;
        border-radius: 2px;
        margin: 10px 0 0 15px;
        float: right;
      }
    }
  }
}
.menu-bar-width {
  left: 200px;
}
.menu-bar-collapse-width {
  left: 65px;
}
</style>
