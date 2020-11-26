// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  onUnload:function(){
    //获取首页的页面对象
    //getCurrentPages 获取所有活跃的页面
    const pages = getCurrentPages()
    // console.log(pages)
    const home = pages[pages.length - 2]
    //调用页面对象的方法
    home.setData({
      title:'呵呵呵呵呵'
    })
  },
  backClick(){
    wx.navigateBack({
      delta:1
    })
  }
})