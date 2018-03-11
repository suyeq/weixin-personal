Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
bindTabSuggestion:function(){
  wx.navigateTo({
    url: 'SuggestionsPage/SuggestionsPage'
  });
},
bindTabVersion: function () {
  /*wx.showToast({
    title: "版本号：1.0",
    duration: 1000,
    icon:'false'
  })*/
  
  wx.showModal({
    title: '版本信息',
    content: '版本号：1.0',
    showCancel:false
  })
},
bindTababoutus: function () {
  
  wx.navigateTo({
    url: 'AboutUsPage/AboutUsPage'
  });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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