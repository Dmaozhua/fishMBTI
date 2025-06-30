// 手势识别器
export class GestureRecognizer {
    constructor() {
      this.startX = 0;
      this.startY = 0;
      this.startTime = 0;
      this.track = [];
    }
  
    // 开始触摸
    onStart(e) {
      const { clientX, clientY } = e.touches[0];
      this.startX = clientX;
      this.startY = clientY;
      this.startTime = Date.now();
      this.track = [{ x: clientX, y: clientY, t: 0 }];
    }
  
    // 触摸移动
    onMove(e) {
      const { clientX, clientY } = e.touches[0];
      this.track.push({
        x: clientX,
        y: clientY,
        t: Date.now() - this.startTime
      });
    }
  
    // 结束触摸
    onEnd() {
      const duration = Date.now() - this.startTime;
      const dx = this.track[this.track.length-1].x - this.startX;
      const dy = this.track[this.track.length-1].y - this.startY;
      
      // 判断手势类型
      if (duration > 1000) {
        return { type: "HOLD", duration };
      } else if (Math.abs(dx) > 50 || Math.abs(dy) > 50) {
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        return this._getSwipeDirection(angle);
      } else {
        return { type: "TAP" };
      }
    }
  
    // 计算滑动方向
    _getSwipeDirection(angle) {
      const directions = [
        { range: [-45, 45], type: "SWIPE_RIGHT" },
        { range: [45, 135], type: "SWIPE_DOWN" },
        { range: [135, 180], type: "SWIPE_LEFT" },
        { range: [-180, -135], type: "SWIPE_LEFT" },
        { range: [-135, -45], type: "SWIPE_UP" }
      ];
      return directions.find(d => angle >= d.range[0] && angle < d.range[1])?.type || "SWIPE_UNKNOWN";
    }
  }