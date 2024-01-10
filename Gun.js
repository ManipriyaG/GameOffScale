class Gun {
    constructor(x, y, speed, bulletSize, color) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.bulletSize = bulletSize;
      this.color = color;
    }

    draw(context) {
      // context.beginPath();
      // context.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
      // context.fillStyle = this.color;
      // context.fill();
    }

    updatePosition(newX, newY) {
      this.x = newX;
      this.y = newY;
    }
  }
