const app = getApp();
let myRequest = require('../../../api/index.js')
// 定义一个全局变量保存从接口获取到的数据，以免重复请求接口
let resut;
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		showCover: false,
		currentTab: 0,
		navTitle: [
			{ title: '必玩' },
			{ title: '校园' },
			{ title: '古风' },
			{ title: '民国' },
			{ title: '现代' },
			{ title: '神话' },
			{ title: '科幻' },
			{ title: '国外' },
			{ title: '欧式' },
			{ title: '盒装' },
			{ title: '独家' },
			{ title: '实景' }
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let that = this;
		myRequest.getData().then(res => {
			resut = res;
			that.setData({
				list: res.data.hotRecommends.list[0].list
			})
		})
	},
	handleClick(e) {
		let currentTab = e.currentTarget.dataset.index;
		// 实现每一个tabbar切换对应内容的原理，根据每一个tabbar的index对应数组中的数据
		this.setData({
			currentTab,
			list: resut.data.hotRecommends.list[currentTab].list
		})
	},
	pullDown: function () {
		let that = this;
		that.setData({
			showCover: true
		})
	},
	closeCover: function () {
		let that = this;
		that.setData({
			showCover: false
		})
	},
	coverCheck: function (e) {
		let currentTab = e.currentTarget.dataset.index;
		// 实现每一个tabbar切换对应内容的原理，根据每一个tabbar的index对应数组中的数据
		this.setData({
			currentTab,
			list: resut.data.hotRecommends.list[currentTab].list
		})
		this.closeCover()
	}
})