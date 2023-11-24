class Particle {
    constructor(x, y, radius) {
      this.position = new Vector2(x, y);
      this.velocity = new Vector2();
      this.acceleration = new Vector2();
      this.radius = radius;
    }
  
    update() {
      this.position.add(this.velocity);
      this.velocity.add(this.acceleration);
      this.velocity.multiply(0.95); // applying friction
    }
  
    draw(context) {
      context.beginPath();
      context.arc(this.position.getX(),this.position.getY(),this.radius,0,Math.PI * 2,false);
      context.fill();
    }
  }