<template>
    <div>
        <el-button @click="getData">获取数据</el-button>
        <el-button @click="insertData">插入数据</el-button>
        <el-button @click="updateData">修改数据</el-button>
        <el-button @click="delData">删除数据</el-button>
    </div>
</template>
<script>
export default {
  name: 'lowdb-test',
  methods: {
    getData () {
      const data = this.mydb('db').get('RECORDS').find({ uid: 2 }).value()
      console.log(data)
    },
    insertData () {
      this.mydb('db').get('RECORDS').push({ uid: 4, name: 'xxx', info: '新纪录' }).write()
    },
    updateData () {
      this.mydb('db').get('RECORDS').find({ uid: 1 }).assign({ title: 'Lowdb' }).write()
    },
    delData () {
      this.mydb('db').get('RECORDS').remove({ uid: 1 }).write()
    }
  }
}
</script>
