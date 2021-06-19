const { ificationContent } = require('../../utils/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex:0,
    VerticalNavTop: 0,
    TabCur: 0,
    ificationTitle:[
      {title:"难度"},
      {title:"人数"},
      {title:"标签"},
      {title:"类型"},
      {title:"店家"},
      {title:"更多"},
    ],
    ificationContent:ificationContent
  },


  onLoad: function (options) {
    var that = this;
    //调用getSystemInfo APi获取到用户的手机屏幕高度，动态设置scroll-view的高度
    // 还有缺陷，代改进
    wx.getSystemInfo({
      success (res) {
        // var heightleft = (res.windowHeight*2);
        var height = (res.windowHeight*2);
        that.setData({
          phoneHeight:height,
        })
      }
    })
  },

  //随着滚动动态设置左侧边栏的选中态
  showActive:function (e) {
    //方法欠佳，还需改进
    var index = parseInt( e.detail.scrollTop/116);
    this.setData({
      activeIndex: index
     })
  },
  // 侧边栏的点击事件
  change:function (e){
    var that = this;
    that.setData({
      VerticalNavTop: (e.currentTarget.dataset.index - 1) * 50,
      activeIndex: e.currentTarget.dataset.index,
      TabCur: e.currentTarget.dataset.id,
    })
  },
})