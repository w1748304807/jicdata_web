<template>
  <div>
    <div class="tab-header">
      <el-tag
        v-for="tab in tabs"
        :key="tab.name"
        v-bind:class="{ active: currentTab && currentTab.name === tab.name }"
        :closable="tab.closable"
        @click="changeTab(tab)"
        @close="removeTab(tab)"
        @contextmenu.native.prevent="onContextmenu($event, tab)"
      >
        <i :class="tab.icon" style="font-size: 14px" v-if="tab.icon" />
        {{ tab.title }}
      </el-tag>
    </div>
    <div class="tab-body">
      <transition name="tab-fade" mode="out-in">
        <keep-alive :exclude="closingTab && closingTab.name">
          <router-view
        /></keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MultiTabs",
  computed: {
    ...mapGetters(["tabs", "currentTab", "closingTab"]),
  },
  methods: {
    changeTab(tab) {
      this.$store.dispatch("changeTab", tab);
    },
    removeTab(tab) {
      this.$store.dispatch("removeTab", tab);
    },
    removeOther(tab) {
      this.$store.dispatch("removeOther", tab);
    },
    removeAll() {
      this.$store.dispatch("removeAll");
    },
    onContextmenu(event, tab) {
      if (!tab.closable) return;

      const that = this;
      this.$contextmenu({
        items: [
          {
            label: "关闭",
            onClick: () => {
              that.removeTab(tab);
            },
          },
          {
            label: "关闭其它",
            onClick: () => {
              that.removeOther(tab);
            },
          },
          {
            label: "关闭所有",
            onClick: () => {
              that.removeAll();
            },
          },
        ],
        event,
        zIndex: 3,
        minWidth: 230,
      });
      return false;
    },
  },
};
</script>

<style>
.tab-header {
  margin: 2px 0px 0px 0px;
  padding: 0px 0px 0px 4px;
  border-bottom: solid 1px #e6e6e6;
  background-color: #ffffff;
}

.tab-header .active {
  background-color: #f0f0f0 !important;
}

.tab-header .el-tag {
  cursor: pointer;
  border-color: #e6e6e6;
  border-radius: 0px;
  margin: 0px -1px -1px 0px;
  padding: 0px 10px;
  height: 36px !important;
  line-height: 36px !important;
  background-color: transparent;
  color: #000000;
  font-size: 14px;
}

.tab-header .el-tag__close {
  color: #000000 !important;
}

.tab-body {
  padding: 15px;
}

.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.3s ease;
}
.tab-fade-enter,
.tab-fade-leave-to {
  opacity: 0;
}
</style>