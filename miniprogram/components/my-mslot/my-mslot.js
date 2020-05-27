// components/my-mslot/my-mslot.js
Component({

  // 定义组件的配置选项
 options:{
  //  styleIsolation: shared
   multipleSlots:true
 },
// w外界给组件传入额外的样式
externalClasses:[],
// 可以监听properties/的变化
observers:{
  counter: function(newVal){

  }
},


//  让使用者可以给组件传入数据
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
// ---------组件中监听生命周期函数
// 监听组件生命周期
lifetimes:{
  created(){
    console.log('监听组件创建出来时')
  },
  attached(){
    console.log('监听组件被添加出来时')
  },  
  ready(){
    console.log('监听组件被渲染出来时')
  },
  moved(){
    console.log('组件被移动到另一个节点时')
  },
  detached(){
    console.log('组件被移除掉')
  },
},
// 监听组件所在页面的页面生命周期
pageLifetimes:{
  show(){
    console.log('监听组件所在页面显示出来时')
  },
  hide(){
    console.log('监听组件所在页面隐藏时')
  },
  resize(){
    console.log('监听组件所在页面尺寸变化时')
  }
}



})
