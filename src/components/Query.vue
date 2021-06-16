<template>
  <el-form
    :model="data"
    label-position="right"
    label-width="120px"
    class="query-box"
  >
    <el-row :gutter="10">
      <el-col
        :span="6"
        v-for="(o, index) in maxShowItems"
        :key="items[index].name"
      >
        <el-form-item :label="items[index].label">
          <el-input
            v-model="data[items[index].name]"
            :placeholder="items[index].placeholder"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label-width="20px">
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="handleReset">重置</el-button>
          <el-button
            @click="toggleAdvanced"
            type="text"
            :icon="advanced ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"
            plain
            >{{ advanced ? "折叠" : "展开" }}</el-button
          >
        </el-form-item>
      </el-col>
      <template v-if="advanced">
        <el-col :span="6" v-for="item in items.slice(3)" :key="item.name">
          <el-form-item :label="item.label">
            <el-input
              v-model="data[item.name]"
              :placeholder="item.placeholder"
            ></el-input>
          </el-form-item>
        </el-col> </template
    ></el-row>
  </el-form>
</template>
<script>
export default {
  name: "Query",
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      advanced: false,
    };
  },
  computed: {
    maxShowItems: function () {
      return Math.min(3, this.items.length);
    },
  },
  methods: {
    toggleAdvanced() {
      this.advanced = !this.advanced;
    },
    handleQuery() {
      this.$emit("query", this.data);
    },
    handleReset() {
      for (const key in this.data) {
        this.data[key] = null;
      }
      this.$emit("reset", this.data);
    },
  },
};
</script> 

<style>
.query-box {
  padding: 10px;
}
</style>