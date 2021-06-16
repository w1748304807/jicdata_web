<template>
  <div>
    <el-table
      v-bind="tableProps"
      v-on="tableEvents"
      :header-cell-style="{
        backgroundColor: '#f0f0f0',
      }"
    >
      <slot></slot>
    </el-table>
    <el-pagination
      v-if="pagination"
      class="pagination"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :total="tableTotal"
    >
    </el-pagination>
  </div>
</template>

<script>
import { Table } from "element-ui";

export default {
  name: "Table",
  props: {
    ...Table.props,
    total: Number,
    pagination: Boolean,
  },
  computed: {
    tableProps: function () {
      return this.$props;
    },
    tableEvents: function () {
      return this.$listeners;
    },
    tableTotal: function () {
      return this.total;
    },
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      pageSizes: this.pageSizes,
    };
  },
  methods: {
    clearSelection() {
      this.$children[0].clearSelection();
    },
    toggleRowSelection(row, selected) {
      this.$children[0].toggleRowSelection(row, selected);
    },
    toggleAllSelection() {
      this.$children[0].toggleAllSelection();
    },
    toggleRowExpansion(row, expanded) {
      this.$children[0].toggleRowExpansion(row, expanded);
    },
    setCurrentRow(row) {
      this.$children[0].setCurrentRow(row);
    },
    clearSort() {
      this.$children[0].clearSort();
    },
    clearFilter(columnKey) {
      this.$children[0].clearFilter(columnKey);
    },
    doLayout() {
      this.$children[0].doLayout();
    },
    sort(prop, order) {
      this.$children[0].sort(prop, order);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(this.$children[0]);
      this.$emit("current-change", this.currentPage, this.pageSize);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.$emit("size-change", this.currentPage, this.pageSize);
    },
  },
};
</script>

<style scoped>
.pagination {
  margin: 12px;
  text-align: right;
}
</style>
