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
  }


})
