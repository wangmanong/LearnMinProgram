// components/my-slots/my-slots.js
Component({
  //-------让使用者可以给组件传入数据---------
  properties:{

  },
  //------定义组件初始化数据--------
  data:{

  },
  //---------定义组件内部的函数--------------
  methds:{

  },
  //-------定义组件的配置选项----------
  options:{
    multipleSlots:true
  },
  //-----外界给组件传入额外的样式--------
  externalClasses:[],
  //-------------可以监听Properties/data的改变---------------
  observers:{

  },
  //----------组件中监听生命周期函数--------------
  //1.监听当前组件在页面的生命周期
  pageLifetimes:{
    show(){
      console.log('监听组件所在页面显示出来时')
    },
    hide(){
      console.log('监听组件所在页面隐藏时')
    },
    resize(){
      console.log('监听页面尺寸的改变')
    }
  },
  //2.监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log('组件被创建出来时')
    }
  }
})
