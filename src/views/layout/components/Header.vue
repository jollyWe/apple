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
    <span class="userinfo">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link lang-inner">
          <span id="language">中文</span
          ><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh_cn:中文">中文</el-dropdown-item>
          <el-dropdown-item command="en_us:English">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 用户信息 -->
      <el-dropdown class="user-info-dropdown" trigger="hover">
        <span class="el-dropdown-link userinfo-inner"
          ><img :src="this.userAvatar" />{{ userName }}</span
        >
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item @click.native="logout">
            退出登录
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
      isCollapse: false,
      userName: "Louis",
      userAvatar: "",
      activeIndex: 1
    };
  },
  methods: {
    // 退出登录
    logout() {
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    // 语言切换
    handleCommand(command) {
      let array = command.split(":");
      let lang = array[0] === "" ? "zh_cn" : array[0];
      let label = array[1];
      document.getElementById("language").innerHTML = label;
      this.$i18n.locale = lang;
    }
  },
  mounted() {
    var user = sessionStorage.getItem("user");
    if (user) {
      this.userName = user;
      this.userAvatar = require("@/assets/images/user.png");
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
  .userinfo {
    float: right;
    .lang-inner {
      font-size: 12px;
      cursor: pointer;
      color: #fff;
    }
    .user-info-dropdown {
      font-size: 12px;
      padding-left: 15px;
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
