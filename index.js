let gameTimer = 0; // Game timer in seconds
let gameStarted = false;
let currentGun = 1; // Initial gun
let startTime;

const guns = [
  { speed: 50, bulletSize: 10 }, // Gun 1 properties
  { speed: 30, bulletSize: 6 }  // Gun 2 properties
];
window.onload = function () {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  
let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  let mouseX = 0;
  let mouseY = 0;
  let lineY = height / 2;
  let lineLength = 40;
  let line = new Line(lineY, lineLength);
  let particleSystem = new ParticleSystem();
  let enemySystem = new EnemySystem();

  fetch('./spawnConfigurations.json')
  .then(response => response.json())
  .then(spawnConfigurations => {
    console.log('Spawn configurations loaded:', spawnConfigurations);
    spawnConfigurations.sort((a, b) => a.spawnTime - b.spawnTime);
    spawnConfigurations.forEach(config => {
      config.targetX = width / 2;
      config.targetY = height / 2;
    });
    const enemySpawner = new EnemySpawning(enemySystem, spawnConfigurations);

  const playerImage = "./assets/player.png";
  const player = new Player(50, 50, playerImage, width, height);
  // const player = new Player(50, 50, "yellow", width, height);
  const gun1 = new Gun(width / 2, height / 2, guns[0].speed, guns[0].bulletSize, "green");
  const gun2 = new Gun(width / 2, height / 2, guns[1].speed, guns[1].bulletSize, "blue");

  

  update();
  function update() {
    width = canvas.width;
    height = canvas.height;

    context.clearRect(0, 0, width, height);

    // Check if the game has started
    if (!gameStarted) {
      if (!startTime) {
        startTime = performance.now();
      }
      gameTimer = (performance.now() - startTime) / 1000;
      // Update the game timer
      // gameTimer += 1 / 60; // Assuming 60 frames per second

      // Check if the countdown has finished
      if (gameTimer >= 0) {
        gameStarted = true;
        console.log("Game started!");
        gameTimer = 0; // Reset the timer
      }
    } else {
      // Game has started, update the game logic

      line.update(mouseX, mouseY);
      particleSystem.update(width, height);
      enemySystem.update(width, height);
      CollisionSystem.checkCollisions(particleSystem, enemySystem);

      player.draw(context);
      gun1.draw(context);
      gun2.draw(context);
      particleSystem.draw(context);
      enemySystem.draw(context);
      line.draw(context);

      // Spawn enemies based on the timer
      // enemySpawner.update();

      // Update the game timer
      // gameTimer += 1 / 60; // Assuming 60 frames per second
      gameTimer = (performance.now() - startTime) / 1000;
      enemySpawner.update(gameTimer)
      
    }

    requestAnimationFrame(update);
  }
  window.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "1" || event.key === "2") {
      currentGun = parseInt(event.key);
    }
  });

  window.addEventListener("mousedown", function (event) {
    const angle = Math.atan2(event.clientY - height / 2, event.clientX - width / 2);

    particleSystem.emitParticle(
      guns[currentGun - 1].bulletSize,
      width / 2,
      height/2,
      Math.cos(angle) * guns[currentGun - 1].speed,
      Math.sin(angle) * guns[currentGun - 1].speed
    );
  });

  window.addEventListener("mouseup", function () {
    isMouseDown = false;
  });
})
.catch(error => console.error('Error loading spawnConfigurations.json:', error));
}