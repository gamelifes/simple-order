// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    host: 'http://a.itying.com/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.requestData();
  },
  goNews(event) {
    var id = event.currentTarget.dataset.id;

    wx.navigateTo({
      url: '../news/news?id=' + id,
    })
  },
  requestData() {
    var that = this;

    wx.request({
      url: 'http://a.itying.com/api/productlist', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data)

        var arr = res.data.result;
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < arr[i].list.length; j++) {
            arr[i].list[j].img_url = arr[i].list[j].img_url.replace(/\\/g, '/');
          }
        }

        that.setData({
          list: arr
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})



