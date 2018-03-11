var postsData = require('../../dates/personal.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"/images/1.jpg",
    name:"筑梦",
  },


  //事件处理函数
  bindViewTap: function (event) {
    wx.navigateTo({
      url: '../OrderManagementPage/OrderManagementPage'
    });
  },
  bindViewTapbasic: function (event) {
    wx.navigateTo({
      url: '../BasicInformationPage/BasicInformationPage'
    });
  },
  bindViewTapsetup: function (event) {
    wx.navigateTo({
      url: '../SystemSetupPage/SystemSetupPage'
    });
  },
  bindViewTapaddress: function (event) {
    wx.navigateTo({
      url: '../AddressPage/directory'
    });
  },
  onShareTap: function (event) {
    var itemList = [
      "分享给微信好友",
      "分享到朋友圈",
      "分享到QQ",
      "分享到微博"
    ];
    wx.showActionSheet({
      itemList: itemList,
      itemColor: "#405f80",
      success: function (res) {
        // res.cancel 用户是不是点击了取消按钮
        // res.tapIndex 数组元素的序号，从0开始
        wx.showModal({
          title: "用户 " + itemList[res.tapIndex],
          content: "用户是否取消？" + res.cancel + "现在无法实现分享功能，什么时候能支持呢"
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getUserInfo({
      success: function (res) {
        var avatarUrl = res.userInfo.avatarUrl;
        var nickName = res.userInfo.nickName;
        var gender = res.userInfo.gender; //性别 0：未知、1：男、2：女 
        var province = res.userInfo.province;
        var city = res.userInfo.city;
        _this.setData({
          "img": avatarUrl,
          "name": nickName,
          "province": province,
          "city": city
        });
      }
    })
    this.setData({
      "personal": postsData.personal
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