class Rectangle {
    constructor(x, y, width, height) {
      this.position = new Vector2(x, y);
      this.width = width;
      this.height = height;
    }
  
    update() {}
  
    draw(context) {
      context.fillRect(
        this.position.getX(),
        this.position.getY(),
        this.width,
        this.height
      );
    }
  
    setPosition(x, y) {
      this.position.setX(x);
      this.position.setY(y);
    }
  }