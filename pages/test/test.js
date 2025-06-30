const testDataModule = require('../../data/testDataNew');

Page({
  data: {
    testData: null,
    currentQuestion: {},
    totalQuestions: 0,
    progress: 0,
    selectedIndex: null,
    answers: [],
    showResult: false,
    resultData: {},
    dimensionScores: {}, // 维度得分
    isProcessing: false ,// 添加处理标志位，防止重复处理
    
    highlightedArticles: [] // 用于存储高亮处理后的文章数据
  },
  
  // 页面加载时初始化触摸变量
  touchStartX: 0,

  onLoad(options) {
    // console.log('页面加载参数:', options);
    
    // 清除概率缓存，确保使用最新的测试数据
    this.probabilityCache = null;
    
    this.initTest();
  },

  // 触摸开始事件
  touchStart(e) {
    // 直接保存触摸开始的X坐标，不使用setData以提高性能
    this.touchStartX = e.changedTouches[0].clientX;
    this.touchStartY = e.changedTouches[0].clientY; // 同时记录Y坐标，用于判断是否为水平滑动
    // console.log('触摸开始，X坐标：', this.touchStartX, 'Y坐标：', this.touchStartY);
  },

  // 触摸结束事件
  // 触摸移动事件
  touchMove(e) {
    // 阻止默认行为，防止页面滚动
    e.preventDefault && e.preventDefault();
    return false;
  },

// 统一后的触摸结束事件
touchEnd(e) {
  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;
  const diffX = touchEndX - this.touchStartX;
  const diffY = Math.abs(touchEndY - this.touchStartY);
  const absDiffX = Math.abs(diffX);

  // 优先判断右滑返回（阈值80px，Y轴偏移小于50px）
  if (diffX > 80 && diffY < 50) {
    // console.log('右滑返回');
    this.backToHome();
    return;
  }

  // 其次判断题目切换（水平滑动超过50px）
  if (absDiffX > 50 && diffY < 50) {
    if (diffX > 0) {
      this.goPrev();
    } else if (this.data.selectedIndex !== null) {
      this.goNext();
    }
  }
},

  initTest() {
    const selectedTest = wx.getStorageSync('selectedTest') || testDataModule.Testone;

    this.setData({
      testData: selectedTest,
      currentQuestion: selectedTest.questions[0],
      totalQuestions: selectedTest.questions.length,
      progress: (1 / selectedTest.questions.length) * 100,
      dimensionScores: {}, // 确保初始化为空
      answers: []
    });
  },

  selectOption(e) {
    // 如果正在处理中，则忽略此次点击
    if (this.data.isProcessing) return;
    
    // 设置处理标志位，防止连点
    this.setData({ isProcessing: true });
    
    const index = e.currentTarget.dataset.index;
    this.setData({ selectedIndex: index });
    
    // 检查是否是在修改之前的答案
    const currentQuestionId = this.data.currentQuestion.id;
    const existingAnswerIndex = this.data.answers.findIndex(a => a.questionId === currentQuestionId);
    
    if (existingAnswerIndex !== -1) {
      // 如果已经有这道题的答案，更新它
      const updatedAnswers = [...this.data.answers];
      const currentAnswer = this.data.currentQuestion.options[index];
      updatedAnswers[existingAnswerIndex] = {
        questionId: currentQuestionId,
        selectedOption: index,
        resultKey: currentAnswer.resultKey
      };
      
      // 更新答案数组
      this.setData({
        answers: updatedAnswers
      });
    }
    
    // 动画完成后重置处理标志位（与CSS动画时长保持一致）
    setTimeout(() => {
      this.setData({ isProcessing: false });
    }, 500);
  },

  handleAutoNext(e) {
    // 如果正在处理中，则忽略此次点击
    if (this.data.isProcessing) return;
    
    const index = e.currentTarget.dataset.index;
    this.setData({ selectedIndex: index });
    
    // 检查是否是在修改之前的答案
    const currentQuestionId = this.data.currentQuestion.id;
    const existingAnswerIndex = this.data.answers.findIndex(a => a.questionId === currentQuestionId);
    
    if (existingAnswerIndex !== -1) {
      // 如果已经有这道题的答案，更新它
      const updatedAnswers = [...this.data.answers];
      const currentAnswer = this.data.currentQuestion.options[index];
      updatedAnswers[existingAnswerIndex] = {
        questionId: currentQuestionId,
        selectedOption: index,
        resultKey: currentAnswer.resultKey
      };
      
      // 更新答案数组
      this.setData({
        answers: updatedAnswers
      });
    }
    
    // 短暂延迟后自动进入下一题，给用户一个视觉反馈的时间
    setTimeout(() => {
      // 确保选中状态在进入下一题前已被正确处理
      this.goNext();
    }, 350); // 增加延迟时间，确保视觉反馈完成
  },

  goNext() {
    // 如果没有选择或正在处理中，则返回
    if (this.data.selectedIndex === null || this.data.isProcessing) return;
    
    // 先保存当前选中的选项索引，因为我们即将重置它
    const selectedOptionIndex = this.data.selectedIndex;
    const currentAnswer = this.data.currentQuestion.options[selectedOptionIndex];
    
    // 设置处理标志位，防止重复处理，并立即重置选中状态
    this.setData({ 
      isProcessing: true,
      selectedIndex: null // 立即重置选中状态，确保视图更新
    }, () => {
      // 在回调中确认选中状态已被清除
    });

    // 记录用户选择的维度信息
    const updatedAnswers = [...this.data.answers];
    updatedAnswers.push({
      questionId: this.data.currentQuestion.id,
      selectedOption: selectedOptionIndex,
      resultKey: currentAnswer.resultKey
    });

    // 计算维度得分
    const updatedDimensionScores = { ...this.data.dimensionScores };

    currentAnswer.resultKey.forEach(([dimension, baseWeight]) => {
      const cleanDim = dimension.trim().charAt(0).toUpperCase() + dimension.trim().slice(1).toLowerCase();
      const dimensionWeight = this.data.testData.dimensionWeights[cleanDim] || 1;
      const finalWeight = baseWeight * dimensionWeight;
      
      if (!updatedDimensionScores[cleanDim]) {
        updatedDimensionScores[cleanDim] = 0;
      }
      updatedDimensionScores[cleanDim] += finalWeight;
    });

    // 确保数据正确存储
    this.setData({
      answers: updatedAnswers,
      dimensionScores: updatedDimensionScores
    });

    const nextId = this.data.currentQuestion.id + 1;
    if (nextId <= this.data.testData.questions.length) {
      // 将重置selectedIndex和更新题目合并为一个setData调用
      // 这样可以确保DOM一次性更新，避免选中状态残留
      this.setData({
        selectedIndex: null,
        currentQuestion: this.data.testData.questions.find(q => q.id === nextId),
        progress: (nextId / this.data.testData.questions.length) * 100,
        isProcessing: false // 重置处理标志位
      }, () => {
        // 在回调中确认选中状态已被清除和题目已更新
        // 已切换到下一题，选中状态已重置
      });
    
    } else {
      this.calculateResult();
    }
  },

  // 返回上一题
  goPrev() {
    // 如果正在处理中或当前是第一题，则返回
    if (this.data.isProcessing || this.data.currentQuestion.id <= 1) return;
    
    // 设置处理标志位
    this.setData({ isProcessing: true });
    
    const prevId = this.data.currentQuestion.id - 1;
    const prevQuestion = this.data.testData.questions.find(q => q.id === prevId);
    
    // 查找上一题的已选答案
    const existingAnswerIndex = this.data.answers.findIndex(a => a.questionId === prevId);
    let selectedIndex = null;
    
    if (existingAnswerIndex !== -1) {
      selectedIndex = this.data.answers[existingAnswerIndex].selectedOption;
    }
    
    // 更新当前问题和进度
    this.setData({
      currentQuestion: prevQuestion,
      progress: (prevId / this.data.testData.questions.length) * 100,
      selectedIndex: selectedIndex,
      isProcessing: false
    });
  },
  
  calculateResult() {
    
    // 确保答案数量不超过题目数量
    let validAnswers = this.data.answers;
    if (validAnswers.length > this.data.totalQuestions) {
      console.warn(`答案数量(${validAnswers.length})超过题目数量(${this.data.totalQuestions})，将只使用前${this.data.totalQuestions}个答案`);
      validAnswers = validAnswers.slice(0, this.data.totalQuestions);
    }

    const recalculatedScores = {};

    // 遍历答案并重新计算维度得分
    validAnswers.forEach(answer => {
        answer.resultKey.forEach(([dimension, baseWeight]) => {
            const cleanDim = dimension.trim().charAt(0).toUpperCase() + dimension.trim().slice(1).toLowerCase();
            // 应用维度权重配置系数
            const dimensionWeight = this.data.testData.dimensionWeights[cleanDim] || 1;
            const finalWeight = baseWeight * dimensionWeight;

            recalculatedScores[cleanDim] = (recalculatedScores[cleanDim] || 0) + finalWeight;
        });
    });

    // 应用权重后更新维度得分
    this.setData({ dimensionScores: recalculatedScores });

    let bestMatch = null;
    let highestScore = -Infinity;
    let defaultResult = null;
    let resultIndex = -1; // 记录匹配结果的索引

    // 查找formula为"true"的默认结果
    this.data.testData.results.forEach(result => {
        if (result.formula === "true") {
            defaultResult = result;
        }
    });

    // 尝试匹配所有特定公式
    this.data.testData.results.forEach((result, i) => {
        try {
            // 跳过默认结果
            if (result.formula === "true") {
                return;
            }

            const isMatch = this.evaluateFormula(result.formula, recalculatedScores);
            if (isMatch) {
                const totalScore = Object.values(recalculatedScores).reduce((sum, score) => sum + score, 0);
                if (totalScore > highestScore) {
                    highestScore = totalScore;
                    bestMatch = result;
                    resultIndex = i; // 记录匹配结果的索引
                }
            }
        } catch (e) {
            console.error(`公式计算失败`, e);
        }
    });

    // 如果没有匹配到特定公式，使用默认结果
    if (!bestMatch && defaultResult) {
        bestMatch = defaultResult;
        // 查找默认结果的索引
        resultIndex = this.data.testData.results.findIndex(r => r.formula === "true");
    }
    
    // 如果没有任何匹配（包括默认结果），则使用第一个结果
    if (!bestMatch) {
        bestMatch = this.data.testData.results[0];
        resultIndex = 0;
    }
    
    // 计算真实的结果概率分布
    const resultPercentage = this.calculateRealResultProbability(bestMatch);
    console.log(`[结果概率计算] 结果: ${bestMatch.title}, 概率: ${resultPercentage}%`);
    
    // 将占比添加到结果数据中
    bestMatch.resultPercentage = resultPercentage;
    
    this.showResult(bestMatch);
}

,

evaluateFormula(formula, env) {
  try {
      // 确保 `safeEnv` 是标准对象
      let safeEnv = JSON.parse(JSON.stringify(env));
      Object.keys(safeEnv).forEach(key => {
          if (safeEnv[key] === undefined) {
              safeEnv[key] = 0;
          }
      });

      // 处理公式评估
      
      // 如果公式是"true"，直接返回true
      if (formula === "true") {
          return true;
      }
      
      // 处理包含乘法的公式，如"Record*1.1 >= 31"
      let processedFormula = formula;
      
      // 先处理乘法部分
      if (processedFormula.includes('*')) {
          // 找出所有可能的乘法表达式
          const multiplyRegex = /([a-zA-Z_][a-zA-Z0-9_]*)\s*\*\s*([0-9.]+)/g;
          let match;
          
          // 替换所有乘法表达式
          while ((match = multiplyRegex.exec(processedFormula)) !== null) {
              const varName = match[1];
              const multiplier = parseFloat(match[2]);
              
              if (safeEnv[varName] !== undefined) {
                  const result = safeEnv[varName] * multiplier;
                  // 替换整个乘法表达式为计算结果
                  processedFormula = processedFormula.replace(
                      `${varName}*${multiplier}`, 
                      result.toString()
                  );
              }
          }
      }
      
      // 替换剩余的变量为实际值
      Object.keys(safeEnv).forEach(key => {
          // 使用正则表达式确保只替换完整的变量名
          const regex = new RegExp(`\\b${key}\\b`, 'g');
          processedFormula = processedFormula.replace(regex, safeEnv[key]);
      });
      
      // console.log(`[公式评估] 原始公式: ${formula}, 处理后: ${processedFormula}`);
      // console.log(`[公式评估] 维度得分:`, safeEnv);
      
      // 使用安全的公式评估，支持逻辑运算符
      // 处理包含 && 和 || 的复合表达式
      let result = false;
      
      try {
          // 使用eval来处理复杂的逻辑表达式，但确保安全性
          // 先验证公式只包含允许的字符和运算符
          const allowedPattern = /^[\d\s\(\)\&\|\!\=\<\>\+\-\*\/\.]+$/;
          if (allowedPattern.test(processedFormula)) {
              result = eval(processedFormula);
          } else {
              // 如果包含不允许的字符，回退到简单比较
              if (processedFormula.includes('>=')) {
                  const parts = processedFormula.split('>=');
                  result = Number(parts[0].trim()) >= Number(parts[1].trim());
              } else if (processedFormula.includes('<=')) {
                  const parts = processedFormula.split('<=');
                  result = Number(parts[0].trim()) <= Number(parts[1].trim());
              } else if (processedFormula.includes('>')) {
                  const parts = processedFormula.split('>');
                  result = Number(parts[0].trim()) > Number(parts[1].trim());
              } else if (processedFormula.includes('<')) {
                  const parts = processedFormula.split('<');
                  result = Number(parts[0].trim()) < Number(parts[1].trim());
              } else if (processedFormula.includes('==')) {
                  const parts = processedFormula.split('==');
                  result = Number(parts[0].trim()) == Number(parts[1].trim());
              } else if (processedFormula.includes('!=')) {
                  const parts = processedFormula.split('!=');
                  result = Number(parts[0].trim()) != Number(parts[1].trim());
              }
          }
      } catch (evalError) {
          console.warn('公式评估失败，使用简单比较:', processedFormula, evalError);
          // 回退到简单比较逻辑
          if (processedFormula.includes('>=')) {
              const parts = processedFormula.split('>=');
              result = Number(parts[0].trim()) >= Number(parts[1].trim());
          } else if (processedFormula.includes('<=')) {
              const parts = processedFormula.split('<=');
              result = Number(parts[0].trim()) <= Number(parts[1].trim());
          } else if (processedFormula.includes('>')) {
              const parts = processedFormula.split('>');
              result = Number(parts[0].trim()) > Number(parts[1].trim());
          } else if (processedFormula.includes('<')) {
              const parts = processedFormula.split('<');
              result = Number(parts[0].trim()) < Number(parts[1].trim());
          } else if (processedFormula.includes('==')) {
              const parts = processedFormula.split('==');
              result = Number(parts[0].trim()) == Number(parts[1].trim());
          } else if (processedFormula.includes('!=')) {
              const parts = processedFormula.split('!=');
              result = Number(parts[0].trim()) != Number(parts[1].trim());
          }
      }
      
      // console.log(`[公式评估] 结果: ${result}`);
      return Boolean(result);
  } catch (e) {
      console.error('公式执行失败:', formula, e);
      return false;
  }
}

,

  // 计算真实的结果概率分布（优化版本）
  calculateRealResultProbability(targetResult) {
    // console.log(`[概率计算开始] 目标结果: ${targetResult.title}`);
    
    // 检查是否已经缓存了概率分布
    if (!this.probabilityCache) {
      // console.log('[概率缓存] 缓存不存在，开始计算所有结果概率');
      this.probabilityCache = this.calculateAllResultProbabilities();
      // console.log('[概率缓存] 概率计算完成，已缓存');
    } else {
      // console.log('[概率缓存] 使用已缓存的概率数据');
    }
    
    // 从缓存中获取目标结果的概率
    const probability = this.probabilityCache[targetResult.title] || '0.00';
    // console.log(`[概率获取] ${targetResult.title} 的概率: ${probability}%`);
    
    return probability;
  },

  // 获取所有结果的概率分布（直接从预计算数据读取）
  calculateAllResultProbabilities() {
    const testData = this.data.testData;
    
    // 直接从testData中读取预计算的概率数据
    if (testData.resultProbabilities) {
      console.log('[概率获取] 使用预计算的概率数据');
      return testData.resultProbabilities;
    }
    
    // 如果没有预计算数据，返回默认概率（平均分布）
    console.warn('[概率获取] 未找到预计算数据，使用默认平均分布');
    const defaultProbabilities = {};
    const averageProbability = (100 / testData.results.length).toFixed(2);
    
    testData.results.forEach(result => {
      defaultProbabilities[result.title] = averageProbability;
    });
    
    return defaultProbabilities;
  },



  showResult(data) {
    // console.log(`[传递给组件] resultPercentage: ${data.resultPercentage}%, 结果标题: ${data.title}`);
    this.setData({
      showResult: true,
      resultData: data,
      isProcessing: false // 重置处理标志位
    });
    
    // 触发测试完成成就检查
    this.checkTestAchievements();
    
    // 检查时间相关成就
    this.checkTimeAchievements();
  },
  
  // 检查测试相关成就
  checkTestAchievements() {
    const app = getApp();
    
    // 获取已完成的测试数量
    const completedTests = app.globalData.completedTests || [];
    const testId = this.data.testData.id;
    
    // 测试成就检查
    
    // 如果这个测试ID不在已完成列表中，添加它
    if (!completedTests.includes(testId)) {
      completedTests.push(testId);
      app.globalData.completedTests = completedTests;
      wx.setStorageSync('completedTests', completedTests);
      
      // 新测试完成，更新测试记录
      
      // 检查成就：首次完成任意测试
      if (completedTests.length === 1) {
        this.updateAchievement('test', 1);
      }
      
      // 实时更新测试相关成就的进度
      this.updateTestAchievementProgress('test1', completedTests.length); // 完成5个测试
      this.updateTestAchievementProgress('test2', completedTests.length); // 完成10个测试
      this.updateTestAchievementProgress('test3', completedTests.length); // 完成20个测试
      
      // 检查成就：完成5个测试
      if (completedTests.length >= 5) {
        this.updateAchievement('test1', 5);
      }
      
      // 检查成就：完成10个测试
      if (completedTests.length >= 10) {
        this.updateAchievement('test2', 10);
      }
      
      // 检查成就：完成20个测试
      if (completedTests.length >= 20) {
        this.updateAchievement('test3', 20);
      }
    }
  },
  
  // 实时更新测试成就进度（不触发解锁，只更新进度显示）
  updateTestAchievementProgress(achievementId, currentProgress) {
    const app = getApp();
    
    // 确保userAchievements已初始化
    if (!app.globalData.userAchievements) {
      app.globalData.userAchievements = {};
    }
    
    // 获取成就配置数据
    const { achievements } = require('../../data/achievements.js');
    const achievement = achievements.find(a => a.id === achievementId);
    
    if (!achievement) {
      console.warn(`找不到成就配置: ${achievementId}`);
      return;
    }
    
    const targetProgress = achievement.value;
    
    // 获取当前成就数据
    const achievementData = typeof app.globalData.userAchievements[achievementId] === 'object' 
      ? app.globalData.userAchievements[achievementId] 
      : { progress: 0, unlockTime: null };
    
    // 只有在未解锁状态下才更新进度显示
    if (!achievementData.unlockTime && currentProgress < targetProgress) {
      app.globalData.userAchievements[achievementId] = {
        progress: currentProgress,
        unlockTime: achievementData.unlockTime
      };
      wx.setStorageSync('achievements', app.globalData.userAchievements);
      
      console.log(`[进度更新] ${achievementId}: ${currentProgress}/${targetProgress}`);
    }
  },
  
  // 更新成就进度
  updateAchievement(achievementId, progress) {
    const app = getApp();
    // 获取当前成就数据，适配新旧格式
    const achievementData = typeof app.globalData.userAchievements[achievementId] === 'object' 
      ? app.globalData.userAchievements[achievementId] 
      : { progress: 0, unlockTime: null };
    
    const current = achievementData.progress || 0;
    
    // 成就更新
    
    // 如果已经达到目标值，不再更新
    if (current >= progress) {
      return;
    }
    
    // 使用app.js中的方法更新成就进度，这样会自动记录解锁时间
    app.updateAchievementProgress(achievementId, progress - current);
    
    // 获取成就数据
    const { achievements: allAchievements } = require('../../data/achievements.js');
    const achievement = allAchievements.find(a => a.id === achievementId);
    
    if (achievement) {
      // 确保成就对象包含正确的icon属性
      const { getAchievementIcon } = require('../../data/achievements.js');
      const achievementWithIcon = {
        ...achievement,
        icon: achievement.getIcon ? achievement.getIcon(true) : getAchievementIcon(achievement.id, true)
      };
      
      console.log('[test.js] 成就图标地址:', achievementWithIcon.icon);
      
      // 增加成就分数
      const oldScore = app.globalData.achievementScore || 0;
      app.globalData.achievementScore = oldScore + achievement.score;
      wx.setStorageSync('achievementScore', app.globalData.achievementScore);
      
      // 检查成就分数相关的成就（type: 2）
      this.checkScoreAchievements();
      
      // 将成就添加到待展示队列
      if (!app.globalData.pendingAchievements) {
        app.globalData.pendingAchievements = [];
      }
      app.globalData.pendingAchievements.push(achievementWithIcon);
      wx.setStorageSync('pendingAchievements', app.globalData.pendingAchievements);
      
      // 检查成就值相关的成就
      this.checkScoreAchievements();
    } else {
      console.error(`找不到成就定义: ${achievementId}`)
    }
  },
  
  // 检查成就值相关的成就
  checkScoreAchievements() {
    const app = getApp();
    const { achievements: allAchievements } = require('../../data/achievements.js');
    const scoreAchievements = allAchievements.filter(a => a.type === 2);
    const currentScore = app.globalData.achievementScore || 0;
    
    // 成就值相关成就检查
    
    scoreAchievements.forEach(achievement => {
      const current = app.globalData.userAchievements[achievement.id] || 0;
      
      if (currentScore >= achievement.value) {
        if (current < achievement.value) {
          // 解锁成就，使用app.js中的方法更新成就进度，这样会自动记录解锁时间
          app.updateAchievementProgress(achievement.id, achievement.value - current);
          
          // 增加成就分数
          const oldScore = app.globalData.achievementScore;
          app.globalData.achievementScore += achievement.score;
          wx.setStorageSync('achievementScore', app.globalData.achievementScore);
          
          // 检查成就分数相关的成就（type: 2）
          this.checkScoreAchievements();
          
          // 确保成就对象包含正确的icon属性
          const { getAchievementIcon } = require('../../data/achievements.js');
          const achievementWithIcon = {
            ...achievement,
            icon: achievement.getIcon ? achievement.getIcon(true) : getAchievementIcon(achievement.id, true)
          };
          
          console.log('[test.js checkScoreAchievements] 成就图标地址:', achievementWithIcon.icon);
          
          // 将成就添加到待展示队列
          if (!app.globalData.pendingAchievements) {
            app.globalData.pendingAchievements = [];
          }
          app.globalData.pendingAchievements.push(achievementWithIcon);
          wx.setStorageSync('pendingAchievements', app.globalData.pendingAchievements);
        }
      }
    });
  },

  // 检查时间相关成就
  checkTimeAchievements() {
    const app = getApp();
    const { achievements: allAchievements } = require('../../data/achievements.js');
    
    // 获取当前时间（北京时间，UTC+8）
    const now = new Date();
    const beijingTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const currentHour = beijingTime.getUTCHours();
    
    // 时间相关成就检查
    
    // 筛选出type:4类型的成就（时间段内完成测试）
    const timeAchievements = allAchievements.filter(a => a.type === 4);
    // 时间相关成就检查
    
    timeAchievements.forEach(achievement => {
      // 获取成就定义的时间范围
      const startHour = achievement.value[0][0];
      const endHour = achievement.value[1][0];
      
      // 检查时间范围
      
      // 检查当前时间是否在成就定义的时间范围内
      let isInTimeRange = false;
      
      if (startHour <= endHour) {
        // 正常时间段（例如：8点到17点）
        isInTimeRange = currentHour >= startHour && currentHour < endHour;
      } else {
        // 跨天时间段（例如：22点到5点）
        isInTimeRange = currentHour >= startHour || currentHour < endHour;
      }
      
      if (isInTimeRange) {
        // 当前时间在成就时间范围内
        
        // 获取当前成就进度
        const achievementData = typeof app.globalData.userAchievements[achievement.id] === 'object'
          ? app.globalData.userAchievements[achievement.id]
          : { progress: 0, unlockTime: null };
        
        const current = achievementData.progress || 0;
        
        // 如果成就尚未解锁，则解锁它
        if (current < 1) {
          this.updateAchievement(achievement.id, 1);
        }
      } else {
      }
    });
  },
  
  backToHome() {
    // 添加一个提示，让用户知道手势被触发了
    wx.showToast({
      title: '返回上一页',
      icon: 'none',
      duration: 500
    });
    
    // 返回上一页，如果失败则返回首页
    wx.navigateBack({
      delta: 1,
      fail: function() {
        // 如果没有上一页，则返回首页
        wx.switchTab({ 
          url: '/pages/home/home' 
        });
      }
    });
  },

  goPrev() {
    if (this.data.currentQuestion.id <= 1) return;
    
    const prevId = this.data.currentQuestion.id - 1;
    const prevQuestion = this.data.testData.questions.find(q => q.id === prevId);
    
    // 查找之前的答案
    const prevAnswer = this.data.answers.find(a => a.questionId === prevId);
    const prevSelectedIndex = prevAnswer ? prevAnswer.selectedOption : null;
    
    // 先重置selectedIndex为null，确保清除选中状态
    this.setData({ 
      selectedIndex: null,
      isProcessing: true // 设置处理标志位，防止用户快速点击
    }, () => {
      // 在回调中确认选中状态已被清除
    });
    
    // 使用setTimeout确保DOM有时间更新，清除选中效果
    setTimeout(() => {
      // 然后更新到上一题并设置正确的选中状态
      this.setData({
        currentQuestion: prevQuestion,
        progress: (prevId / this.data.totalQuestions) * 100,
        selectedIndex: prevSelectedIndex,
        isProcessing: false // 重置处理标志位
      });
    }, 100); // 增加延迟时间，确保DOM有足够时间更新
  
  },


});
