// pages/result/result.js
Page({
  data: {
    resultData: null
  },

  onLoad: function(options) {
    // 从页面参数或全局数据中获取结果数据
    const app = getApp();
    if (app.globalData.testResult) {
      this.setData({
        resultData: app.globalData.testResult
      });
    } else if (options.resultData) {
      // 如果通过URL参数传递（需要解码）
      try {
        const resultData = JSON.parse(decodeURIComponent(options.resultData));
        this.setData({
          resultData: resultData
        });
      } catch (e) {
        console.error('解析结果数据失败:', e);
        this.backToHome();
      }
    } else {
      // 如果没有结果数据，返回首页
      this.backToHome();
    }
  },

  onUnload: function() {
    // 页面卸载时，确保返回到首页而不是测试页面
    // 这可以防止iOS设备右滑返回到测试进度页面
    const pages = getCurrentPages();
    if (pages.length > 1) {
      const prevPage = pages[pages.length - 2];
      if (prevPage.route === 'pages/test/test') {
        // 如果上一页是测试页面，则在返回时跳转到首页
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/home/home'
          });
        }, 100);
      }
    }
  },

  // 返回首页
  backToHome() {
    // 检查是否是从测试页面跳转过来的
    const pages = getCurrentPages();
    if (pages.length > 1) {
      const prevPage = pages[pages.length - 2];
      if (prevPage.route === 'pages/test/test') {
        // 如果是从测试页面跳转过来的，直接跳转到首页
        wx.switchTab({
          url: '/pages/home/home'
        });
        return;
      }
    }
    
    // 否则正常返回上一页或首页
    wx.navigateBack({
      delta: 1,
      fail: function() {
        wx.switchTab({
          url: '/pages/home/home'
        });
      }
    });
  },

  // 重新测试
  retakeTest() {
    // 清除全局测试结果数据
    const app = getApp();
    app.globalData.testResult = null;
    
    // 直接跳转到测试页面，这会重新初始化测试状态
    wx.redirectTo({
      url: '/pages/test/test'
    });
  },

  // 分享结果
  shareResult() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  // 页面分享
  onShareAppMessage() {
    const resultData = this.data.resultData;
    return {
      title: `我的钓鱼人MBTI测试结果：${resultData.title}`,
      path: '/pages/home/home',
      imageUrl: '' // 可以设置分享图片
    };
  }
});