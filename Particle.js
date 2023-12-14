class Particle {
  constructor(radius, initialX, initialY) {
    this.position = new Vector2(initialX, initialY);
    this.velocity = new Vector2(0, 0);
    this.radius = radius;
    this.creationTime = Date.now();
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.multiply(0.95); // applying friction
  }
  
  isExpired() {
    const elapsedTime = Date.now() - this.creationTime;
    return elapsedTime > 5000; // 5000 milliseconds (5 seconds)
  }
  
  draw(context) {
    context.fillStyle = "red";
    context.beginPath();
    context.arc(this.position.getX(), this.position.getY(), this.radius, 0, Math.PI * 2, false);
    context.fill();
  }
}