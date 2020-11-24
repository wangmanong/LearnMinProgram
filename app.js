//注册小程序事例
App({

  //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function () {

  },

  //小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    // console.log(options)
    //1.判断小程序的进入场景
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
    //2.获取用户信息，并且将获取到的用户信息传递给服务器
    // wx.getUserInfo({
    //   success:function(res) {
    //     console.log(res)
    //   }
    // })
  },

  // 当小程序从前台进入后台，会触发 onHide
  onHide: function () {

  },

  //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  onError: function (msg) {

  },
  //定义全局数据
  golbalData:{
    name:'hahaha',
    age:20
  }
})
