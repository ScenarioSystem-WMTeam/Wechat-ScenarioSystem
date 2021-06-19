Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		performance: [
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

		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */


	onLoad: function (options) {
		this.setData({
			performanceInfo: [{
				imgurl: options.url + '=5&upload_type=album&device_type=ios&name=medium&magick=png',
				title: options.title,
				author: "巫冥独家",
				num1: "666",
				num2: "3"
			}],
			imgurl: options.url + '=5&upload_type=album&device_type=ios&name=medium&magick=png',
		});
	}
})