class EnemySpawning {
  constructor(enemySystem, spawnConfigurations) {
    this.enemySystem = enemySystem;
    this.spawnConfigurations = spawnConfigurations;
    this.currentConfigIndex = 0;
    this.lastSpawnTime = 0;
    this.enemiesSpawned = [];
  }

  update(gameTimer) {
    if (this.currentConfigIndex >= this.spawnConfigurations.length) {
      // All configurations have been processed, no need to continue
      return;
    }

    const config = this.spawnConfigurations[this.currentConfigIndex];

    if (gameTimer >= config.spawnTime && this.enemiesSpawned.length < config.numberOfEnemies) {
      const remainingEnemies = config.numberOfEnemies - this.enemiesSpawned.length;

      // Spawn remaining enemies for the current configuration
      const newEnemies = this.enemySystem.spawnEnemies(
        config.initialX,
        config.initialY,
        config.targetX,
        config.targetY,
        remainingEnemies
      );

      // Add the newly spawned enemies to the list
      this.enemiesSpawned.push(...newEnemies);

      if (this.enemiesSpawned.length >= config.numberOfEnemies) {
        // Move to the next configuration
        this.currentConfigIndex++;
        this.enemiesSpawned = [];
      }

      this.lastSpawnTime = gameTimer;
    }
  }
}
