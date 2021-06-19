// components/location/location.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    location(){
      let plugin = requirePlugin('routePlan')
      let key = '5MABZ-ZIV6J-CPJFU-KMYWB-QZCF6-7TB4H'
      let referer = '巫冥探案推理位置服务'
      let endPoint = JSON.stringify({ 
          'name': '巫冥探案馆(天府广场店)',
          'latitude': 30.657372,
          'longitude': 104.065901
      })
      wx.navigateTo({
          url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
      })
    }
  },
 
})
