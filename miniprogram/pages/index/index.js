//index.js
const app = getApp()
const DB = wx.cloud.database().collection("list")

Page({
  data: {
   
   name:'',
   age:'',
   id:''
  },
  // 云函数获取数据库数据
  yunhanshuget(){
    wx.cloud.callFunction({
      name:"shujukuget",
      success(res){
        console.log('获取成功',res)
      },
      fail(res){
        console.log('获取失败',res)
      }
    })
  },
  // 云函数获取用户OPENDID
  getuseropendid(){
    wx.cloud.callFunction({
     name:"getopendid",
      success(res){
        console.log('获取成功',res.result.openid)
      },
      fail(res){
        console.log('获取失败',res)
      }
    })
  },
  // 云函数加法
  cloudfunction(){
    wx.cloud.callFunction({
      name:"add",
      data:{
        a: 1,
        b: 2
      },
      success(res){
        console.log('调用成功',res)
      },
      fail(res){
        console.log('调用失败',res)
      }
    })

  },
  // 更新
  updhandleage(event){
    console.log(event),

    this.setData({
      age:event.detail.value     
    })
    
  },
  updhandlename(event){
    console.log(event),

    this.setData({
      name:event.detail.value     
    })
  },
  updhandleid(event){
    console.log(event)
    this.setData({
      id:event.detail.value
    })
  },
  updata(){
    DB.doc(this.data.id).update({
      data:{
        name:this.data.name,
         age:this.data.age
      },
      success(res){
        console.log('更新成功',res)
      },
      fail(res){
        console.log('更新失败',res)
      }
    })
  },

  // 删除
  handleid(event){
    console.log(event)
    this.setData({
      id:event.detail.value
    })
  },
  deldata(){
    
    DB.doc(this.data.id).remove({
      success(res){
        console.log('删除成功',res)
      },
      fail(res){
        console.log('删除失败',res)
      }

    })
  },
  // 查询
  handleselect(){
    DB.get({
      success(res){
        console.log('查询数据成功',res)
       
      }
    })
  },
  // 增加
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
  // 增加死记录
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
