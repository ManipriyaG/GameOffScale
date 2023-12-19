// let currentGun = 1; // Initial gun
// const guns = [
//   { speed: 50, bulletSize: 10 }, // Gun 1 properties
//   { speed: 30, bulletSize: 6 }  // Gun 2 properties
// ];
// window.onload = function () {
//   // this.image.onload = function () {
//   let canvas = document.getElementById("canvas");
//   let context = canvas.getContext("2d");
  
// let width = (canvas.width = window.innerWidth);
//   let height = (canvas.height = window.innerHeight);
//   let mouseX = 0;
//   let mouseY = 0;
//   let lineY = height / 2;
//   let lineLength = 40;
//   let line = new Line(lineY, lineLength);
//   let particleSystem = new ParticleSystem();
//   let enemySystem = new EnemySystem();

//   // const spawnConfigurations = [
//   //   { initialX: 100, initialY: 100, targetX: width / 2, targetY: height / 2, numberOfEnemies: 3, spawnInterval: 1000 },
//   // ];
//   // const spawnConfigurations = [
//   //   // Example 1: Spawn one enemy on the left and one on the right
//   //   { initialX: 100, initialY: height / 2, targetX: width / 2, targetY: height / 2, numberOfEnemies: 1, spawnInterval: 1000 },
//   //   { initialX: width - 100, initialY: height / 2, targetX: width / 2, targetY: height / 2, numberOfEnemies: 1, spawnInterval: 1000 },
  
//   //   // Example 2: Spawn two enemies at custom positions
//   //   { initialX: 200, initialY: 300, targetX: width / 2, targetY: height / 2, numberOfEnemies: 2, spawnInterval: 2000 },
  
//   //   // Example 3: Spawn four enemies at different positions
//   //   { initialX: 100, initialY: 100, targetX: width / 2, targetY: height / 2, numberOfEnemies: 1, spawnInterval: 1000 },
//   //   { initialX: 400, initialY: 200, targetX: width / 2, targetY: height / 2, numberOfEnemies: 1, spawnInterval: 1000 },
//   //   { initialX: 300, initialY: 400, targetX: width / 2, targetY: height / 2, numberOfEnemies: 1, spawnInterval: 1000 },
//   //   { initialX: width - 100, initialY: height - 100, targetX: width / 2, targetY: height / 2, numberOfEnemies: 1, spawnInterval: 1000 },
//   // ];
  
//   const enemySpawner = new EnemySpawning(enemySystem, spawnConfigurations);
//   const playerImage = "./assets/player.png";
//   const player = new Player(50, 50, playerImage, width, height);
//   // const player = new Player(50, 50, "yellow", width, height);
//   const gun1 = new Gun(width / 2 - 25, height / 2, guns[0].speed, guns[0].bulletSize, "green");
// const gun2 = new Gun(width / 2 + 25, height / 2, guns[1].speed, guns[1].bulletSize, "blue");

  

//   update();

//   function update() {
//     width = canvas.width;
//     height = canvas.height;

//     context.clearRect(0, 0, width, height);

//     player.draw(context)

//     gun1.draw(context);
//     gun2.draw(context);

//     line.update(mouseX, mouseY);
//     particleSystem.draw(context);
//     particleSystem.update(width, height);
//     enemySystem.update(width, height);
//     enemySystem.draw(context);

//     line.draw(context);
//     CollisionSystem.checkCollisions(particleSystem, enemySystem);
    
//   // Spawn enemies at a specific location, time, and number
//   // enemySystem.spawnEnemies(100, 100, width / 2, height / 2, 3)
//   enemySpawner.update();
//     requestAnimationFrame(update);
//   }
// // Fetch spawn configurations asynchronously
// // fetch('./spawnConfigurations.json')
// // .then(response => response.json())
// // .then(spawnConfigurations => {
// //   const enemySpawner = new EnemySpawning(enemySystem, spawnConfigurations);

// //   const playerImage = "./assets/player.png";
// //   const player = new Player(50, 50, playerImage, width, height);
// //   const gun1 = new Gun(width / 2 - 25, height / 2, guns[0].speed, guns[0].bulletSize, "green");
// //   const gun2 = new Gun(width / 2 + 25, height / 2, guns[1].speed, guns[1].bulletSize, "blue");
// //   update();

// //   function update() {
// //     width = canvas.width;
// //     height = canvas.height;

// //     context.clearRect(0, 0, width, height);

// //     player.draw(context)
// //     gun1.draw(context);
// //     gun2.draw(context);

// //     line.update(mouseX, mouseY);
// //     particleSystem.draw(context);
// //     particleSystem.update(width, height);
// //     enemySystem.update(width, height);
// //     enemySystem.draw(context);

// //     line.draw(context);
// //     CollisionSystem.checkCollisions(particleSystem, enemySystem);
    
// //     enemySpawner.update();
// //     requestAnimationFrame(update);
// //   }

// //   // Rest of your event listeners and code...
// //   // ...


//   window.addEventListener("mousemove", function (event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;

//     // gun1.updatePosition(mouseX - 50, mouseY);
//     // gun2.updatePosition(mouseX + 50, mouseY);
//   });

//   window.addEventListener("keydown", function (event) {
//     if (event.key === "1" || event.key === "2") {
//       currentGun = parseInt(event.key);
//     }
//   });

//   window.addEventListener("mousedown", function (event) {
//     const angle = Math.atan2(event.clientY - height / 2, event.clientX - width / 2);

//     const gunPosition = currentGun === 1 ? { x: width / 2 - 50, y: height / 2 } : { x: width / 2 + 50, y: height / 2 };

//     particleSystem.emitParticle(
//       guns[currentGun - 1].bulletSize,
//       gunPosition.x,
//       gunPosition.y,
//       Math.cos(angle) * guns[currentGun - 1].speed,
//       Math.sin(angle) * guns[currentGun - 1].speed
//     );
//   });

//   window.addEventListener("mouseup", function () {
//     isMouseDown = false;
//   });
// };
// })
// .catch(error => console.error('Error loading spawnConfigurations.json:', error));
// };

let currentGun = 1; // Initial gun
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
    spawnConfigurations.forEach(config => {
      config.targetX = width / 2;
      config.targetY = height / 2;
    });
    const enemySpawner = new EnemySpawning(enemySystem, spawnConfigurations);

  
  const playerImage = "./assets/player.png";
  const player = new Player(50, 50, playerImage, width, height);
  // const player = new Player(50, 50, "yellow", width, height);
  const gun1 = new Gun(width / 2 - 25, height / 2, guns[0].speed, guns[0].bulletSize, "green");
const gun2 = new Gun(width / 2 + 25, height / 2, guns[1].speed, guns[1].bulletSize, "blue");

  

  update();

  function update() {
    width = canvas.width;
    height = canvas.height;

    context.clearRect(0, 0, width, height);

    player.draw(context)

    gun1.draw(context);
    gun2.draw(context);

    line.update(mouseX, mouseY);
    particleSystem.draw(context);
    particleSystem.update(width, height);
    enemySystem.update(width, height);
    enemySystem.draw(context);

    line.draw(context);
    CollisionSystem.checkCollisions(particleSystem, enemySystem);
  enemySpawner.update();
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

    const gunPosition = currentGun === 1 ? { x: width / 2 - 50, y: height / 2 } : { x: width / 2 + 50, y: height / 2 };

    particleSystem.emitParticle(
      guns[currentGun - 1].bulletSize,
      gunPosition.x,
      gunPosition.y,
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