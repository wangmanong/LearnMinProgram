const TOKEN = 'token'
App({
  //一旦小程序关闭，内存被回收
  globalData:{
    token:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //1 先从缓冲中取出token
    const token = wx.getStorageSync(TOKEN)
    //2.判断token是否有值
    if(token && token.length !== 0){
      //已经有token，验证是否过期
      this.check_token(token)
    }else{   //没有token，进行登录操作
      this.login()
    }
    
  },
  //验证token是否过期
  check_token(token){
    wx.request({
      url:'http://123.207.32.32:3000/auth',
      methods:'post',
      heder:{
        token
      },
      success:(res) => {
        // console.log(res)
        if(!res.data.errCode){
          this.globalData = token
        }else{
          this.login()
        }
      },
      fail:(err) => {
        console.log(err)
      }
    })
  },
  login(){
    //登录操作
    wx.login({
      success:(res) => {
        //1.获取code
        const code = res.code;
        //2.发送code到自己的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          methods:'post',
          data:{
            code
          },
          success:(res) => {
            //1.取出token
            const token = res.data.token;
            //2.将token保存到globalData中
            this.globalData.token = token
            //3.进行本地存储
            //异步的
            // wx.setStorage({
            //   data: data,
            //   key: 'key',
            // })
            //同步
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})
