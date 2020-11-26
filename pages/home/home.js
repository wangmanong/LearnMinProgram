// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  handleBtnClick(event){
    console.log(event)
    this.setData({
      counter:this.data.counter+=1
    })
  },
  handleBtnNums(){
    //1获取组件对象
    const my_sel = this.selectComponent('#sel-id')
    //2通过方法对数据=进行修改
    my_sel.incrementNums(10)
  }
})
