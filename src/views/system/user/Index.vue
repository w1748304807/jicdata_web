<template>
  <div class="main-body">
    <Query :items="items" @query="handleQuery" />
    <Table
      ref="logTable"
      stripe
      border
      highlight-current-row
      :data="tableData"
      :total="1000"
      :pagination="true"
    >
      <TableColumn v-bind="item" v-for="(item, key) in columns" :key="key" />
    </Table>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      items: [
        { name: "name", label: "名称", placeholder: "请输入名称" },
        { name: "organ", label: "机构", placeholder: "请输入名称" },
        { name: "address", label: "地址", placeholder: "请输入名称" },
        { name: "name1", label: "名称1", placeholder: "请输入名称" },
        { name: "organ1", label: "机构1", placeholder: "请输入名称" },
        { name: "address1", label: "地址1", placeholder: "请输入名称" },
      ],
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
    handleQuery(query) {
      console.log(query);
    },
  },
};
</script>

<style>
</style>