//index.js注册一个页面
Page({
  data:{
    message:'哈哈',
    list:{name:'leo',age:18,sex:'man'}
  },
  // ES6增强写法不能用
  onLoad:function() {
    console.log('onLoad')
  },
  // 初次渲染页面时
  onReady:function() {
    console.log('onReady')
  },
  onShow:function() {
    console.log('onShow')
  },
  onHide:function() {
    console.log('onHide')
  },
  // 页面被卸载掉的时候
  onUnload:function() {
    console.log('onUnload')
  },
  // 监听页面点击事件
  click:function(){
    console.log('哈哈被点击')
  },
  // 监听页面的滚动事件
  // onPageScroll:function(obj){
  //   console.log(log)
  // },
  //监听页面滚动到底部
  onReachBottom:function(){
    console.log('页面滚动到底部')
  },
  // 监听用户下拉刷星
  onPullDownRefresh:function(){
    console.log('下拉刷星')
  }
})