// 基于种子的随机数生成器
export class SeededRNG {
    constructor(seed = Date.now()) {
      this.seed = seed % 2147483647;
    }
  
    next() {
      this.seed = (this.seed * 16807) % 2147483647;
      return (this.seed - 1) / 2147483646;
    }
  }

// 生成指定范围内的随机整数
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}