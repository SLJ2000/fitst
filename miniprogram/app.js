//app.js注册一个小程序
App({
  // 小程序再后台存活两个小时，如果超过时间，会重新初始化
  // 小程序初始化完成调用onLaunch
  onLaunch: function () {
    console.log('小程序初始化完成!')
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}
    // 获取用户信息
    wx.getUserInfo({
      complete: (res) => {
        console.log(res)
      },
    })
  },
  // 小程序界面加载时显示
  onShow:function(options){
    console.log('界面显示出来时调用onShow'),
    console.log(options)
  },
  onHide:function(){
    console.log('小程序关闭时调用')
  },
  onError:function(){
    console.log('小程序发生错误时执行')
  },
  // 全局数据
  globalData:{
    name:'WDNMD',
    age:18
  }


})
