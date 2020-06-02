//app.js
App({
  onLaunch: function () {
    // 初始化云开发数据库
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // 云开发设置里的ID
        env:'slj-byugk'
        
      })
    }

    this.globalData = {}
  }
})
