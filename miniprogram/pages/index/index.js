Page({
  data:{
    name:'吃屎梁非凡',
    age:18,
    players:[
      {id: 1, name:'kobe', age:18},
      {id: 2, name:'LBJ', age:28},
      {id:3, name:'curry', age:8}
    ],
    counter:10
    
  },
  andCounter(){
    console.log('按钮发生了点击'),
    this.setData({
      counter:this.data.counter + 1
    })

  },
  reduceCounter(){
    console.log('按钮发生了点击'),
    this.setData({
      counter:this.data.counter - 1
    })

  }
})