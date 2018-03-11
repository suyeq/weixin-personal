//var postsData = require('../../dates/basicinform.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:""
  },
  bindViewTap: function (event) {
    wx.navigateTo({
      url: 'InputPage/InputPage'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("hello");
    var _this = this;
    wx.getUserInfo({
      success: function (res) {
        var avatarUrl = res.userInfo.avatarUrl;
        var nickName = res.userInfo.nickName;
        var gender = res.userInfo.gender; //性别 0：未知、1：男、2：女 
        var province = res.userInfo.province;
        var city = res.userInfo.city;
        if(gender==2){
          gender="女";
        }
        if (gender == 1) {
          gender = "男";
        }
        _this.setData({
          "img": avatarUrl,
          "name": nickName,
          "province": province,
          "city": city,
          "sex":gender
        });
      }
    })
    this.setData({
      "phone":"123456",
      "wx":"suyeq233"
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})