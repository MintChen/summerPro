var app = getApp()
Page({
  data: {
    userInfo: {},
    userListInfo: [{
      icon: '../../images/已完成订单.png',
      text: '已完成订单',
      isunread: true,
      unreadNum: 2
    }, 
    {
      icon: '../../images/正在进行的订单.png',
      text: '正在进行的订单',
      isunread: true,
      unreadNum: 2
    }, 
    {
      icon: '../../images/我的发布.png',
      text: '我的发布',
      isunread: true,
      unreadNum: 1
    }, 
    {
      icon: '../../images/标签.png',
      text: '我的技能标签'
    }, 
    {
      icon: '../../images/地址.png',
      text: '我的地址'
    }, 
    {
      icon: '../../images/常见问题.png',
      text: '常见问题'
    }]
  },

  onLoad: function () {
    var that = this
    //获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})