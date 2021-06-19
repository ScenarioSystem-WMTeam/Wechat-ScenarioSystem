const app = getApp()
Page({
  data: {
    currentIndex:0,
    height:0,
    login: false,
    content: [
      {text: "我的收藏"},
      {text: "我的预约"},
      {text: "我想玩的本"},
      {text: "我玩过的本"}
    ],
    performance:[
      {
        name: "《人在江湖古木吟（换装）》",
        year: "6小时前",
        count: "560次探案",
        time: "60分钟"
      },
      {
        name: "《鸢飞戾天（换装）》",
        year: "8小时前",
        count: "610次探案",
        time: "80分钟"
      },
      {
        name: "《谁动了我的奶酪》",
        year: "24小时前",
        count: "110次探案",
        time: "99分钟"
      },
      {
        name: "《安生》",
        year: "3天前",
        count: "404次探案",
        time: "115分钟"
      },
    ],
  },
  onLoad() {
    const that = this;
    wx.getSystemInfo({
      success (res) {
        that.setData({
          height :res.windowHeight
        })
      }
    })
  },
  onShow() {
    const that = this
    if (!that.login) {
      wx.getStorage({
        key: 'userinfo',
        success(res){
          that.setData({
            login: res.data ? true : false,
          })
        }
      })
    }
  },
  toPlay(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  // 点击获取头像和昵称
  bindGetUserInfo(e) {
    const that = this;
		wx.getUserInfo({
			success: function (res) {
				wx.setStorage({
					key: "userinfo",
					data: JSON.stringify(res.userInfo)
				})
				that.setData({
					login: true
				})
			}
		})
  },
  checkItem(e) {
    const that = this;
    if (this.data.currentIndex === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentIndex: e.target.dataset.index
      })
    }
  },
  // 滑动切换tab
  changeTab(e) {
    const that = this;
    that.setData({
      currentIndex:e.detail.current
    })
  }
})