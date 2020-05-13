
<template>
  <el-table :data="tableData">
    <el-table-column
      v-for="{ prop, label } in colConfigs"
      :key="prop"
      :prop="prop"
      :label="label" width="180" >
    </el-table-column>
  </el-table>
</template>

<script>
 /* eslint-disable */
export default {
  data () {
  const   colConfigs = [
      { prop: 'date', label: '日期' },
      { prop: 'name', label: '姓名' },
      { prop: 'address', label: '地址' }
    ]

    return {
      colConfigs:colConfigs,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }]
    }
  }
}
</script> 