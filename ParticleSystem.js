class ParticleSystem {
    constructor() {
      this.particles = [];
    }
  
    emitParticle(radius, initialX, initialY, initialVelocityX, initialVelocityY) {
      const particle = new Particle(radius, initialX, initialY);
      particle.velocity.x = initialVelocityX;
      particle.velocity.y = initialVelocityY;
      this.particles.push(particle);
    }

    update(width, height) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
          const particle = this.particles[i];
          particle.update();
          // Remove particles that hit canvas boundaries or slow down
          if (
            particle.position.getX() < 0 ||
            particle.position.getY() < 0 ||
            particle.position.getX() > width ||
            particle.position.getY() > height ||
            particle.velocity.getMagnitude() < 0.5 // Adjust the threshold as needed
          ) {
            this.particles.splice(i, 1);
          }
        }
      }
    draw(context) {
      this.particles.forEach((particle) => particle.draw(context));
    }
  }
  