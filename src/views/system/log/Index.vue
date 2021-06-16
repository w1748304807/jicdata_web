<template>
  <div class="main-body">
    <Table
      ref="logTable"
      stripe
      border
      highlight-current-row
      :data="tableData"
      :total="1000"
      @change="handleTableChange"
      @row-click="handleRowClick"
    >
      <TableColumn v-bind="item" v-for="(item, key) in columns" :key="key" />
    </Table>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          label: "日期",
          width: "180",
          prop: "date",
        },
        {
          label: "姓名",
          width: "180",
          prop: "name",
        },
        {
          label: "地址",
          prop: "address",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    setCurrent(row) {
      this.$refs["logTable"].getTable().setCurrentRow(row);
    },
    handleTableChange(pageIndex, pageSize) {
      console.log("pageIndex: ", pageIndex, "pageSize: ", pageSize);
    },
    handleRowClick(row, column, event) {
      console.log("row: ", row, "column", column, "event", event);
    },
  },
};
</script>