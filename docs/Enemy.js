class Enemy extends Particle {
    constructor(radius, initialX, initialY, targetX, targetY) {
      super(radius, initialX, initialY);
      this.target = new Vector2(targetX, targetY);
      this.speed = 2;
    }
  
    update() {
      const angle = Math.atan2(this.target.getY() - this.position.getY(), this.target.getX() - this.position.getX());
      this.velocity.x = Math.cos(angle) * this.speed;
      this.velocity.y = Math.sin(angle) * this.speed;
      super.update();
    }
  }
  