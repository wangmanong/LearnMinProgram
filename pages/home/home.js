//使用全局数据
//getData()获取App产生的示例对象
// const app = getApp()
// const name = app.golbalData.name
// const age = app.golbalData.age

//注册一个页面
Page({
  //---------3.监听wxml中相关的一些事件-------------
  //获取用户信息方法二--点击获取
  getInfo(event){
    console.log(event)
  },
  bandleViewClick(){
    this.setData({
      message : '哈哈哈哈'
    })
  },
//------------2.初始化数据-----------------
  data:{
    message:'你好啊',
    list:[]
  },
  //-----------1.监听页面的生命周期函数---------------
  //页面被加载时
  onLoad(){
    console.log('onLoad')
  },
  //页面显示出来时
  onShow(){
    console.log('onShow')
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/recommend',
      success:(res) => {
        // console.log(res)
        const data = res.data.data.list;
        this.setData({
          list : data
        })
      }
    })
  },
  //页面初次渲染完成时
  onReady(){
    console.log('onReady')
  },
  onHide(){
    console.log('onHide')
  },
  //页面被卸载掉时
  onUnload(){
    console.log('onUnload')
  },

  //-----------4.其他事件------------
  //监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动至底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  //监听下拉
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
})