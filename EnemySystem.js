class EnemySystem {
    constructor() {
      this.enemies = [];
      this.lastEnemyTime = 0;
      this.maxEnemies = 1; // Initial maximum limit for enemies
      this.enemyCount = 0;
    }
  
    emitEnemy(radius, initialX, initialY, targetX, targetY) {
      const enemy = new Enemy(radius, initialX, initialY, targetX, targetY);
      this.enemies.push(enemy);
    }
  
    update(width, height) {
      this.spawnEnemies(width, height);
  
      // Update enemies
      for (let i = this.enemies.length - 1; i >= 0; i--) {
        const enemy = this.enemies[i];
        enemy.update();
  
        // Check if enemy is out of bounds
        if (
          enemy.position.getX() < 0 ||
          enemy.position.getY() < 0 ||
          enemy.position.getX() > width ||
          enemy.position.getY() > height
        ) {
          this.enemies.splice(i, 1);
        }
      }
    }
  
    draw(context) {
      this.enemies.forEach((enemy) => enemy.draw(context));
    }
  
    spawnEnemies(width, height) {
      const currentTime = new Date().getTime();
      if (currentTime - this.lastEnemyTime > 1000 / 60) {
        // Randomly determine whether to emit an enemy
        if (Math.random() < 0.03 && this.enemyCount < this.maxEnemies) {
          const randomX = Math.random() * width;
          const randomY = Math.random() * height;
          const targetX = width / 2;
          const targetY = height / 2;
          this.emitEnemy(10, randomX, randomY, targetX, targetY);
          this.enemyCount++;
        }
        this.lastEnemyTime = currentTime;
      }
  
      // Dynamically adjust the maximum limit based on the current game state
      if (this.enemyCount >= this.maxEnemies && this.maxEnemies < 30) {
        this.maxEnemies += 5; // Increase the maximum limit
      }
    }
  }
  
  