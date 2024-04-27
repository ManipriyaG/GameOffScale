class CollisionSystem {
    static checkCollisions(particleSystem, enemySystem) {
      for (let i = particleSystem.particles.length - 1; i >= 0; i--) {
        const particle = particleSystem.particles[i];
        for (let j = enemySystem.enemies.length - 1; j >= 0; j--) {
          const enemy = enemySystem.enemies[j];
  
          // Check if the distance between particle and enemy is less than the sum of their radii
          const distance = Math.sqrt(
            Math.pow(particle.position.getX() - enemy.position.getX(), 2) +
            Math.pow(particle.position.getY() - enemy.position.getY(), 2)
          );
  
          if (distance < particle.radius + enemy.radius) {
            // Collision detected, remove particle and enemy
            particleSystem.particles.splice(i, 1);
            enemySystem.enemies.splice(j, 1);
          }
        }
      }
    }

    static IsColliding(position1, radius1, position2, radius2)
    {
      // Check if the distance between particle and enemy is less than the sum of their radii
      const distance = Math.sqrt(
        Math.pow(position1.getX() -position2.getX(), 2) +
        Math.pow(position1.getY() - position2.getY(), 2)
      );

      if (distance < radius1 + radius2) {
        return true;
      }
      return false;
    }
  }
  
  