//index.js
//获取应用实例
const app = getApp()
const myRequest = require('../../api/index.js');
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		imgList: [
			'https://scenariosystem.oss-cn-hangzhou.aliyuncs.com/photo/1.jpg',
			'https://scenariosystem.oss-cn-hangzhou.aliyuncs.com/photo/2.jpg',
			// 'https://scenariosystem.oss-cn-hangzhou.aliyuncs.com/photo/3.jpg',
			'https://scenariosystem.oss-cn-hangzhou.aliyuncs.com/photo/4.jpg',
			'https://scenariosystem.oss-cn-hangzhou.aliyuncs.com/photo/5.jpg',
		],
		navList: [
			{
				icon: '/image/nav-icon/Access.png',
				events: 'goToBangDan',
				text: '剧本列表'
			},
			{
				icon: '/image/nav-icon/Achievement.png',
				events: 'goToBangDan',
				text: '热门榜单'
			},
			{
				icon: '/image/nav-icon/Binoculars.png',
				events: 'goToBangDan',
				text: '最新情报'
			},
			{
				icon: '/image/nav-icon/teamwork.png',
				events: 'goToBangDan',
				text: '推理小队'
			},

		],
		swiperCurrent: 0,
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const that = this
		myRequest.getData().then(res => {
			that.setData({
				showitem: true,
				guess: res.data.guess.list.slice(0, 3),
				xiaoshuocontent: res.data.hotRecommends.list[0].list,
				xiangshengcontent: res.data.hotRecommends.list[2].list,
				tuokocontent: res.data.hotRecommends.list[4].list
			})
		}).catch(err => {
			that.setData({
				showitem: false
			})
		})
	},
	//轮播图改变事件
	swiperChange: function (e) {
		this.setData({
			swiperCurrent: e.detail.current
		})
	},
	goToBangDan: function () {
		wx.navigateTo({
			url: '/pages/index/bangdan/bangdan',
		})
	},
	gotoDetails(e) {
		const url = e.currentTarget.dataset.coverimg;
		const title = e.currentTarget.dataset.title;
		wx.navigateTo({
			// 页面传参
			url: '/pages/details/details?url=' + url + '&title=' + title,
		})
	}
})