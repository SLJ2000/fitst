// components/my-tab/my-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      titles:{
        type:Array,
        value:[]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleclick(event){
      const index=event.currentTarget.dataset.index
      console.log(event,index)
      this.setData({
        currentindex:index
      })
      this.triggerEvent('itemclick',{index,title: this.properties.titles[index]},{})
        
     
    }
  }
})
