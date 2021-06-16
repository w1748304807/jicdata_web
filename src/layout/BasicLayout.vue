<template>
  <el-container class="container">
    <el-header class="header">
      <Header />
    </el-header>
    <el-container>
      <el-aside class="aside">
        <el-menu default-active="1-1" router>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">审批管理</span>
            </template>
            <el-menu-item index="/workflow/index">审批事项</el-menu-item>
            <el-menu-item index="/workflow/config">审批流配置</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-sell"></i>
              <span slot="title">数据服务</span>
            </template>
            <el-menu-item index="/dataApi/dev">服务接口开发</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-set-up"></i>
              <span slot="title">系统管理</span>
            </template>

            <el-menu-item-group>
              <template slot="title">访问控制</template>
              <el-menu-item index="/system/user">用户管理</el-menu-item>
              <el-menu-item index="/system/organ">组织管理</el-menu-item>
              <el-menu-item index="/system/role">角色管理</el-menu-item>
              <el-menu-item index="/system/resource">资源管理</el-menu-item>
              <el-menu-item index="/system/dict">数据字典</el-menu-item>
              <el-menu-item index="/system/log">系统日志</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group>
              <template slot="title">配置管理</template>
              <el-menu-item index="/system/datasource">数据源管理</el-menu-item>
              <el-menu-item index="/system/config">系统配置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">常用工具</span>
            </template>
            <el-menu-item index="/tools/schedule">日程管理</el-menu-item>
            <el-menu-item index="/tools/vpn">VPN管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <MultiTabs />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./Header.vue";
import MultiTabs from "./MultiTabs.vue";
export default {
  components: { Header, MultiTabs },
  data() {
    return {
      activeIndex: null,
    };
  },
};
</script>

<style>
.container {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
.header {
  border-bottom: 4px solid #a00218;
}
.aside {
  width: 220px;
  border-right: solid 1px #e6e6e6;
}
.main {
  padding: 0px;
  background-color: #f0f0f0;
}
.el-menu {
  border: none;
}
</style>