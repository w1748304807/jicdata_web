<template>
  <div>
    <div style="margin: 0px 0px 10px 0px">
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </div>
    <textarea
      ref="codeContainer"
      v-model="code"
      placeholder="按Ctrl键进行代码提示"
      class="codesql"
    />
  </div>
</template>

<script>
import "codemirror/theme/ambiance.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";

const CodeMirror = require("codemirror/lib/codemirror");
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/mode/sql/sql");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/sql-hint");
import sqlFormatter from "sql-formatter";
export default {
  name: "CodeEditor",
  props: {
    code: String,
  },
  data() {
    return {
      editor: null,
    };
  },
  watch: {
    code(newValue) {
      this.$emit("update:value", newValue);
    },
  },
  mounted() {
    this.editor = CodeMirror.fromTextArea(this.$refs.codeContainer, {
      mode: "text/x-mariadb",
      lineWrapping: true,
      foldGutter: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      fullScreen: true,
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      matchBrackets: true,
      extraKeys: { Tab: "autocomplete" },
      hintOptions: {},
    });
  },
  methods: {
    format() {
      let sqlContent = this.editor.getValue();
      this.editor.setValue(sqlFormatter.format(sqlContent));
    },
  },
};
</script>