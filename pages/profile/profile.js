// pages/profile/profile.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        testHistory: [], // 测试历史记录
        isUpdateLogOpen: false // 更新日志展开状态
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.loadTestHistory();
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    
    /**
     * 切换更新日志的展开/折叠状态
     */
    toggleUpdateLog() {
        this.setData({
            isUpdateLogOpen: !this.data.isUpdateLogOpen
        });
    },
    
    /**
     * 导航到设置页面
     */
    navigateToSettings() {
        wx.navigateTo({
            url: '/pages/settings/settings'
        });
    },
    
    /**
     * 导航到收藏页面
     */
    navigateToFavorites() {
        wx.navigateTo({
            url: '/pages/favorites/favorites'
        });
    },
    
    /**
     * 导航到反馈页面
     */
    navigateToFeedback() {
        wx.navigateTo({
            url: '/pages/feedback/feedback'
        });
    },
    
    /**
     * 加载测试历史记录
     */
    loadTestHistory() {
        try {
            const historyList = wx.getStorageSync('testHistory') || [];
            
            // 为历史记录补充title信息用于显示
            const enrichedHistoryList = historyList.map(item => {
                // 检查是否为新格式（只保存索引）
                if (item.resultIndex !== undefined) {
                    try {
                        const { mbtiPersonalityTest } = require('../../data/MBTIData.js');
                        const mbtiResult = mbtiPersonalityTest.results[item.resultIndex];
                        
                        if (mbtiResult) {
                            return {
                                ...item,
                                title: mbtiResult.title // 从MBTIData中获取title用于显示
                            };
                        }
                    } catch (error) {
                        console.error('获取历史记录title失败:', error);
                    }
                }
                
                // 旧格式或获取失败时，返回原数据（兼容性处理）
                return item;
            });
            
            this.setData({
                testHistory: enrichedHistoryList.slice(0, 10) // 只显示最近10条记录
            });
            console.log('加载测试历史记录:', historyList.length, '条');
        } catch (error) {
            console.error('加载测试历史记录失败:', error);
            this.setData({
                testHistory: []
            });
        }
    },
    
    /**
     * 查看历史测试结果
     */
    viewHistoryResult(e) {
        const historyItem = e.currentTarget.dataset.history;
        if (!historyItem) {
            wx.showToast({
                title: '数据错误',
                icon: 'none'
            });
            return;
        }
        
        // 根据保存的索引从MBTIData中获取完整结果数据
        let resultData = null;
        
        // 检查是否为新格式（只保存索引）
        if (historyItem.resultIndex !== undefined) {
            // 新格式：从MBTIData中获取完整数据
            try {
                const { mbtiPersonalityTest } = require('../../data/MBTIData.js');
                const mbtiResult = mbtiPersonalityTest.results[historyItem.resultIndex];
                
                if (mbtiResult) {
                    resultData = {
                        title: mbtiResult.title,
                        description: mbtiResult.description,
                        resultPercentage: historyItem.resultPercentage,
                        suggestion: mbtiResult.suggestion,
                        equip: mbtiResult.equip,
                        img: mbtiResult.img, // 添加图片URL
                        isHistoryView: true
                    };
                } else {
                    throw new Error('结果索引无效');
                }
            } catch (error) {
                console.error('获取历史结果数据失败:', error);
                wx.showToast({
                    title: '数据获取失败',
                    icon: 'none'
                });
                return;
            }
        } else {
            // 旧格式：直接使用保存的完整数据（兼容性处理）
            resultData = {
                title: historyItem.title,
                description: historyItem.description,
                resultPercentage: historyItem.resultPercentage,
                suggestion: historyItem.aiSuggestion,
                equip: historyItem.equipmentRecommendation,
                img: historyItem.img, // 添加图片URL（如果存在）
                isHistoryView: true
            };
        }
        
        // 将结果数据存储到全局数据中
        const app = getApp();
        app.globalData.testResult = resultData;
        
        // 跳转到结果页面
        wx.navigateTo({
            url: '/pages/result/result'
        });
    }
})