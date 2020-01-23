<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
#app {
  height: 100%;
}

.el-menu-item,
.el-submenu__title {
  height: 50px !important;
  line-height: 50px !important;
  font-size: 12px !important;
}
.el-dropdown-menu__item {
  font-size: 12px !important;
}
</style>
