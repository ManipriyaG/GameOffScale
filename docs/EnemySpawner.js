
class EnemySpawning {
    constructor(enemySystem, spawnConfigurations) {
      this.enemySystem = enemySystem;
      this.spawnConfigurations = spawnConfigurations;
      this.currentConfigIndex = 0;
      this.lastSpawnTime = 0;
    }
  
    update() {
      const currentTime = new Date().getTime();
  
      // Check if it's time to spawn a new set of enemies based on the current configuration
      if (currentTime - this.lastSpawnTime > this.spawnConfigurations[this.currentConfigIndex].spawnInterval) {
        const config = this.spawnConfigurations[this.currentConfigIndex];
  
        // Spawn the specified number of enemies at the specified location with the target
        this.enemySystem.spawnEnemies(config.initialX, config.initialY, config.targetX, config.targetY, config.numberOfEnemies);
  
        this.lastSpawnTime = currentTime;
        this.currentConfigIndex = (this.currentConfigIndex + 1) % this.spawnConfigurations.length;
      }
    }
  }
  