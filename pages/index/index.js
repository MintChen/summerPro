//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  // 初始数据
  data: {
    colors: ['purple', 'green', 'blue'],
    // banner 
    banner_url: fileData.getBannerData(),
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    navTopItems: fileData.getIndexNavData(),
    navSectionItems: fileData.getIndexNavSectionData(),
    curNavId: 1,
    curIndex: 0
  },

  onLoad: function () {
    var that = this
    that.setData({
      list: that.data.navSectionItems
    })
  },


  switchTab: function (e) {
    let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index)
    this.curIndex = parseInt(e.currentTarget.dataset.index)
    console.log(e)
    var that = this
    this.setData({
      curNavId: id,
      curIndex: index,
    })

  },

  // 跳转详情页
  navigateDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail?artype=' + e.currentTarget.dataset.artype
    })
  },

  loadMore: function (e) {
    console.log('加载更多')
    var curid = this.data.curIndex

    if (this.data.navSectionItems[curid].length === 0) return

    var that = this
    that.data.navSectionItems[curid] = that.data.navSectionItems[curid].concat            (that.data.navSectionItems[curid])
    that.setData({
      list: that.data.navSectionItems,
    })
  },

  bookTap: function (e) {
    wx.navigateTo({
      url: '../book/book?aid=' + e.currentTarget.dataset.aid
    })
  }

})
