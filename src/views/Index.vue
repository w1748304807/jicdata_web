<template>
  <el-row :gutter="20">
    <el-col :span="4" v-for="o in projects" :key="o.title">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="o.thumb" class="image" />
        <div style="padding: 14px">
          <span>{{ o.title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-link type="text" class="button" :href="o.url">进入系统</el-link>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      currentDate: this.$moment().format("YYYY-MM-DD"),
      projects: [
        {
          title: "ERP系统",
          thumb:
            "https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png",
          description: "",
          url: "",
        },
        {
          title: "不动产管理系统",
          thumb:
            "https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png",
          description: "",
          url: "http://140.179.76.40:16680/",
        },
        {
          title: "投资管理系统",
          thumb:
            "https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png",
          description: "",
          url: "http://172.16.1.29:8081/",
        },
      ],
    };
  },
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>