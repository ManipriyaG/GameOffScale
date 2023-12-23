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
      const config = this.spawnConfigurations[this.currentConfigIndex];
    
      // Check if the current time matches the spawn time for this configuration
      if (currentTime / 1000 >= config.spawnTime && this.currentConfigIndex < spawnConfigurations.Length) {
        // Spawn the specified number of enemies at the specified location with the target
        this.enemySystem.spawnEnemies(
          config.initialX,
          config.initialY,
          config.targetX,
          config.targetY,
          config.numberOfEnemies
        );
    
        console.log(`Enemies spawned at ${currentTime / 1000} seconds!`);
    
        this.lastSpawnTime = currentTime;
        this.currentConfigIndex = this.currentConfigIndex + 1;
      } else {
        console.log(`Waiting for spawn time (${config.spawnTime} seconds)...`);
      }
    }
    
  }
  
