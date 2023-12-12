class Player {
    constructor(width, height, color, canvasWidth, canvasHeight) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = (canvasWidth - this.width) / 2;
      this.y = (canvasHeight - this.height) / 2;
    }
  
    draw(context) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }