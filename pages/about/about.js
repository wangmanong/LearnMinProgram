// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['流行','新款','精选']
  },
  handleItemClick(event){
    const index = event.detail.index
    console.log(index)
  }
})