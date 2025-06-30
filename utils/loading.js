/**
 * 加载动画工具类
 * 用于管理页面级的加载状态，避免重复显示加载动画
 */

let loadingCount = 0;
let loadingTimer = null;

/**
 * 显示加载动画
 * @param {string} title 加载提示文字
 * @param {boolean} mask 是否显示遮罩层
 */
export const showLoading = (title = '加载中...', mask = true) => {
  if (loadingCount === 0) {
    wx.showLoading({ 
      title, 
      mask 
    });
  }
  loadingCount++;
  
  // 设置超时保护，防止加载动画一直显示
  if (loadingTimer) {
    clearTimeout(loadingTimer);
  }
  loadingTimer = setTimeout(() => {
    hideLoading();
    wx.showToast({
      title: '加载超时',
      icon: 'error',
      duration: 2000
    });
  }, 10000); // 10秒超时
};

/**
 * 隐藏加载动画
 */
export const hideLoading = () => {
  loadingCount--;
  if (loadingCount <= 0) {
    wx.hideLoading();
    loadingCount = 0;
    if (loadingTimer) {
      clearTimeout(loadingTimer);
      loadingTimer = null;
    }
  }
};

/**
 * 显示页面级加载组件
 * @param {Object} page 页面实例
 * @param {string} text 加载文字
 */
export const showPageLoading = (page, text = '加载中...') => {
  if (page && page.setData) {
    page.setData({
      pageLoading: true,
      pageLoadingText: text
    });
  }
};

/**
 * 隐藏页面级加载组件
 * @param {Object} page 页面实例
 */
export const hidePageLoading = (page) => {
  if (page && page.setData) {
    page.setData({
      pageLoading: false
    });
  }
};

/**
 * 资源下载函数，带加载动画
 * @param {string} url 下载地址
 * @param {string} loadingText 加载提示文字
 * @returns {Promise} 下载结果
 */
export const downloadWithLoading = (url, loadingText = '下载资源中...') => {
  return new Promise((resolve, reject) => {
    showLoading(loadingText);
    
    wx.downloadFile({
      url: url,
      success: (res) => {
        hideLoading();
        if (res.statusCode === 200) {
          resolve(res);
        } else {
          reject(new Error(`下载失败，状态码：${res.statusCode}`));
        }
      },
      fail: (err) => {
        hideLoading();
        wx.showToast({
          title: '下载失败',
          icon: 'error'
        });
        reject(err);
      }
    });
  });
};

/**
 * 网络请求函数，带加载动画
 * @param {Object} options 请求参数
 * @param {string} loadingText 加载提示文字
 * @returns {Promise} 请求结果
 */
export const requestWithLoading = (options, loadingText = '请求中...') => {
  return new Promise((resolve, reject) => {
    showLoading(loadingText);
    
    wx.request({
      ...options,
      success: (res) => {
        hideLoading();
        resolve(res);
      },
      fail: (err) => {
        hideLoading();
        wx.showToast({
          title: '请求失败',
          icon: 'error'
        });
        reject(err);
      }
    });
  });
};