const mbtiDataModule = require('../../data/MBTIData');
const mbtiData28Module = require('../../data/MBTIData28');

Page({
  data: {
    testData: null,
    currentQuestion: {},
    totalQuestions: 0,
    progress: 0,
    selectedIndex: null,
    answers: [],
    dimensionScores: {
      E: 0, // 外向
      I: 0, // 内向
      S: 0, // 感觉
      N: 0, // 直觉
      T: 0, // 思考
      F: 0, // 情感
      J: 0, // 判断
      P: 0  // 知觉
    }, // 维度得分
    isProcessing: false, // 添加处理标志位，防止重复处理
    
    highlightedArticles: [] // 用于存储高亮处理后的文章数据
  },
  
  // 页面加载时初始化触摸变量
  touchStartX: 0,

  onLoad(options) {
    console.log('测试页面加载，参数：', options);
    
    // 清除概率缓存，确保使用最新的测试数据
    this.probabilityCache = null;
    
    // 保存页面参数
    this.options = options;
    
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
    let selectedTest;
    
    // 根据页面参数选择测试数据
    if (this.options && this.options.type === 'mbti') {
      if (mbtiDataModule && mbtiDataModule.mbtiPersonalityTest) {
        selectedTest = mbtiDataModule.mbtiPersonalityTest;
      } else {
        console.error('MBTI data not found, falling back to default test');
        selectedTest = mbtiDataModule.mbtiPersonalityTest;
      }
    } else if (this.options && this.options.type === 'quick') {
      // 使用MBTIData28.js的精简版测试数据
      if (mbtiData28Module && mbtiData28Module.mbtiPersonalityTestLite) {
        selectedTest = mbtiData28Module.mbtiPersonalityTestLite;
      } else {
        console.error('MBTIData28 not found, falling back to default test');
        selectedTest = mbtiDataModule.mbtiPersonalityTest;
      }
    } else {
      selectedTest = wx.getStorageSync('selectedTest') || mbtiDataModule.mbtiPersonalityTest;
    }

    // 最终安全检查
    if (!selectedTest || !selectedTest.questions || selectedTest.questions.length === 0) {
      console.error('Selected test is invalid, using default test');
      selectedTest = mbtiDataModule.mbtiPersonalityTest;
    }

    // 重置所有标志位，确保页面状态干净
    this.isCalculatingResult = false;

    this.setData({
      testData: selectedTest,
      currentQuestion: selectedTest.questions[0],
      totalQuestions: selectedTest.questions.length,
      progress: (1 / selectedTest.questions.length) * 100,
      selectedIndex: null, // 重置选择状态
      dimensionScores: {
        E: 0, // 外向
        I: 0, // 内向
        S: 0, // 感觉
        N: 0, // 直觉
        T: 0, // 思考
        F: 0, // 情感
        J: 0, // 判断
        P: 0  // 知觉
      }, // 确保初始化包含所有维度
      answers: [],
      isProcessing: false // 重置处理标志位
    });
  },

  selectOption(e) {
    // 如果正在处理中，则忽略此次点击
    if (this.data.isProcessing) return;
    
    // 设置处理标志位，防止连点
    this.setData({ isProcessing: true });
    
    const index = e.currentTarget.dataset.index;
    this.setData({ selectedIndex: index });
    
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
    
    // 短暂延迟后自动进入下一题，给用户一个视觉反馈的时间
    setTimeout(() => {
      // 确保选中状态在进入下一题前已被正确处理
      this.goNext();
    }, 350); // 增加延迟时间，确保视觉反馈完成
  },

  goNext() {
    // 如果没有选择或正在处理中，则返回
    if (this.data.selectedIndex === null || this.data.isProcessing) return;
    
    const currentQuestionId = this.data.currentQuestion.id;
    const existingAnswerIndex = this.data.answers.findIndex(a => a.questionId === currentQuestionId);
    
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
    const newAnswer = {
      questionId: currentQuestionId,
      selectedOption: selectedOptionIndex,
      resultKey: currentAnswer.resultKey
    };
    
    if (existingAnswerIndex !== -1) {
      // 如果题目已经回答过，更新现有答案
      updatedAnswers[existingAnswerIndex] = newAnswer;
      console.log(`[更新答案] 题目${currentQuestionId}的答案已更新`);
    } else {
      // 如果是新题目，添加新答案
      updatedAnswers.push(newAnswer);
    }

    // 添加详细的选择日志
    console.log(`[选择记录] 题目${currentQuestionId}: ${this.data.currentQuestion.text}`);
    console.log(`[选择记录] 选择选项${selectedOptionIndex}: ${currentAnswer.text}`);
    console.log(`[选择记录] 原始得分: ${JSON.stringify(currentAnswer.resultKey)}`);

    // 计算维度得分
    const updatedDimensionScores = { ...this.data.dimensionScores };
    const scoreChanges = []; // 记录本次得分变化

    // 如果是更新已有答案，先减去之前的得分
    if (existingAnswerIndex !== -1) {
      const oldAnswer = this.data.answers[existingAnswerIndex];
      oldAnswer.resultKey.forEach(([dimension, baseWeight]) => {
        const cleanDim = dimension.trim().charAt(0).toUpperCase() + dimension.trim().slice(1).toLowerCase();
        const dimensionWeight = this.data.testData.dimensionWeights[cleanDim] || 1;
        const finalWeight = baseWeight * dimensionWeight;
        
        if (updatedDimensionScores[cleanDim]) {
          updatedDimensionScores[cleanDim] -= finalWeight;
          console.log(`[减去旧得分] ${cleanDim}: -${finalWeight}`);
        }
      });
    }

    // 添加新的得分
    currentAnswer.resultKey.forEach(([dimension, baseWeight]) => {
      const cleanDim = dimension.trim().charAt(0).toUpperCase() + dimension.trim().slice(1).toLowerCase();
      const dimensionWeight = this.data.testData.dimensionWeights[cleanDim] || 1;
      const finalWeight = baseWeight * dimensionWeight;
      
      if (!updatedDimensionScores[cleanDim]) {
        updatedDimensionScores[cleanDim] = 0;
      }
      const oldScore = updatedDimensionScores[cleanDim];
      updatedDimensionScores[cleanDim] += finalWeight;
      
      // 记录得分变化
      scoreChanges.push({
        dimension: cleanDim,
        baseWeight: baseWeight,
        dimensionWeight: dimensionWeight,
        finalWeight: finalWeight,
        oldScore: oldScore,
        newScore: updatedDimensionScores[cleanDim]
      });
    });

    console.log(`[得分变化] 详细计算:`, scoreChanges);
    console.log(`[当前总分] 维度得分:`, updatedDimensionScores);

    // 确保数据正确存储
    this.setData({
      answers: updatedAnswers,
      dimensionScores: updatedDimensionScores
    });

    const nextId = currentQuestionId + 1;
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
      // 防止重复计算结果
      if (!this.isCalculatingResult) {
        this.isCalculatingResult = true;
        this.calculateResult();
      }
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

    // 初始化包含所有8个MBTI维度的得分对象
    const recalculatedScores = {
      E: 0, // 外向
      I: 0, // 内向
      S: 0, // 感觉
      N: 0, // 直觉
      T: 0, // 思考
      F: 0, // 情感
      J: 0, // 判断
      P: 0  // 知觉
    };

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

    console.log(`[结果计算] 开始计算最终MBTI结果`);
    console.log(`[结果计算] 最终维度得分:`, recalculatedScores);

    let bestMatch = null;
    let highestScore = -Infinity;
    let defaultResult = null;
    let resultIndex = -1; // 记录匹配结果的索引
    let matchedResults = []; // 记录所有匹配的结果

    // 查找formula为"true"的默认结果
    this.data.testData.results.forEach(result => {
        if (result.formula === "true") {
            defaultResult = result;
            console.log(`[结果计算] 找到默认结果: ${result.title}`);
        }
    });

    // 尝试匹配所有特定公式
    this.data.testData.results.forEach((result, i) => {
        try {
            // 跳过默认结果
            if (result.formula === "true") {
                return;
            }

            console.log(`[公式匹配] 测试 ${result.title}: ${result.formula}`);
            const isMatch = this.evaluateFormula(result.formula, recalculatedScores);
            console.log(`[公式匹配] ${result.title} 匹配结果: ${isMatch}`);
            
            if (isMatch) {
                const totalScore = Object.values(recalculatedScores).reduce((sum, score) => sum + score, 0);
                console.log(`[公式匹配] ${result.title} 匹配成功! 总分: ${totalScore}`);
                
                matchedResults.push({
                    title: result.title,
                    totalScore: totalScore,
                    index: i
                });
                
                if (totalScore > highestScore) {
                    console.log(`[公式匹配] 更新最佳匹配: ${result.title} (${totalScore} > ${highestScore})`);
                    highestScore = totalScore;
                    bestMatch = result;
                    resultIndex = i; // 记录匹配结果的索引
                } else {
                    console.log(`[公式匹配] ${result.title} 总分不够高，保持当前最佳匹配`);
                }
            }
        } catch (e) {
            console.error(`[公式匹配] ${result.title} 公式计算失败:`, e);
        }
    });

    console.log(`[结果计算] 所有匹配的结果:`, matchedResults);

    // 如果没有匹配到特定公式，使用默认结果
    if (!bestMatch && defaultResult) {
        console.log(`[结果计算] 没有匹配的特定公式，使用默认结果: ${defaultResult.title}`);
        bestMatch = defaultResult;
        // 查找默认结果的索引
        resultIndex = this.data.testData.results.findIndex(r => r.formula === "true");
    }
    
    // 如果没有任何匹配（包括默认结果），则使用第一个结果
    if (!bestMatch) {
        console.log(`[结果计算] 没有任何匹配结果，使用第一个结果: ${this.data.testData.results[0].title}`);
        bestMatch = this.data.testData.results[0];
        resultIndex = 0;
    }
    
    console.log(`[结果计算] 最终选择结果: ${bestMatch.title} (索引: ${resultIndex}, 最高分: ${highestScore})`);
    
    // 计算真实的结果概率分布
    const resultPercentage = this.calculateRealResultProbability(bestMatch);
    console.log(`[结果概率计算] 结果: ${bestMatch.title}, 概率: ${resultPercentage}%`);
    
    // 将占比和索引添加到结果数据中
    bestMatch.resultPercentage = resultPercentage;
    bestMatch.resultIndex = resultIndex; // 添加结果索引用于历史记录优化
    
    this.showResult(bestMatch);
}

,

evaluateFormula(formula, env) {
  try {
      console.log(`[公式计算] 开始计算公式: ${formula}`);
      console.log(`[公式计算] 维度得分环境:`, env);
      
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
          console.log(`[公式计算] 公式为"true"，直接返回true`);
          return true;
      }
      
      // 移除公式两端的括号
      let processedFormula = formula.replace(/^\(|\)$/g, '');
      console.log(`[公式计算] 移除括号后: ${processedFormula}`);
      
      // 处理MBTI格式的公式，如"I>=E && N>=S && T>=F && J>=P"
      // 替换变量为实际值
      Object.keys(safeEnv).forEach(key => {
          // 使用正则表达式确保只替换完整的变量名
          const regex = new RegExp(`\\b${key}\\b`, 'g');
          const oldFormula = processedFormula;
          processedFormula = processedFormula.replace(regex, safeEnv[key] || 0);
          if (oldFormula !== processedFormula) {
              console.log(`[公式计算] 替换 ${key}=${safeEnv[key]}: ${oldFormula} -> ${processedFormula}`);
          }
      });
      
      // 处理包含乘法的公式，如"Record*1.1 >= 31"
      if (processedFormula.includes('*')) {
          // 找出所有可能的乘法表达式
          const multiplyRegex = /([0-9.]+)\s*\*\s*([0-9.]+)/g;
          let match;
          
          // 替换所有乘法表达式
          while ((match = multiplyRegex.exec(processedFormula)) !== null) {
              const num1 = parseFloat(match[1]);
              const num2 = parseFloat(match[2]);
              const result = num1 * num2;
              
              // 替换整个乘法表达式为计算结果
              processedFormula = processedFormula.replace(
                  `${match[1]}*${match[2]}`, 
                  result.toString()
              );
          }
      }
      
      console.log(`[公式评估] 原始公式: ${formula}, 处理后: ${processedFormula}`);
      console.log(`[公式评估] 维度得分:`, safeEnv);
      
      // 使用安全的公式评估，支持逻辑运算符
      // 处理包含 && 和 || 的复合表达式
      let result = false;
      
      try {
          // 使用eval来处理复杂的逻辑表达式，但确保安全性
          // 先验证公式只包含允许的字符和运算符
          const allowedPattern = /^[\d\s\(\)\&\|\!\=\<\>\+\-\*\/\.]+$/;
          if (allowedPattern.test(processedFormula)) {
              console.log(`[公式计算] 使用eval计算: ${processedFormula}`);
              result = eval(processedFormula);
              console.log(`[公式计算] eval结果: ${result}`);
          } else {
              console.log(`[公式计算] 公式包含不允许字符，使用简单比较: ${processedFormula}`);
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
          console.warn('[公式计算] eval失败，使用简单比较:', processedFormula, evalError);
          // 回退到简单比较逻辑
          if (processedFormula.includes('>=')) {
              const parts = processedFormula.split('>=');
              const left = Number(parts[0].trim());
              const right = Number(parts[1].trim());
              result = left >= right;
              console.log(`[公式计算] 简单比较 ${left} >= ${right} = ${result}`);
          } else if (processedFormula.includes('<=')) {
              const parts = processedFormula.split('<=');
              const left = Number(parts[0].trim());
              const right = Number(parts[1].trim());
              result = left <= right;
              console.log(`[公式计算] 简单比较 ${left} <= ${right} = ${result}`);
          } else if (processedFormula.includes('>')) {
              const parts = processedFormula.split('>');
              const left = Number(parts[0].trim());
              const right = Number(parts[1].trim());
              result = left > right;
              console.log(`[公式计算] 简单比较 ${left} > ${right} = ${result}`);
          } else if (processedFormula.includes('<')) {
              const parts = processedFormula.split('<');
              const left = Number(parts[0].trim());
              const right = Number(parts[1].trim());
              result = left < right;
              console.log(`[公式计算] 简单比较 ${left} < ${right} = ${result}`);
          } else if (processedFormula.includes('==')) {
              const parts = processedFormula.split('==');
              const left = Number(parts[0].trim());
              const right = Number(parts[1].trim());
              result = left == right;
              console.log(`[公式计算] 简单比较 ${left} == ${right} = ${result}`);
          } else if (processedFormula.includes('!=')) {
              const parts = processedFormula.split('!=');
              const left = Number(parts[0].trim());
              const right = Number(parts[1].trim());
              result = left != right;
              console.log(`[公式计算] 简单比较 ${left} != ${right} = ${result}`);
          }
      }
      
      console.log(`[公式计算] 最终结果: ${result}`);
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
    
    // 从title中提取MBTI类型代码（例如："INTJ - 建筑师型钓手" -> "INTJ"）
    const mbtiType = targetResult.title.split(' - ')[0];
    
    // 从缓存中获取目标结果的概率
    const probability = this.probabilityCache[mbtiType] || this.probabilityCache[targetResult.title] || '0.00';
    // console.log(`[概率获取] ${targetResult.title} (${mbtiType}) 的概率: ${probability}%`);
    
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
    
    // 将结果数据存储到全局数据中
    const app = getApp();
    app.globalData.testResult = data;
    
    // 保存测试历史记录
    this.saveTestHistory(data);
    
    // 跳转到结果页面
    wx.navigateTo({
      url: '/pages/result/result'
    });
    
    // 重置处理标志位
    this.setData({
      isProcessing: false
    });
    
    // 重置结果计算标志位
    this.isCalculatingResult = false;
    
    // 成就系统已移除
  },
  
  // 保存测试历史记录
  saveTestHistory(result) {
    try {
      const app = getApp();
      // 根据options.type确定测试类型
      let testType = 'normal';
      if (this.options && this.options.type === 'quick') {
        testType = 'quick';
      } else if (this.options && this.options.type === 'mbti') {
        testType = 'mbti';
      }
      
      // 优化存储：只保存索引和基本信息，数据从本地MBTIData中获取
      const testHistory = {
        id: Date.now(), // 使用时间戳作为唯一ID
        resultIndex: result.resultIndex, // 保存结果在MBTIData中的索引
        resultPercentage: result.resultPercentage,
        testType: testType, // 记录测试类型
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('zh-CN'),
        time: new Date().toLocaleTimeString('zh-CN', { hour12: false })
      };
      
      // 获取现有历史记录
      let historyList = wx.getStorageSync('testHistory') || [];
      
      // 添加新记录到开头
      historyList.unshift(testHistory);
      
      // 限制历史记录数量（最多保存50条）
      if (historyList.length > 50) {
        historyList = historyList.slice(0, 50);
      }
      
      // 保存到本地存储
      wx.setStorageSync('testHistory', historyList);
      
      // 同时更新全局数据
      app.globalData.testHistory = historyList;
      
      console.log('测试历史记录已保存:', testHistory);
    } catch (error) {
      console.error('保存测试历史记录失败:', error);
    }
  },
  
  // 成就系统相关函数已移除
  

  

  



  
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
