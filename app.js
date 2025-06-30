// app.js
App({
  globalData: {
    completedTests: [], // 添加已完成测试记录
    fishingSessionCount: 0, // 添加钓鱼会话次数计数器
    fishEscaped: 0, // 添加累计跑鱼次数计数器
    isGlobalLoading: true, // 全局加载状态
    loadingText: '正在初始化...' // 加载文本
  },
  
  onLaunch() {

    wx.setInnerAudioOption({
        obeyMuteSwitch: false, // 静音模式下仍播放声音
        mixWithOther: true     // 允许与其他音频混播
      });
    // 全局错误捕获
    wx.onError((error) => {
      console.error('Global Error:', error);
      wx.showToast({
        title: '程序出现异常',
        icon: 'none'
      });
    });
    // 初始化用户数据
    this.globalData.completedTests = wx.getStorageSync('completedTests') || []
    this.globalData.fishingSessionCount = wx.getStorageSync('fishingSessionCount') || 0
    this.globalData.fishEscaped = wx.getStorageSync('fishEscaped') || 0
    
    // 模拟初始化过程，完成后隐藏全局加载动画
    setTimeout(() => {
      this.globalData.isGlobalLoading = false
      console.log('全局初始化完成，隐藏加载动画')
    }, 2000)
  }
})
