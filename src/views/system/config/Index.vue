<template>
  <div class="main-body">
    <el-form ref="form" :model="form" label-width="80px" label-position="top">
      <el-form-item label="系统Logo">
        <el-input v-model="form.logo"></el-input>
      </el-form-item>
      <el-form-item label="系统名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        logo: "",
        name: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>