<template>
    <div class="area-choose">
        <el-button @click="handleShowDialog">显示弹框</el-button>
        <el-dialog
            title="选择区域"
            :visible.sync="dialogVisible"
            width="40%"
           :close-on-click-modal="false"
           :destroy-on-close="true"
           >
            <div class="area_outside" v-for="(all,key,i) in res.data" :key="i">
                <div class="area_all">
                    <el-checkbox :indeterminate="all.isIndeterminate" v-model="all.checkAll" @change="handleCheckAllChange(all.checkAll,all.name)">
                        {{all.name}}
                    </el-checkbox>
                </div>

                    <el-checkbox-group v-model="CheckedProvince" @change="handleCheckedProvinceChange">
                        <el-checkbox v-for="(province,key,i) in all.childer" :key="i" :label="province.name"  :indeterminate="province.isIndeterminate"  v-model="province.checkAll">
                          {{province.name}}
                           <i @click="handleCaret" style="color:red;" class="el-icon-caret-bottom"></i>
                        </el-checkbox>
                    </el-checkbox-group>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
const ProvinceOptions = ['上海', '北京', '广州', '深圳']
export default {
  data () {
    return {
      checkAll: false,
      CheckedProvince: [],
      Provinces: ProvinceOptions,
      isIndeterminate: true, // 当checkbox全选的时候，它为false,chackAll为true
      dialogVisible: false,
      res: {
        code: 0,
        msg: '\u64cd\u4f5c\u6210\u529f',
        data: {
          100000: {
            id: 100000,
            parent_id: 0,
            type: 0,
            name: '\u534e\u5317',
            childer: {
              110000: {
                id: 110000,
                parent_id: 100000,
                type: 1,
                name: '\u5317\u4eac',
                childer: {
                  110100: {
                    id: 110100,
                    parent_id: 110000,
                    type: 2,
                    name: '\u5317\u4eac\u5e02',
                    childer: {
                      110101: {
                        id: 110101,
                        parent_id: 110100,
                        type: 3,
                        name: '\u4e1c\u57ce\u533a'
                      },
                      110102: {
                        id: 110102,
                        parent_id: 110100,
                        type: 3,
                        name: '\u897f\u57ce\u533a'
                      },
                      110105: {
                        id: 110105,
                        parent_id: 110100,
                        type: 3,
                        name: '\u671d\u9633\u533a'
                      },
                      110106: {
                        id: 110106,
                        parent_id: 110100,
                        type: 3,
                        name: '\u4e30\u53f0\u533a'
                      },
                      110107: {
                        id: 110107,
                        parent_id: 110100,
                        type: 3,
                        name: '\u77f3\u666f\u5c71\u533a'
                      },
                      110108: {
                        id: 110108,
                        parent_id: 110100,
                        type: 3,
                        name: '\u6d77\u6dc0\u533a'
                      },
                      110109: {
                        id: 110109,
                        parent_id: 110100,
                        type: 3,
                        name: '\u95e8\u5934\u6c9f\u533a'
                      },
                      110111: {
                        id: 110111,
                        parent_id: 110100,
                        type: 3,
                        name: '\u623f\u5c71\u533a'
                      },
                      110112: {
                        id: 110112,
                        parent_id: 110100,
                        type: 3,
                        name: '\u901a\u5dde\u533a'
                      },
                      110113: {
                        id: 110113,
                        parent_id: 110100,
                        type: 3,
                        name: '\u987a\u4e49\u533a'
                      },
                      110114: {
                        id: 110114,
                        parent_id: 110100,
                        type: 3,
                        name: '\u660c\u5e73\u533a'
                      },
                      110115: {
                        id: 110115,
                        parent_id: 110100,
                        type: 3,
                        name: '\u5927\u5174\u533a'
                      },
                      110116: {
                        id: 110116,
                        parent_id: 110100,
                        type: 3,
                        name: '\u6000\u67d4\u533a'
                      },
                      110117: {
                        id: 110117,
                        parent_id: 110100,
                        type: 3,
                        name: '\u5e73\u8c37\u533a'
                      },
                      110228: {
                        id: 110228,
                        parent_id: 110100,
                        type: 3,
                        name: '\u5bc6\u4e91\u53bf'
                      },
                      110229: {
                        id: 110229,
                        parent_id: 110100,
                        type: 3,
                        name: '\u5ef6\u5e86\u53bf'
                      }
                    }
                  }
                }
              },
              120000: {
                id: 120000,
                parent_id: 100000,
                type: 1,
                name: '\u5929\u6d25',
                childer: {
                  120100: {
                    id: 120100,
                    parent_id: 120000,
                    type: 2,
                    name: '\u5929\u6d25\u5e02',
                    childer: {
                      120101: {
                        id: 120101,
                        parent_id: 120100,
                        type: 3,
                        name: '\u548c\u5e73\u533a'
                      },
                      120102: {
                        id: 120102,
                        parent_id: 120100,
                        type: 3,
                        name: '\u6cb3\u4e1c\u533a'
                      },
                      120103: {
                        id: 120103,
                        parent_id: 120100,
                        type: 3,
                        name: '\u6cb3\u897f\u533a'
                      },
                      120104: {
                        id: 120104,
                        parent_id: 120100,
                        type: 3,
                        name: '\u5357\u5f00\u533a'
                      }
                    }
                  }
                }
              }
            }
          },
          200000: {
            id: 200000,
            parent_id: 0,
            type: 0,
            name: '\u4e1c\u5317',
            childer: {
              210000: {
                id: 210000,
                parent_id: 200000,
                type: 1,
                name: '\u8fbd\u5b81\u7701',
                childer: {
                  210100: {
                    id: 210100,
                    parent_id: 210000,
                    type: 2,
                    name: '\u6c88\u9633\u5e02',
                    childer: {
                      210102: {
                        id: 210102,
                        parent_id: 210100,
                        type: 3,
                        name: '\u548c\u5e73\u533a'
                      },
                      210103: {
                        id: 210103,
                        parent_id: 210100,
                        type: 3,
                        name: '\u6c88\u6cb3\u533a'
                      },
                      210104: {
                        id: 210104,
                        parent_id: 210100,
                        type: 3,
                        name: '\u5927\u4e1c\u533a'
                      },
                      210105: {
                        id: 210105,
                        parent_id: 210100,
                        type: 3,
                        name: '\u7687\u59d1\u533a'
                      },
                      210106: {
                        id: 210106,
                        parent_id: 210100,
                        type: 3,
                        name: '\u94c1\u897f\u533a'
                      },
                      210111: {
                        id: 210111,
                        parent_id: 210100,
                        type: 3,
                        name: '\u82cf\u5bb6\u5c6f\u533a'
                      },
                      210112: {
                        id: 210112,
                        parent_id: 210100,
                        type: 3,
                        name: '\u6d51\u5357\u533a'
                      },
                      210113: {
                        id: 210113,
                        parent_id: 210100,
                        type: 3,
                        name: '\u6c88\u5317\u65b0\u533a'
                      },
                      210114: {
                        id: 210114,
                        parent_id: 210100,
                        type: 3,
                        name: '\u4e8e\u6d2a\u533a'
                      },
                      210122: {
                        id: 210122,
                        parent_id: 210100,
                        type: 3,
                        name: '\u8fbd\u4e2d\u53bf'
                      },
                      210123: {
                        id: 210123,
                        parent_id: 210100,
                        type: 3,
                        name: '\u5eb7\u5e73\u53bf'
                      },
                      210124: {
                        id: 210124,
                        parent_id: 210100,
                        type: 3,
                        name: '\u6cd5\u5e93\u53bf'
                      },
                      210181: {
                        id: 210181,
                        parent_id: 210100,
                        type: 3,
                        name: '\u65b0\u6c11\u5e02'
                      },
                      210182: {
                        id: 210182,
                        parent_id: 210100,
                        type: 3,
                        name: '\u4e1c\u9675\u533a'
                      }
                    }
                  },
                  210200: {
                    id: 210200,
                    parent_id: 210000,
                    type: 2,
                    name: '\u5927\u8fde\u5e02',
                    childer: {
                      210202: {
                        id: 210202,
                        parent_id: 210200,
                        type: 3,
                        name: '\u4e2d\u5c71\u533a'
                      },
                      210203: {
                        id: 210203,
                        parent_id: 210200,
                        type: 3,
                        name: '\u897f\u5c97\u533a'
                      },
                      210204: {
                        id: 210204,
                        parent_id: 210200,
                        type: 3,
                        name: '\u6c99\u6cb3\u53e3\u533a'
                      },
                      210211: {
                        id: 210211,
                        parent_id: 210200,
                        type: 3,
                        name: '\u7518\u4e95\u5b50\u533a'
                      },
                      210212: {
                        id: 210212,
                        parent_id: 210200,
                        type: 3,
                        name: '\u65c5\u987a\u53e3\u533a'
                      },
                      210213: {
                        id: 210213,
                        parent_id: 210200,
                        type: 3,
                        name: '\u91d1\u5dde\u533a'
                      },
                      210224: {
                        id: 210224,
                        parent_id: 210200,
                        type: 3,
                        name: '\u957f\u6d77\u53bf'
                      },
                      210281: {
                        id: 210281,
                        parent_id: 210200,
                        type: 3,
                        name: '\u74e6\u623f\u5e97\u5e02'
                      },
                      210282: {
                        id: 210282,
                        parent_id: 210200,
                        type: 3,
                        name: '\u666e\u5170\u5e97\u5e02'
                      },
                      210283: {
                        id: 210283,
                        parent_id: 210200,
                        type: 3,
                        name: '\u5e84\u6cb3\u5e02'
                      }
                    }
                  },
                  210300: {
                    id: 210300,
                    parent_id: 210000,
                    type: 2,
                    name: '\u978d\u5c71\u5e02',
                    childer: {
                      210302: {
                        id: 210302,
                        parent_id: 210300,
                        type: 3,
                        name: '\u94c1\u4e1c\u533a'
                      },
                      210303: {
                        id: 210303,
                        parent_id: 210300,
                        type: 3,
                        name: '\u94c1\u897f\u533a'
                      },
                      210304: {
                        id: 210304,
                        parent_id: 210300,
                        type: 3,
                        name: '\u7acb\u5c71\u533a'
                      },
                      210311: {
                        id: 210311,
                        parent_id: 210300,
                        type: 3,
                        name: '\u5343\u5c71\u533a'
                      },
                      210321: {
                        id: 210321,
                        parent_id: 210300,
                        type: 3,
                        name: '\u53f0\u5b89\u53bf'
                      },
                      210323: {
                        id: 210323,
                        parent_id: 210300,
                        type: 3,
                        name: '\u5cab\u5ca9\u6ee1\u65cf\u81ea\u6cbb\u53bf'
                      },
                      210381: {
                        id: 210381,
                        parent_id: 210300,
                        type: 3,
                        name: '\u6d77\u57ce\u5e02'
                      }
                    }
                  },
                  210400: {
                    id: 210400,
                    parent_id: 210000,
                    type: 2,
                    name: '\u629a\u987a\u5e02',
                    childer: {
                      210402: {
                        id: 210402,
                        parent_id: 210400,
                        type: 3,
                        name: '\u65b0\u629a\u533a'
                      },
                      210403: {
                        id: 210403,
                        parent_id: 210400,
                        type: 3,
                        name: '\u4e1c\u6d32\u533a'
                      },
                      210404: {
                        id: 210404,
                        parent_id: 210400,
                        type: 3,
                        name: '\u671b\u82b1\u533a'
                      },
                      210411: {
                        id: 210411,
                        parent_id: 210400,
                        type: 3,
                        name: '\u987a\u57ce\u533a'
                      },
                      210421: {
                        id: 210421,
                        parent_id: 210400,
                        type: 3,
                        name: '\u629a\u987a\u53bf'
                      },
                      210422: {
                        id: 210422,
                        parent_id: 210400,
                        type: 3,
                        name: '\u65b0\u5bbe\u6ee1\u65cf\u81ea\u6cbb\u53bf'
                      },
                      210423: {
                        id: 210423,
                        parent_id: 210400,
                        type: 3,
                        name: '\u6e05\u539f\u6ee1\u65cf\u81ea\u6cbb\u53bf'
                      }
                    }
                  }
                }
              },
              220000: {
                id: 220000,
                parent_id: 200000,
                type: 1,
                name: '\u5409\u6797\u7701',
                childer: {
                  220100: {
                    id: 220100,
                    parent_id: 220000,
                    type: 2,
                    name: '\u957f\u6625\u5e02',
                    childer: {
                      220102: {
                        id: 220102,
                        parent_id: 220100,
                        type: 3,
                        name: '\u5357\u5173\u533a'
                      },
                      220103: {
                        id: 220103,
                        parent_id: 220100,
                        type: 3,
                        name: '\u5bbd\u57ce\u533a'
                      },
                      220104: {
                        id: 220104,
                        parent_id: 220100,
                        type: 3,
                        name: '\u671d\u9633\u533a'
                      },
                      220105: {
                        id: 220105,
                        parent_id: 220100,
                        type: 3,
                        name: '\u4e8c\u9053\u533a'
                      },
                      220106: {
                        id: 220106,
                        parent_id: 220100,
                        type: 3,
                        name: '\u7eff\u56ed\u533a'
                      },
                      220112: {
                        id: 220112,
                        parent_id: 220100,
                        type: 3,
                        name: '\u53cc\u9633\u533a'
                      },
                      220113: {
                        id: 220113,
                        parent_id: 220100,
                        type: 3,
                        name: '\u4e5d\u53f0\u533a'
                      },
                      220122: {
                        id: 220122,
                        parent_id: 220100,
                        type: 3,
                        name: '\u519c\u5b89\u53bf'
                      },
                      220182: {
                        id: 220182,
                        parent_id: 220100,
                        type: 3,
                        name: '\u6986\u6811\u5e02'
                      },
                      220183: {
                        id: 220183,
                        parent_id: 220100,
                        type: 3,
                        name: '\u5fb7\u60e0\u5e02'
                      }
                    }
                  },
                  220200: {
                    id: 220200,
                    parent_id: 220000,
                    type: 2,
                    name: '\u5409\u6797\u5e02',
                    childer: {
                      220202: {
                        id: 220202,
                        parent_id: 220200,
                        type: 3,
                        name: '\u660c\u9091\u533a'
                      },
                      220203: {
                        id: 220203,
                        parent_id: 220200,
                        type: 3,
                        name: '\u9f99\u6f6d\u533a'
                      },
                      220204: {
                        id: 220204,
                        parent_id: 220200,
                        type: 3,
                        name: '\u8239\u8425\u533a'
                      },
                      220211: {
                        id: 220211,
                        parent_id: 220200,
                        type: 3,
                        name: '\u4e30\u6ee1\u533a'
                      },
                      220221: {
                        id: 220221,
                        parent_id: 220200,
                        type: 3,
                        name: '\u6c38\u5409\u53bf'
                      },
                      220281: {
                        id: 220281,
                        parent_id: 220200,
                        type: 3,
                        name: '\u86df\u6cb3\u5e02'
                      },
                      220282: {
                        id: 220282,
                        parent_id: 220200,
                        type: 3,
                        name: '\u6866\u7538\u5e02'
                      },
                      220283: {
                        id: 220283,
                        parent_id: 220200,
                        type: 3,
                        name: '\u8212\u5170\u5e02'
                      },
                      220284: {
                        id: 220284,
                        parent_id: 220200,
                        type: 3,
                        name: '\u78d0\u77f3\u5e02'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  mounted () {
    this.handleData()
  },
  methods: {
    handleShowDialog () {
      this.dialogVisible = true
      this.handleData()
    },
    handleCheckAllChange (val, name) {
      // 只有点击全选的时候，它的val才会为true或者false，val为true,将原来的所有数据复制给group里的checkProvinces,否则将[]空数组赋值给checkProvinces
      console.log('val', val, name)
      const provinces = []
      const city = []
      if (val) {
        for (const item in this.res.data) {
          const result = this.res.data[item]
          if (name === result.name) {
            for (const child in result.childer) {
              const myobj = (result.childer)[child]
              this.$set(myobj, 'checkAll', true)
              provinces.push(myobj.name)

              for (const data in myobj.childer) {
                this.$set((myobj.childer)[data], 'checkAll', true)
                city.push((myobj.childer)[data].name)
              }
            }
          }
        }
        this.CheckedProvince = provinces.slice()
        this.$forceUpdate()
        console.log(this.CheckedProvince, 'province')
      }
      this.CheckedProvince = val ? ProvinceOptions : []
      this.isIndeterminate = false // 但凡点了全选，都是确定状态，要么全选，要么不全选，故此时不确定状态isIndeterminate为false。
    },
    handleCheckedProvinceChange (value) {
      console.log('group的value,是一个数组:', value)
      const checkedCount = value.length
      this.checkAll = checkedCount === this.Provinces.length
      // this.isIndeterminate = checkedCount > 0 && checkedCount < this.Provinces.length
    },
    handleData () {
      const data = this.res.data
      for (var i in data) {
        this.$set(data[i], 'checkAll', false)
        this.$set(data[i], 'isIndeterminate', false)
        for (var j in data[i].childer) {
          this.$set(data[i].childer[j], 'checkAll', false)
          this.$set(data[i].childer[j], 'isIndeterminate', false)
        }
      }
      console.log(data, 'data')
    },
    handleProvince (province) {
      console.log('province', province)
    },
    handleCaret () {

    }
  }
}
</script>
<style lang="scss">
    .area-choose{
        .area_outside{
            display: flex;
            justify-content:space-around;
        }
        .area_all{
            .el-checkbox{
                display: block;
            }
        }
        .area_province{
            max-width: 360px;
            .el-checkbox{
                margin-left:20px;
                margin-bottom: 20px;
            }
        }
        //重写dialog的关闭图标样式
        .el-dialog__headerbtn .el-dialog__close {
            color:#000;
            font-size: 28px;
        }
    }
</style>
