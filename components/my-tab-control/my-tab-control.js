// components/my-tab-control/my-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
      this.triggerEvent('itemclick',{index})
    }
  },
  lifetimes: {
    created: function() {
      console.log("组件被创建出来时")
    },
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log('在组件实例进入页面节点树时执行')
    }
  }
})
