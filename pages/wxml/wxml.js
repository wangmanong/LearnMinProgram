// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好啊',
    firstname:'王',
    lastname:'芹',
    age:20,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:false,
    score:45,
    movies:['西游记','红楼梦','水浒传','三国演义']
  },
  onLoad(){
    setInterval(() => {
      this.setData({
        nowTime : new Date().toLocaleString()
      },1000)
    })
  },
  btnClick(){
    this.setData({
      isActive : !this.data.isActive
    })
  },
  showClick(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  scoreClick(){
    this.setData({
      score:this.data.score+=5
    })
  }
})