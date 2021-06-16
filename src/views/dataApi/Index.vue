<template>
  <div class="main-body">
    <el-tabs v-model="activeName">
      <el-tab-pane label="服务配置" name="first">服务配置</el-tab-pane>
      <el-tab-pane label="SQL配置" name="second">
        <CodeEditor />
      </el-tab-pane>
      <el-tab-pane label="数据预览" name="third">数据预览</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {},
};
</script>