// components/my-select/my-select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    nums:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    incrementNums(num){
      this.setData({
        nums:this.data.nums += num
      })
    }
  }
})
