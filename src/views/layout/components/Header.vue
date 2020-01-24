<template>
  <div
    class="headbar"
    :class="isCollapse ? 'position-collapse-left' : 'position-left'"
  >
    <!-- 导航菜单隐藏显示切换 -->
    <span class="hamburger-container">
      <Hamburger :toggleClick="onCollapse" :isActive="isCollapse"></Hamburger>
    </span>
    <!-- <i class="el-icon-menu" @click="onCollapse"></i> -->

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
      <!-- 语言切换 -->
      <LangSelector class="lang-selector"></LangSelector>
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
import { mapState } from "vuex";
import Hamburger from "@/components/Hamburger";
import LangSelector from "@/components/LangSelector";
export default {
  components: {
    Hamburger,
    LangSelector
  },
  data() {
    return {
      userName: "Louis",
      userAvatar: "",
      activeIndex: 1
    };
  },
  methods: {
    // 折叠导航栏
    onCollapse: function() {
      this.$store.commit("onCollapse");
    },
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
    }
  },
  mounted() {
    var user = sessionStorage.getItem("user");
    if (user) {
      this.userName = user;
      this.userAvatar = require("@/assets/images/user.png");
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.app.isCollapse
    })
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
  .hamburger-container {
    width: 55px;
    height: 50px;
    float: left;
    cursor: pointer;
    border-color: rgba(111, 123, 131, 0.8);
    border-left-width: 1px;
    border-left-style: solid;
    border-right-width: 1px;
    border-right-style: solid;
    padding-top: 15px;
    padding-left: 15px;
    // background: #504e6180;
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
.position-left {
  left: 200px;
}
.position-collapse-left {
  left: 65px;
}
</style>
