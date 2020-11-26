// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  showToast(){
    wx.showToast({
      title: '你好啊',
      duration:3000,
      success:function(){
        console.log('弹出成功')
      },
      complete:function(){
        console.log('成败都执行')
      }
    })
  },
  showModal(){
    wx.showModal({
      title: '我是标题',
      content:'我是内容',
      success:function(res){
        if(res.confirm){
          console.log('点击确定')
        }
        if(res.cancel){
          console.log('点击取消')
        }
      }
    })
  },
  showLoading(){
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {
          console.log('加载完成')
        },
      })
    }, 1000);
  },
  showAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'red',
      success:function(res){
        console.log(res)
      }
    })
  },
  onShareAppMessage:function(options){
    return {
      title:'你好啊',
      page:'/pages/about/about',
      imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606411742593&di=a87b97a3f30c96e98107af35d9d422f1&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_water_img%2F19%2F03%2F11%2Fab8cada0f0d17873deb389d8537115dc.jpg'
    }
  }
})