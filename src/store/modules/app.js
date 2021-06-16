export default {
  state: {
    user: {
      displayName: "建投数据",
    },
    menus: [],
    buttons: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setMenus(state, menus) {
      state.menus = menus;
    },
    setButtons(state, buttons) {
      state.buttons = buttons;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    setMenus({ commit }, menus) {
      commit("setMenus", menus);
    },
    setButtons({ commit }, buttons) {
      commit("setMenus", buttons);
    },
  },
  getters: {
    user: (state) => state.user,
    menus: (state) => state.menus,
    buttons: (state) => state.buttons,
  },
};
