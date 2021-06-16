import router from "@/router";

export default {
  state: {
    tabs: {
      list: [
        {
          name: "index",
          title: "首页",
          icon: "el-icon-s-home",
          path: "/index",
          closable: false,
        },
      ],
      currentTab: {
        name: "index",
        title: "首页",
        icon: "el-icon-s-home",
        path: "/index",
        closable: false,
      },
      closingTab: null,
    },
  },
  mutations: {
    addTab(state, route) {
      let idx = state.tabs.list.findIndex((x) => x.name === route.to.name);
      if (idx > -1) {
        state.tabs.currentTab = state.tabs.list[idx];
      } else {
        state.tabs.list.push(route.to);
        state.tabs.currentTab = route.to;
      }
      state.closingTab = null;
    },
    changeTab(state, tab) {
      if (tab.name == state.tabs.currentTab.name) {
        return;
      }

      const idx = state.tabs.list.findIndex((x) => x.name === tab.name);
      if (idx > -1) {
        router.push(state.tabs.list[idx].path);
        state.tabs.currentTab = state.tabs.list[idx];
      }
    },
    removeTab(state, tab) {
      const name = tab.name;
      const idx = state.tabs.list.findIndex((x) => x.name === name);
      if (idx > -1) {
        state.closingTab = state.tabs.list[idx];
        state.tabs.list.splice(idx, 1);
      }

      if (name === state.tabs.currentTab.name) {
        if (idx <= state.tabs.list.length - 1) {
          router.push(state.tabs.list[idx].path);
        } else {
          router.push(state.tabs.list[idx - 1].path);
        }
      }
    },
    removeOther(state, tab) {
      for (let i = state.tabs.list.length - 1; i >= 0; i--) {
        const item = state.tabs.list[i];
        if (item.closable && item.name !== tab.name)
          state.tabs.list.splice(i, 1);
      }

      if (tab.name !== state.tabs.currentTab.name) {
        router.push(tab.path);
      }
    },
    removeAll(state) {
      for (let i = state.tabs.list.length - 1; i >= 0; i--) {
        const item = state.tabs.list[i];
        if (item.closable) state.tabs.list.splice(i, 1);
      }
    },
  },
  actions: {
    addTab({ commit }, tab) {
      commit("addTab", tab);
    },
    changeTab({ commit }, tab) {
      commit("changeTab", tab);
    },
    removeTab({ commit }, tab) {
      commit("removeTab", tab);
    },
    removeOther({ commit }, tab) {
      commit("removeOther", tab);
    },
    removeAll({ commit }) {
      commit("removeAll");
    },
  },
  getters: {
    tabs: (state) => state.tabs.list,
    currentTab: (state) => state.tabs.currentTab,
    closingTab: (state) => state.tabs.closingTab,
  },
};
