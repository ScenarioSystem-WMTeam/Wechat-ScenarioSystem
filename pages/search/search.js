Page({
	data: {
		searchHistory: [],
		hotData: [
			{ title: "年轮", icon: "icon-jiantouUp", color: "text-orange" },
			{ title: "失格21克", icon: "icon-jiantouUp", color: "text-red" },
			{ title: "惠子", icon: "icon-jiantouDown", color: "text-green" },
			{ title: "龙王殿", icon: "icon-jiantouUp", color: "text-red" },
			{ title: "费马的审判（换装）", icon: "icon-jiantouDown", color: "text-red" },
			{ title: "古木吟（换装）", icon: "icon-jiantouUp", color: "text-red" },
		]
	},
	/**
	 * 搜索事件
	 * @param {Object} e 
	 */
	search(e){
		this.setData({
			searchHistory: [...this.data.searchHistory,e.detail.value]
		})
	},
	/**
	 * 取消搜索事件
	 */
	cancelSearch(){
		wx.navigateBack({
			delta: 1,
		})
	},
	/**
	 * 清空历史记录
	 */
	clearHistory(){
		this.setData({
			searchHistory: []
		})
	}
})