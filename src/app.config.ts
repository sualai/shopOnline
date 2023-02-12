export default {
  pages: [
    'pages/index/index',
    'pages/cart/index',
    'pages/foot/index',
    'pages/mine/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#ee7768',
    backgroundColor: '#fff',
    borderStyle: 'white',
    position: 'bottom',
    list: [
      { pagePath: 'pages/index/index', text: '首页', iconPath: './assets/home.png', selectedIconPath: './assets/activeHome.png' },
      { pagePath: 'pages/cart/index', text: '购物车', iconPath: './assets/cart.png', selectedIconPath: './assets/activeCart.png' },
      { pagePath: 'pages/foot/index', text: '足迹', iconPath: './assets/foot.png', selectedIconPath: './assets/activeFoot.png' },
      { pagePath: 'pages/mine/index', text: '我的', iconPath: './assets/mine.png', selectedIconPath: './assets/activeMine.png' }
    ]
  }
}
