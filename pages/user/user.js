const app = getApp()
let userInfo = app.globalData.userInfo;
Page({
	data: {
		timeout: [
			{ text: "等人中" },
			{ text: "睡眠中" },
			{ text: "信号弱" },
			{ text: "恋爱中" },
			{ text: "暗杀中" },
			{ text: "干饭中" },
			{ text: "学习中" },
			{ text: "熬夜中" },
		],
		navList: [
			{
				icon: '/image/nav-icon/Briefcase.png',
				events: 'goToBangDan',
				text: '宝库'
			},
			{
				icon: '/image/nav-icon/hiring.png',
				events: 'goToBangDan',
				text: '好友'
			},
			{
				icon: '/image/nav-icon/growth.png',
				events: 'goToBangDan',
				text: '排行'
			},
			{
				icon: '/image/nav-icon/unicorn.png',
				events: 'goToBangDan',
				text: '王冠'
			},

		],
		activeIndex: 0,
		login: false,
		avatarUrl: "",
		nickName: ""
	},

	onLoad() {
		const that = this;
		//获得设备信息
		wx.getSystemInfo({
			success(res) {
				that.setData({
					phoneHeight: res.windowHeight,
				})
			}
		})
	},
	onShow() {
    const that = this
    if (!that.login) {
      wx.getStorage({
				key: 'userinfo',
				success(res) {
					if (res.data) {
						const userinfo = JSON.parse(res.data)
						that.setData({
							login: true,
							avatarUrl: userinfo.avatarUrl,
							nickName: userinfo.nickName
						})
					}
				}
			})
    }
  },
	// 获取用户的头像和昵称信息
	bindGetUserInfo(e) {
		const that = this;
		wx.getUserInfo({
			success: function (res) {
				wx.setStorage({
					key: "userinfo",
					data: JSON.stringify(res.userInfo)
				})
				wx.setStorage({
					key: "avatarUrl",
					data: res.userInfo.avatarUrl
				})
				that.setData({
					login: true,
					avatarUrl: res.userInfo.avatarUrl,
					nickName: res.userInfo.nickName
				})
			}
		})
	},
	phoneLogin() {
		wx.navigateTo({
			url: './phoneLogin/phoneLogin',
		});
	},
	gotoLogin() {
		wx.navigateTo({
			url: './phoneLogin/phoneLogin',
		});
	},
	openSwitch() {
		const that = this;
		that.setData({
			show: true
		})
	},
	close() {
		const that = this;
		that.setData({
			show: false
		})
	},
	chooseTimeOut(e) {
		const that = this;
		that.setData({
			activeIndex: e.currentTarget.dataset.activeindex
		})
	}
})