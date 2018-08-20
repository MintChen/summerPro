/*
  banner数据
 */
function getBannerData() {
  var arr = ['../../images/mouse1.png', '../../images/mouse2.png', '../../images/mouse3.png', '../../images/mouse4.png']
  return arr
}
/*
 首页 navnav 数据
 */
function getIndexNavData() {
  var arr = [
    {
      id: 1,
      icon: "../../images/星星.png",
      title: "热门推荐"
    },
    {
      id: 2,
      icon: "../../images/船锚.png",
      title: "价格优先"
    },
    {
      id: 3,
      icon: "../../images/定位.png",
      title: "离我最近"
    },
  
    
  ]
  return arr
}
/*
 * 首页 对应 标签 数据项
 */
function getIndexNavSectionData() {
  var arr = [
    [
      {

        subject: "海报设计",
        coverpath: "../../images/example1.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      },
      {

        subject: "校内推广",
        coverpath: "../../images/example2.jpg",
        price: '¥150',
        message: '地点：上海大学宝山校区校内'
      },
      {

        subject: "照片拍摄",
        coverpath: "../../images/example3.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      },
      {

        subject: "活动主持",
        coverpath: "../../images/example4.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      },
      {

        subject: "场地布置",
        coverpath: "../../images/example5.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      }
    ],
    [
      {

        subject: "校内推广",
        coverpath: "../../images/example2.jpg",
        price: '¥150',
        message: '地点：上海大学宝山校区校内'
      },
      {

        subject: "海报设计",
        coverpath: "../../images/example1.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      },
      
      {

        subject: "照片拍摄",
        coverpath: "../../images/example3.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      },
      {

        subject: "活动主持",
        coverpath: "../../images/example4.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      },
      {

        subject: "场地布置",
        coverpath: "../../images/example5.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      }
    ],
    [
     
      {

        subject: "海报设计",
        coverpath: "../../images/example1.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      },

      {

        subject: "照片拍摄",
        coverpath: "../../images/example3.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      },
      {

        subject: "校内推广",
        coverpath: "../../images/example2.jpg",
        price: '¥150',
        message: '地点：上海大学宝山校区校内'
      },
      {

        subject: "活动主持",
        coverpath: "../../images/example4.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      },
      {

        subject: "场地布置",
        coverpath: "../../images/example5.jpg",
        price: '¥100',
        message: '地点：上海大学宝山校区校内'
      }
    ]
    
  ]
  return arr
}
/*
 项目 数据
*/
function getSkilledData() {
  var arr = [   
    {
      subject: "活动主持",
      avatar: "../../images/example4.jpg",
      time: '3 day',
      price: '¥100',
      message: '地点：上海大学宝山校区校内',
      distance: '100m'
    },
    {
      subject: "海报设计",
      avatar: "../../images/example1.jpg",
      time: '1 day',
      price: '¥100',
      message: '地点：上海大学宝山校区校内',
      distance: '100m'
    },

    {
      subject: "照片拍摄",
      avatar: "../../images/example4.jpg",
      time: '1 day',
      price: '¥100',
      message: '地点：上海大学宝山校区校内',
      distance: '100m'
    },
    {

      subject: "校内推广",
      avatar: "../../images/example2.jpg",
      time: '5 day',
      price: '¥100',
      message: '地点：上海大学宝山校区校内',
      distance: '100m'
    },
    {

      subject: "场地布置",
      avatar: "../../images/example5.jpg",
      time: '7 day',
      price: '¥100',
      message: '地点：上海大学宝山校区校内',
      distance: '100m'
    },
    
  ]
  return arr
}

/*
 选择器 数据
 */
function getPickerData() {
  var arr = [
    {
      name: 'eskimo',
      phone: '18800203369',
      province: '上海市',
      city: '上海市',
      addr: '宝山区大场镇上海大学南区'
    },
    {
      name: 'eskimo',
      phone: '18800203369',
      province: '上海市',
      city: '上海市',
      addr: '宝山区大场镇上海大学东区'
    }
  ]
  return arr
}

var user_data = userData()
function searchAddrFromAddrs(addrid) {
  var result
  for (let i = 0; i < user_data.addrs.length; i++) {
    var addr = user_data.addrs[i]
    console.log(addr)
    if (addr.addrid == addrid) {
      result = addr
    }
  }
  return result || {}
}
/*
用户数据
*/
function userData() {
  var arr = {
    uid: '1',
    nickname: 'eskimo',
    name: 'Eskimo',
    phone: '18800203369',
    avatar: '../../images/user.jpg',
    addrs: [
      {
        addrid: '1',
        name: 'eskimo',
        phone: '18800203369',
        province: '上海市',
        city: '上海市',
        addr: '上海大学东区'
      },
      {
        addrid: '2',
        name: 'ching',
        phone: '13608238097',
        province: '福建省',
        city: '厦门市',
        addr: '集美大学'
      }
    ]
  }
  return arr
}

/*
省
 */
function provinceData() {
  var arr = [
   
    '请选择省份', '✖✖省'
  ]
  return arr
}
/*
市
*/
function cityData() {
  var arr = [
   
    '请选择城市', '✖✖市', '✖✖市', '✖✖市'
  ]
  return arr
}

/*
 接口
 */
module.exports = {
  getBannerData: getBannerData,
  getIndexNavData: getIndexNavData,
  getIndexNavSectionData: getIndexNavSectionData,
  getPickerData: getPickerData,
  getSkilledData: getSkilledData,
  userData: userData,
  provinceData: provinceData,
  cityData: cityData,
  searchAddrFromAddrs: searchAddrFromAddrs

}