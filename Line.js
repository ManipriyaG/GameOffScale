  class Line {
    constructor(y, length) {
      this.startPoint = new Vector2(canvas.width/2, y); //calculating x-co-ordinate for the starting point
      this.endPoint = new Vector2((canvas.width/2 + length), y); //calculating y-co-ordinate for the starting point
      this.angle = 0;
    }
  
    update(mouseX, mouseY) {
      const dx = mouseX - this.startPoint.getX(); // Calculate the change in x (dx) and y (dy) between the starting point and the mouse position
      const dy = mouseY - this.startPoint.getY();
      this.angle = Math.atan2(dy, dx); //The Math.atan2 function returns the angle whose tangent is the quotient of the two specified numbers (in this case, dy and dx).
    }
  
    draw(context) {
      context.save(); // save the current state of drawing context
      context.translate(this.startPoint.getX(), this.startPoint.getY()); // moves the co-ordinates to the starting point
      context.rotate(this.angle);
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(this.endPoint.getX() - this.startPoint.getX(), 0); // It identifies the endpoint of the line
      context.stroke(); // renders visible line
      context.restore(); // restores to the original position using context.save()
    }
  }