// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'wangmanong',
    age:20,
    students:[
      {id:1,name:'111',age:20},
      {id:2,name:'222',age:21},
      {id:3,name:'333',age:22},
      {id:4,name:'444',age:23},
      {id:5,name:'555',age:24}
    ],
    counter:0
  },
  btnClick(){
    //界面不会刷新
    // this.data.counter +=1
    // console.log(this.data.counter)
    this.setData({
      counter:this.data.counter + 1
    })
  },
  btnjClick(){
    this.setData({
      counter:this.data.counter - 1
    })
  },
  //编程范式
  //命令式编程：原生操作DOM
  //声明式编程：Vue/React/Angular
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})