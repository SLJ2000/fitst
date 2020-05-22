//index.js
const app = getApp()

Page({
  data: {
    titles:['衣服','裤子','鞋子','帽子']
  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchEnd(){
    console.log('handleTouchEnd')
  },
  handleTap(){
    console.log('handleTap')
  },
  handleLongPress(){
    console.log('handleLongPress')
  },
  outer(event){
    console.log(event)
  },
  inner(event){
    console.log(event)
  },
  handleitemclick(event){
    console.log(event)
    const dataset = event.currentTarget.dataset
    const title = dataset.item
    const index = dataset.index
    console.log(index,title)
  },
  // 事件冒泡和事件捕获
  handlecaptureview1(){
    console.log('handlecaptureview1')
  },
  handlebindview1(){
    console.log('handlebindview1')
  },
  handlecaptureview2(){
    console.log('handlecaptureview2')
  },
  handlebindview2(){
    console.log('handlebindview2')
  },
  handlecaptureview3(){
    console.log('handlecaptureview3')
  },
  handlebindview3(){
    console.log('handlebindview3')
  },

})
