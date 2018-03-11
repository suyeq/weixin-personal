var postsData = require('../../dates/ordersongoing.js')
//var postsData2 = require('../../dates/orderscomplete.js')
//var postsData3 = require('../../dates/ordersconcel.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    onGoing:true,
    completed:false,
    canceled:false,
    orderStutas: 0,
    hasRefesh:false
  },
selectColorone:function(){
  this.setData({
    onGoing: true,
    completed: false,
    canceled: false,
    orderStutas: 0
   // "posts_key": postsData.local
  });
  var post=postsData.local.filter(function (e) { return e.recoverystate == 0; });
  this.setData({
    "posts_key": post
  });
},
selectColortwo: function () {
  this.setData({
    onGoing: false,
    completed: true,
    canceled: false,
    orderStutas: 1
  });
  var post = postsData.local.filter(function (e) { return e.recoverystate == 1; });
  this.setData({
    "posts_key": post
  });
},
selectColorthree: function () {
  this.setData({
    onGoing: false,
    completed: false,
    canceled: true,
    orderStutas: -1
  });
  var post = postsData.local.filter(function (e) { return e.recoverystate == 2; });
  this.setData({
    "posts_key": post
  });
},
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var post = postsData.local.filter(function (e) { return e.recoverystate == 0; });
    this.setData({
      "posts_key": post
    });
  },
  refesh: function () {//下拉刷新
  /*var that=this;
  this.setData({
    "hasRefesh":true
  });
  setTimeout(function () {
    //1s后，改变isEnd的值
    that.onLoad();
    that.setData({
    "hasRefesh": false
    });
  }, 1000);*/
  },
  showToast: function () {
    wx.showToast({
      title: "已确认",
      duration: 1000,
      icon: "success"
    })
  },
  
  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    console.log(postId);
    var states = event.currentTarget.dataset.state;
    wx.navigateTo({
      url: "OrderDetailsPage/OrderDetailsPage?id=" + postId + "&stateb=" + states
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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that=this;
    //模拟加载
    setTimeout(function () {
      if (that.orderStutas==0){
        that.onLoad();
      }
      if (that.orderStutas == 1){
        that.selectColortwo();
      }
      if (that.orderStutas == -1){
        that.selectColorthree();
      }
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 500);
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