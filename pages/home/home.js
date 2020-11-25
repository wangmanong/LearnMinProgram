// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','裤子','鞋子']
  },
  btnClick(){
    console.log('点击事件')
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
  handleLongpress(){
    console.log('handleLongpress')
  },
  handleEventClick(event){
    console.log("------------------",event)
  },
  handleEventEnd(event){
    console.log("++++++++++++++++++++",event)
  },
  handleOuter(event){
    console.log("++",event)
  },
  handleInner(event){
    console.log("----",event)
  },
  itemClick(event){
    // console.log(event)
    const dataset = event.currentTarget.dataset;
    const index = dataset.index;
    const title = dataset.item;
    console.log(index,title)
  },

  // 事件冒泡和事件捕获
  handleCaptureView1(){
    console.log('handleCaptureView1')
  },
  handleBindView1(){
    console.log('handleBindView1')
  },
  handleCaptureView2(){
    console.log('handleCaptureView2')
  },
  handleBindView2(){
    console.log('handleBindView2')
  },
  handleCaptureView3(){
    console.log('handleCaptureView3')
  },
  handleBindView3(){
    console.log('handleBindView3')
  },
})