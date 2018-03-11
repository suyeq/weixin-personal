var postsData = require('../../../dates/ordersongoing.js')
//var postsData2 = require('../../../dates/orderscomplete.js')
//var postsData3 = require('../../../dates/ordersconcel.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var postId = options.id;
    var state = options.stateb;
    console.log(state);
    this.data.currentPostId = postId;
    if(state==0){
      var postData = postsData.local[postId];
      this.setData({
        "postData": postData,
      });
    } else if (state == 1){
      var postData = postsData.local[postId];
      this.setData({
        "postData": postData,
      });
    }else{
      var postData = postsData.local[postId];
      this.setData({
        "postData": postData,
      });
    }
   
  },
onTabConcel:function(){
  wx.navigateBack({
    delta: 1
  });
  wx.showToast({
    title: "已取消",
    duration: 1000,
    icon: "success"
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