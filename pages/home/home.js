// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'哈哈哈哈'
  },

  btnClick(){
    wx.navigateTo({
      url: '/pages/detail/detail?title=你好啊',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})