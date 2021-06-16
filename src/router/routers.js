import BasicLayout from "@/layout/BasicLayout.vue";
export default [
  {
    path: "/",
    name: "mainPage",
    component: BasicLayout,
    redirect: "/index",
    children: [
      {
        name: "index",
        path: "/index",
        meta: {
          title: "首页",
        },
        component: (resolve) => require(["@/views/Index.vue"], resolve),
      },
      /********系统管理********/
      {
        name: "system_organ",
        path: "/system/organ",
        meta: {
          title: "组织管理",
        },
        component: (resolve) =>
          require(["@/views/system/organ/Index.vue"], resolve),
      },
      {
        name: "system_user",
        path: "/system/user",
        meta: {
          title: "用户管理",
        },
        component: (resolve) =>
          require(["@/views/system/user/Index.vue"], resolve),
      },
      {
        name: "system_role",
        path: "/system/role",
        meta: {
          title: "角色管理",
        },
        component: (resolve) =>
          require(["@/views/system/role/Index.vue"], resolve),
      },
      {
        name: "system_resource",
        path: "/system/resource",
        meta: {
          title: "资源管理",
        },
        component: (resolve) =>
          require(["@/views/system/resource/Index.vue"], resolve),
      },
      {
        name: "system_dict",
        path: "/system/dict",
        meta: {
          title: "数据字典",
        },
        component: (resolve) =>
          require(["@/views/system/dict/Index.vue"], resolve),
      },
      {
        name: "system_log",
        path: "/system/log",
        meta: {
          title: "系统日志",
        },
        component: (resolve) =>
          require(["@/views/system/log/Index.vue"], resolve),
      },
      {
        name: "system_datasource",
        path: "/system/datasource",
        meta: {
          title: "数据源管理",
        },
        component: (resolve) =>
          require(["@/views/system/datasource/Index.vue"], resolve),
      },
      {
        name: "system_config",
        path: "/system/config",
        meta: {
          title: "系统配置",
        },
        component: (resolve) =>
          require(["@/views/system/config/Index.vue"], resolve),
      },
      /********审批管理********/
      {
        name: "workflow_index",
        path: "/workflow/index",
        meta: {
          title: "审批事项",
        },
        component: (resolve) =>
          require(["@/views/workflow/Index.vue"], resolve),
      },
      {
        name: "workflow_config",
        path: "/workflow/config",
        meta: {
          title: "审批流配置",
        },
        component: (resolve) =>
          require(["@/views/workflow/config/Index.vue"], resolve),
      },
      /********数据服务********/
      {
        name: "dataApi",
        path: "/dataApi/dev",
        meta: {
          title: "服务接口开发",
        },
        component: (resolve) => require(["@/views/dataApi/Index.vue"], resolve),
      },
      /********常用工具********/
      {
        name: "tools",
        path: "/tools/schedule",
        meta: {
          title: "日程管理",
        },
        component: (resolve) =>
          require(["@/views/tools/schedule/Index.vue"], resolve),
      },
      {
        name: "tools_vpn",
        path: "/tools/vpn",
        meta: {
          title: "VPN管理",
        },
        component: (resolve) =>
          require(["@/views/tools/vpn/Index.vue"], resolve),
      },
    ],
  },
];
