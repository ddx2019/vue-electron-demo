<template>
    <div class="layout">
      <el-table :data="res" >
        <el-table-column prop="name">
          <template slot-scope="scope">
            <div class="tab_header">
              <span style="font-weight:600;">{{scope.row.name}}</span>
              <div class="operate">
                <span @click="handleEdit(scope.$index, scope.row)">修改</span>
                <span @click="handleDelete(scope.$index, scope.row)">删除</span>
              </div>
            </div>

            <!-- 这里要实现 多个表格共用一个表头，故需做判断，当表格要渲染的数据为default这个数组的时候，才显示表头的label值 -->
            <!-- 注意：当label无值的时候，还是会占用空间，故当前表格在页面上会出现一个代表表头的空行，需要手动更改（重写）Element表格的 thead样式 -->

            <div v-for="item in (scope.row.ext)" :key="item.id">
              <el-table :data="item" border :class="item!==scope.row.ext.default?'tab-thead-style':''"  style="box-sizing: border-box;border-top:none;" :span-method="objectSpanMethod">
                <el-table-column :label="item===scope.row.ext.default?'运送到':''" prop="area"></el-table-column>
                <el-table-column :label="item===scope.row.ext.default?'首重':''" prop="weight"></el-table-column>
                <el-table-column :label="item===scope.row.ext.default?'运费':''"   prop="first_price"></el-table-column>
                <el-table-column :label="item===scope.row.ext.default?'续重':''"  prop="weight_incre"></el-table-column>
                <el-table-column :label="item===scope.row.ext.default?'最终运费':''"  prop="extend_price"></el-table-column>
              </el-table>
            </div>

          </template>
        </el-table-column>
      </el-table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      // res 参考的是后端返回的数据格式，
      res: [
        {
          id: 1,
          dealer_id: 0,
          name: '成都运费模板',
          type: 1,
          ext: {
            default: [{ area: '默认', type: 1, region: '1', weight: '首重d', weight_incre: '续重d', first_price: '运费d', extend_price: '最终运费d' }],
            free: [{ area: 'free', type: 1, region: '1', weight: '首重f', weight_incre: '续重f', first_price: '运费f', extend_price: '最终运费f' }, { area: 'free', type: 1, region: '1', weight: '首重f', weight_incre: '续重f', first_price: '运费f', extend_price: '最终运费f' }],
            pay: [{ area: 'pay', type: 1, region: '1', weight: '首重p', weight_incre: '续重p', first_price: '运费p', extend_price: '最终运费p' }, { area: 'pay', type: 1, region: '1', weight: '首重p', weight_incre: '续重p', first_price: '运费p', extend_price: '最终运费p' }, { area: 'pay', type: 1, region: '1', weight: '首重p', weight_incre: '续重p', first_price: '运费p', extend_price: '最终运费p' }]
          }
        },
        {
          id: 2,
          dealer_id: 0,
          name: '重庆运费模板',
          type: 2,
          ext: {
            default: [{ area: '默认1', type: 1, region: '1', weight: '首重d', weight_incre: '续重d', first_price: '运费d', extend_price: '最终运费d' }],
            free: [{ area: 'free1', type: 1, region: '1', weight: '首重f', weight_incre: '续重f', first_price: '运费f', extend_price: '最终运费f' }, { area: 'free', type: 1, region: '1', weight: '首重f', weight_incre: '续重f', first_price: '运费f', extend_price: '最终运费f' }],
            pay: [{ area: 'pay1', type: 1, region: '1', weight: '首重p', weight_incre: '续重p', first_price: '运费p', extend_price: '最终运费p' }, { area: 'pay', type: 1, region: '1', weight: '首重p', weight_incre: '续重p', first_price: '运费p', extend_price: '最终运费p' }, { area: 'pay', type: 1, region: '1', weight: '首重p', weight_incre: '续重p', first_price: '运费p', extend_price: '最终运费p' }, { area: 'pay1', type: 1, region: '1', weight: '首重p', weight_incre: '续重p', first_price: '运费p', extend_price: '最终运费p' }, { area: 'pay', type: 1, region: '1', weight: '首重p', weight_incre: '续重p', first_price: '运费p', extend_price: '最终运费p' }, { area: 'pay', type: 1, region: '1', weight: '首重p', weight_incre: '续重p', first_price: '运费p', extend_price: '最终运费p' }]
          }
        }

      ]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          let maxLen
          this.res.forEach(val => {
            const arr = [val.ext.default.length, val.ext.free.length, val.ext.pay.length]
            arr.sort((a, b) => a - b)// arr数组  按数字大小从小到大排序
            maxLen = arr.pop()// 取出排序后的数组arr中的最后一个元素
          })
          return {
            // 这个rowspan应该据 ext的default,pay,free的长度不同来定，取最大长度
            rowspan: maxLen,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>
<style lang="scss">
.layout{

  .tab_header{
   color:#333;
   padding:0 5px 0 5px;
   height:45px;
   line-height:45px;
   border:1px solid #eee;display:flex;
   justify-content: space-between;
   background:rgb(233, 225, 225);
  }
  .operate{
    span{
      font-size: 14px;
      margin-right: 20px;
      margin-right:20px;
      color:#409EFF;
      cursor: pointer;
    }
  }
  /* 处理多个表格共用一个表头时，表头处出现多余空行的问题 （label置空后还是占据空间问题） */
  .tab-thead-style{
      thead{
          display: none;
      }
  }

}
</style>
