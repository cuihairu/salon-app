export default defineAppConfig({
  pages: [
    'pages/index/index',
    "pages/services/services",
    "pages/profile/profile"
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: ''
      }, {
        pagePath: 'pages/services/services',
        text: "项目"
      }, {
        pagePath: 'pages/profile/profile',
        text: '我的'
      }]

  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
});
