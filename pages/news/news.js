// pages/news/news.js
var WxParse = require('../../wxParse/wxParse.js');

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
    console.log(options);

    this.requestData(options.id);
  },

  requestData(id) {
    var that = this;
   

    var id = 'http://a.itying.com/api/productcontent?id=' + id;
   

    wx.request({

      url: id,
      //仅为示例，并非真实的接口地址

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data)

        var arr = res.data.result[0];
         //将相对路径改为绝对路径
        arr.img_url = arr.img_url.replace(/\\/g, '/');
       
        //解析html
        var article = arr.content;
        WxParse.wxParse('article', 'html', article, that, 5); //imagePadding为当图片自适应是左右的单一padding 修改数据无效 可自行wxss
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



