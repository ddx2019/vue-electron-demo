/* eslint-disable no-undef */
import DataStore from 'lowdb'

import FileSync from 'lowdb/adapters/FileSync'

import path from 'path'

export default {
  install (Vue) {
    Vue.prototype.mydb = function (FileName) {
      const NamePath = path.join(__static, `/json/${FileName}.json`)
      const adpets = new FileSync(NamePath)
      const data = DataStore(adpets)
      return data
    }
  }
}
