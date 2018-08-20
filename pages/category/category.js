
//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')
var util = require('../../utils/util')

Page({
  // 初始数据
  data: {
    casArray: ['美术设计类', '活动组织类', '推广宣传类'],
    casIndex: 0,
    addrArray: util.replacePhone(fileData.userData().addrs, false),
    addrIndex: 0,
    skillData: fileData.getSkilledData(),
    curNavId: 1,
    curIndex: 0
  },

  onLoad: function () {
    var that = this
    that.setData({
      list: that.data.skillData
    })
  },
  // 跳转详情页
  navigateDetail: function (e) {
    wx.navigateTo({
      url: '../technicain_detail/technicain_detail?artype=' + e.currentTarget.dataset.arid
    })
  },

  loadMore: function (e) {
    console.log('加载更多')
    if (this.data.skillData.length === 0) return
    var that = this
    that.data.skillData = that.data.skillData.concat(that.data.skillData)
    that.setData({
      list: that.data.skillData,
    })
  },
  // 分类选择
  bindCasPickerChange: function (e) {
    console.log('Category-class', e.detail.value)
    this.setData({
      casIndex: e.detail.value
    })
  },
  // 地址选择
  bindAddrPickerChange: function (e) {
    console.log('Category-address', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  }


})
