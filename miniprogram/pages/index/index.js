//index.js
const app = getApp()
const DB = wx.cloud.database().collection("list")

Page({
  data: {
   name:'',
   age:''
  },
  handleage(event){
    console.log(event),

    this.setData({
      age:event.detail.value     
    })
    
  },
  handlename(event){
    console.log(event),

    this.setData({
      name:event.detail.value     
    })
  },
  handlesendinput(){
  
    DB.add({
        data:{
         name:this.data.name,
         age:this.data.age
        },
        success(res){
          console.log('添加成功',res)
        },
        fail(res){
          console.log('添加失败',res)
        }
    })
  },
  handleclick(){
    DB.add({
      data:{
        name:"茄子",
        age:38
      },
      success(res){
        console.log("添加成功",res)
      },
      fail(res){
        console.log("添加失败",res)
      }
    })
  }


})
