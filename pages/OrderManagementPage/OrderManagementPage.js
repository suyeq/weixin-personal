Page({

  /**
   * 页面的初始数据
   */
  data: {
    onGoing:true,
    completed:false,
    canceled:false
  },
selectColorone:function(){
  this.setData({
    onGoing: true,
    completed: false,
    canceled: false
  })  
},
selectColortwo: function () {
  this.setData({
    onGoing: false,
    completed: true,
    canceled: false
  })
},
selectColorthree: function () {
  this.setData({
    onGoing: false,
    completed: false,
    canceled: true
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var local_database = [
      {
        imagesrc: "/images/8.jpg",
        name: "电脑",
        lackofitems: "cpu、硬盘、电源",
        price: "99",
      },
      {
        imagesrc: "/images/8.jpg",
        name: "电视机",
        lackofitems: "cpu、硬盘、电源",
        price: "99",
      },
      {
        imagesrc: "/images/8.jpg",
        name: "空调",
        lackofitems: "cpu、硬盘、电源",
        price: "99",
      },
      {
        imagesrc: "/images/8.jpg",
        name: "空调",
        lackofitems: "cpu、硬盘、电源",
        price: "99",
      },
      {
        imagesrc: "/images/8.jpg",
        name: "空调",
        lackofitems: "cpu、硬盘、电源",
        price: "99",
      },
      {
        imagesrc: "/images/8.jpg",
        name: "空调",
        lackofitems: "cpu、硬盘、电源",
        price: "99",
      },
      {
        imagesrc: "/images/8.jpg",
        name: "空调",
        lackofitems: "cpu、硬盘、电源",
        price: "99",
      },
    ]
    this.setData({
      posts_key:local_database});
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
    // console.log("on post id is" + postId);
    wx.navigateTo({
      url: "OrderDetailsPage/OrderDetailsPage?id=" + postId
    })
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