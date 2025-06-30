// 获取图片主色调（核心方法）
async function getDominantColor(imagePath, callback) {
  try {
    // 1. 验证图片路径
    if (!imagePath || typeof imagePath !== 'string') {
      console.error('Invalid image path format:', imagePath);
      return callback('rgb(255,255,255)');
    }

    if (!imagePath.startsWith('http') && !imagePath.startsWith('/') && !imagePath.startsWith('..')) {
      console.error('Invalid image path format:', imagePath);
      return callback('rgb(255,255,255)');
    }

    // 2. 创建2D Canvas上下文
    const query = wx.createSelectorQuery()
    const canvas = await new Promise((resolve, reject) => {
      query.select('#colorAnalyzerCanvas')
        .fields({ node: true, size: true })
        .exec(res => {
          if (res[0] && res[0].node) {
            const canvas = res[0].node
            const ctx = canvas.getContext('2d')
            resolve({ canvas, ctx })
          } else {
            console.error('Canvas not found or not a 2d canvas');
            reject(new Error('Canvas not found'))
          }
        })
    }).catch(err => {
      console.error('Failed to get canvas:', err);
      callback('rgb(255,255,255)');
      return null;
    });

    if (!canvas) return;

    // 3. 设置Canvas尺寸
    canvas.canvas.width = 100
    canvas.canvas.height = 100

    // 4. 加载图片
    const img = canvas.canvas.createImage()
    await new Promise((resolve, reject) => {
      img.onload = resolve
      img.onerror = (err) => {
        console.error('Image load error:', err, 'Path:', imagePath)
        reject(new Error('Image load failed'))
      }
      img.src = imagePath
    }).catch(err => {
      console.error('Image loading failed:', err);
      callback('rgb(255,255,255)');
      return;
    });

    // 5. 绘制并分析
    canvas.ctx.drawImage(img, 0, 0, 100, 100)
    const imageData = canvas.ctx.getImageData(0, 0, 100, 100)
    const pixels = imageData.data
    const colorCount = {}
    let maxCount = 0
    let dominantColor = ''

    // 简化版颜色统计算法
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i]
      const g = pixels[i + 1]
      const b = pixels[i + 2]
      const color = `rgb(${r},${g},${b})`

      colorCount[color] = (colorCount[color] || 0) + 1
      if (colorCount[color] > maxCount) {
        maxCount = colorCount[color]
        dominantColor = color
      }
    }

    callback(dominantColor || 'rgb(255,255,255)')
  } catch (error) {
    console.error('Color analysis failed:', error)
    callback('rgb(255,255,255)')
  }
}

// RGB转HEX
function rgbToHex(rgb) {
  // 格式校验：必须符合 rgb(255,255,255) 格式
  const strictRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i;
  const matches = rgb.match(strictRegex);
  
  if (!matches || matches.length < 4) {
    console.error('Invalid RGB format:', rgb);
    return '#ffffff'; // 返回默认白色
  }

  const hex = (x) => {
    const val = parseInt(x);
    return Number.isNaN(val) ? '00' : Math.max(0, Math.min(255, val)).toString(16).padStart(2, '0');
  };

  return `#${hex(matches[1])}${hex(matches[2])}${hex(matches[3])}`;
}

module.exports = { getDominantColor, rgbToHex }