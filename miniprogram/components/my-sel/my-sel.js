// components/my-sel/my-sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    number:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    incrementnumber(num){
      this.setData({
        number:this.data.number + num
      })
    }
  }
})
