<script>
import { TableColumn } from "element-ui";
const renderCell = {
  slots: function (h, data) {
    let renderCell = () => {
      return this.renderCell ? this.renderCell(data) : "";
    };
    return <div class="cell">{renderCell(h, data)}</div>;
  },
};
export default {
  name: "TableColumn",
  extends: TableColumn,
  props: {
    prop: {
      type: [String, Number],
    },
    cellType: {
      type: String,
      validator: function (value) {
        let valid = ["text", "input", "slots"].includes(value);
        !valid && console.error(`tableColumn组件不适配 ${value} 类型`);
        return valid;
      },
    },
    renderCell: {
      type: Function,
    },
  },
  created() {
    if (renderCell[this.cellType]) {
      this.columnConfig.renderCell = renderCell[this.cellType].bind(this);
    }
  },
};
</script>