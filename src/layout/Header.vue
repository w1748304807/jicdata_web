<template>
  <div>
    <div class="header-logo">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA3CAYAAABzYHhkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2YzNkMDJjMS05YzYzLTk5NGItODYzMC1iZjhmN2VhZTZiOGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDc4RDQ4RTFFRkUxMTFFOUE1ODdDNDlDNkVBMjQ3N0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDc4RDQ4RTBFRkUxMTFFOUE1ODdDNDlDNkVBMjQ3N0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQyOTVEODEyRUZERTExRTk4OTRFQjMyRjFFRDcwN0JCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQyOTVEODEzRUZERTExRTk4OTRFQjMyRjFFRDcwN0JCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wFITtwAABXFJREFUeNrsWltoXEUY/mfOOXtN9pbENGnSKBqlsShiK9EXY5/6UOyjFi/EYEoqlWJeBCmtCgl50ZdUal/UF2kVkUZBQ19aELEiJQUV2tjURm2bpEl2z17PdcZ/kt2ye7LJbrSaLJyBZc/Z8/8z33z/Zf45s+Rj2syhhprJMvDQSy9/SqFGW80Cl8vNxAOkKmUhZQAHO38t9FbTZHlZ0aS8bLU+qqMkXwu4AJ0ANnGVm2NU9F2hIWD9fqI81whSF3au/cz1EybwDHFYEkGbIaAdDxKlV0xsAdiFKW5+ixPwrtU/guUoQ7uIp08BUhKMJcAFC9Pc/GGUJ96p1mQDEO5qI4EuFezcSa4OpYEtlJPbTjy7jkCsV7B9hRvnP+Tqu9X070NMI6RxTwPQZquId9nBIESItO0J8D4pAwngQ/kG2NPIzuW74JbkH8YWceiuBI5mhntB3jtIonvFfQDlv+KZk1NgDmz64BSs5/ImIUuTcdOhC7yWgPOKPr4Z2gAND7eB/Awmi5xgtg5op+3AvimBd4Dy6AOgdBdWWrPSyrlpKkDgXIA21igK3OB0gbvAXeAucBe4C9wF7gJ3gbvAN66t2EgU3uuJ5sdvZQNAeYFQMbaUv9cq7YCEYBzY9Ulu/oSmkLGD4BRYl/5v4Je4/v0M2GInlEOApIt4diOZ4VXfHSrL7w7HP+CJgxvpBqd4aqhw7QNCRkjjRT/Qx4rfHZbzcbIJXZq4WcUF7gIH+K+OD4v7ZevUY2suQOJV11YiP/0ihEYlqLz22KhyH1F2isMlzPmB50n9ewbwrPMMCOWsBqCtIp0xTBCoswfHCEoVzpnEGRACFItRB3PwSZwHtNJy7qyKdpGjBGgzbzrfKqduZBn80gpYYMu7jlO3XNHKWTigLXsikVmnt5C8PXNV6llLn3/nkbJUY0HJ89aVVWA/1hJwE1gALXtVfpPNd9cS8Cxy3sdSIGeBQ601kRCoI8hkAiCtq9pZXY4SuHvlPCmXx/0e5ZGmUP0xkXQIIQHDsq/MxNU3ihcNryJ3bYmERvAH07Lt9GIqO6SZ5mS5QRrqgwN1Pu8+zrnJONyeU1NHDMu6VSyDz3eE/P7+m/HE4WUMnu56v3cXyo6WrJCEQEs0PCxJdAf2Z8/Ox88ixhPUo8gd+ODzrGGcQ7C9s4nkwXROG3MyL1Hazjhvv7WoDorUfU+4/ng50LG64IFwwH8IARy+GVf34yTVrbHIZ6gPjv6aFEXafQcgJa2KLO0suyNSlJ5EJju2mM6+H6vzH8VJ99BoMHAAGb42n0wfN22W0k3relrTz/HldFsyecZ42rTtac2yJihd6TTIBIQCvlcXUpmhnGFOWjbL3E6m30LZZp9H6XGuisBL44vz8qUACjLTYpMZTf/O5mxReAVFF9iuW9bvRYPLyEZ0hTLnOsp2tjfGxiIBfx8y+tqK/SrFDimN4eSv3SlKONfws4C62xw+W/WGBceGSND/ekdTwziS/Ct6xFmKrNzwynJrQQj9vbOtIXoGJ+BxsCmj0h9pTTuNQwbQBVLOAdAimKR4GkG2OII0hIEx52ARKwXCi32ZrFGtovz0fDL1tqpb+5EIi6LvfORT5Mfr/b5n8wA9aNpImUCWUFmLp7Oncrr5dUsscpoI3ygGjsxkdOOLaF1gUKbUJ35DpvpFJZHVjfPFspphTqNp6zAoHxb3QZ/3KZvz2bIlLCU0mdW+wb4v5KsSzOO6MTGXTB/CTHAMB3kFZx7EDPALiH8ilZpLRev8Jq7RTY62xsJfhvy+fWo2d6ZYDn16GAO3ob0xOm4zpgp/RPkX8ForlkPr/YlgRrdEQ5/gs79EjTYTT/aXA46yl5GUEgv/LcAAB5VNg7R71UEAAAAASUVORK5CYII="
      />
      <span class="title">建投数据</span>
    </div>
    <div class="header-main"></div>
    <div class="header-avator">
      <span class="item">
        <el-input
          placeholder="请输入内容搜索"
          suffix-icon="el-icon-search"
          v-model="query"
        >
        </el-input>
      </span>
      <span class="item"
        ><el-dropdown placement="bottom">
          <span class="el-dropdown-link">
            <i class="el-icon-user-solid"></i>{{ user && user.displayName }}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown></span
      >
      <span class="item" @click="toggleFullScreen()"
        ><i class="el-icon-full-screen"
      /></span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      query: "",
      fullScreen: false,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    toggleFullScreen() {
      if (this.fullScreen) {
        this.exitFullscreen();
      } else {
        this.launchFullscreen();
      }
    },
    launchFullscreen() {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      this.fullScreen = true;
    },
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      this.fullScreen = false;
    },
  },
};
</script>

<style scoped>
.header-logo {
  display: flex;
  align-items: center;
  width: 220px;
  justify-content: flex-start;
}

.header-logo .title {
  display: inline-block;
  font-weight: 700;
  font-size: 28px;
  line-height: 60px;
  font-family: "\5B8B\4F53";
}

.header-logo img {
  width: 30px;
  height: 40px;
  margin: 10px 10px 10px 0px;
  vertical-align: middle;
}

.header-avator {
  position: absolute;
  top: 0;
  right: 8px;
}

.header-avator .item {
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  color: #000000;
  background: transparent;
  line-height: 56px;
  height: 60px;
  margin: 0px 5px;
  padding: 0px 10px;
  cursor: pointer;
}

.header-avator .item i {
  font-size: 24px;
  margin: 0px 5px;
  vertical-align: middle !important;
}
</style>