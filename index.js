// window.onload = function () {
//   let canvas = document.getElementById("canvas");
//   let context = canvas.getContext("2d");
//   let width = (canvas.width = window.innerWidth);
//   let height = (canvas.height = window.innerHeight);
//   let mouseX = 0;
//   let mouseY = 0;
//   let lineY = height / 2; //vertically starting point of line
//   let lineLength = 40;
//   let line = new Line(lineY, lineLength);
//   let sample = new Particle(10); // This creates a Particle with initial velocities (0, 0)
//   // sample.acceleration.setX(0);
//   update();

//   function update() {
//     context.clearRect(0, 0, width, height);
//     line.update(mouseX, mouseY);
   
//   sample.update();

//     sample.draw(context);
//     line.draw(context);

//     requestAnimationFrame(update);
//   }
//   window.addEventListener("mousemove", function (event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
//   });
  
// };

// window.onload = function () {
//   let canvas = document.getElementById("canvas");
//   let context = canvas.getContext("2d");
//   let width = (canvas.width = window.innerWidth);
//   let height = (canvas.height = window.innerHeight);
//     let mouseX = 0;
//   let mouseY = 0;
//   let lineY = height / 2;
//   let lineLength = 40;
//   let line = new Line(lineY, lineLength);
//   let sample = new Particle(10, width / 2, height / 2);
//   let isMouseDown = true;

//   update();

//   function update() {
//     context.clearRect(0, 0, width, height);
//     line.update(mouseX, mouseY);

//     sample.update();

//     if (isMouseDown) {
//       sample.draw(context);
//     }
//     line.draw(context)

//     requestAnimationFrame(update);
//   }
//   window.addEventListener("mousemove", function (event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
//   });
  
//   window.addEventListener("mousedown", function (event) {
//     const angle = Math.atan2(event.clientY - sample.position.getY(), event.clientX - sample.position.getX());
//     const speed = 25;
//     sample.velocity.setAngle(angle).setMagnitude(speed);
//     isMouseDown = true;
//   });

//   window.addEventListener("mouseup", function () {
//     isMouseDown = false;
//   });
// };

// window.onload = function () {
//   let canvas = document.getElementById("canvas");
//   let context = canvas.getContext("2d");
//   let width = (canvas.width = window.innerWidth);
//   let height = (canvas.height = window.innerHeight);
//   let mouseX = 0;
//   let mouseY = 0;
//   let lineY = height / 2;
//   let lineLength = 40;
//   let line = new Line(lineY, lineLength);
//   let particleSystem = new ParticleSystem();
//   // const particleSystem = new ParticleSystem(width, height);
//   let isMouseDown = false;

//   // Emit a particle initially at the center
//   // particleSystem.emitParticle(10, width / 2, height / 2, 0, 0);
//   // const initialBullet = new Particle(10, width / 2, height / 2);
//   // particleSystem.particles.push(initialBullet);
//   // particleSystem.emitParticle(context, width, height, 10, 0, 0);

//   update();

//   function update() {
//     context.clearRect(0, 0, width, height);
//     line.update(mouseX, mouseY);

//     // Draw the particle system
//     particleSystem.draw(context);

//     // Update the particle system
//     particleSystem.update(width, height);

//     line.draw(context);

//     requestAnimationFrame(update);
//   }

//   window.addEventListener("mousemove", function (event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
//   });

//   window.addEventListener("mousedown", function (event) {
//     // Emit a particle from the particle system towards the mouse click
//     const angle = Math.atan2(
//       event.clientY - height / 2,
//       event.clientX - width / 2
//     );
//     const speed = 100;
//     particleSystem.emitParticle(10, width / 2, height / 2, Math.cos(angle) * speed, Math.sin(angle) * speed);

//     isMouseDown = true;
//   });
//   // window.addEventListener('mousedown', function () {
//   //   // Set the mouse click flag to true
//   //   particleSystem.isMouseDown = true;
//   // });


//   window.addEventListener("mouseup", function () {
//     isMouseDown = false;
//   });
// };
// import EnemySystem from './EnemySystem'; // Update the path accordingly
// import CollisionSystem from './CollisionSystem';
// window.onload = function () {
//   let canvas = document.getElementById("canvas");
//   let context = canvas.getContext("2d");
//   let width = (canvas.width = window.innerWidth);
//   let height = (canvas.height = window.innerHeight);
//   let mouseX = 0;
//   let mouseY = 0;
//   let lineY = height / 2;
//   let lineLength = 40;
//   let line = new Line(lineY, lineLength);
//   let particleSystem = new ParticleSystem();
//   let enemySystem = new EnemySystem();
//   update();

//   function update() {
//     width = canvas.width;  // Update width and height here
//     height = canvas.height;

//     context.clearRect(0, 0, width, height);
//     line.update(mouseX, mouseY);
//     particleSystem.draw(context);
//     particleSystem.update(width, height);
//     enemySystem.update(width, height);
//     enemySystem.draw(context);

//     line.draw(context);
//     CollisionSystem.checkCollisions(particleSystem, enemySystem);
//     requestAnimationFrame(update);
//   }

//   window.addEventListener("mousemove", function (event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
//   });

//   window.addEventListener("mousedown", function (event) {
//     const angle = Math.atan2(
//       event.clientY - height / 2,
//       event.clientX - width / 2
//     );
//     const speed = 50;
//     particleSystem.emitParticle(4, width / 2, height / 2, Math.cos(angle) * speed, Math.sin(angle) * speed);
//   });

//   window.addEventListener("mouseup", function () {
//     isMouseDown = false;
//   });
// };

// let currentGun = 1; // Initial gun
// const guns = [
//   { speed: 50, bulletSize: 4 }, // Gun 1 properties
//   { speed: 30, bulletSize: 6 }  // Gun 2 properties
// ];
// window.onload = function () {
//   let canvas = document.getElementById("canvas");
//   let context = canvas.getContext("2d");
//   let width = (canvas.width = window.innerWidth);
//   let height = (canvas.height = window.innerHeight);
//   let mouseX = 0;
//   let mouseY = 0;
//   let lineY = height / 2;
//   let lineLength = 40;
//   let line = new Line(lineY, lineLength);
//   let particleSystem = new ParticleSystem();
//   let enemySystem = new EnemySystem();
//   update();

//   function update() {
//     width = canvas.width;  // Update width and height here
//     height = canvas.height;

//     context.clearRect(0, 0, width, height);

//     context.beginPath();
//     context.arc(width / 2 - 50, height / 2, 10, 0, Math.PI * 2, false); // Gun 1 position
//     context.fillStyle = currentGun === 1 ? "green" : "gray"; // Highlight the selected gun
//     context.fill();
  
//     context.beginPath();
//     context.arc(width / 2 + 50, height / 2, 10, 0, Math.PI * 2, false); // Gun 2 position
//     context.fillStyle = currentGun === 2 ? "blue" : "gray"; // Highlight the selected gun
//     context.fill();
    
//     line.update(mouseX, mouseY);
//     particleSystem.draw(context);
//     particleSystem.update(width, height);
//     enemySystem.update(width, height);
//     enemySystem.draw(context);

//     line.draw(context);
//     CollisionSystem.checkCollisions(particleSystem, enemySystem);
//     requestAnimationFrame(update);
//   }

//   window.addEventListener("mousemove", function (event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
//   });

  
//   window.addEventListener("keydown", function (event) {
//     if (event.key === "1" || event.key === "2") {
//       currentGun = parseInt(event.key);
//     }
//   });
  
//   window.addEventListener("mousedown", function (event) {
//     const angle = Math.atan2(
//       event.clientY - height / 2,
//       event.clientX - width / 2
//     );
  
//     // Emit particle (bullet) from the selected gun
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

// let currentGun = 1; // Initial gun
// const guns = [
//   { speed: 50, bulletSize: 4 }, // Gun 1 properties
//   { speed: 30, bulletSize: 6 }  // Gun 2 properties
// ];
// window.onload = function () {
//   let canvas = document.getElementById("canvas");
//   let context = canvas.getContext("2d");
//   let width = (canvas.width = window.innerWidth);
//   let height = (canvas.height = window.innerHeight);
//   let mouseX = 0;
//   let mouseY = 0;
//   let lineY = height / 2;
//   let lineLength = 40;
//   let line = new Line(lineY, lineLength);
//   let particleSystem = new ParticleSystem();
//   let enemySystem = new EnemySystem();

//   const gun1 = new Gun(width / 2 - 25, height / 2, guns[0].speed, guns[0].bulletSize, "green");
// const gun2 = new Gun(width / 2 + 25, height / 2, guns[1].speed, guns[1].bulletSize, "blue");

  

//   update();

//   function update() {
//     width = canvas.width;
//     height = canvas.height;

//     context.clearRect(0, 0, width, height);

//     gun1.draw(context);
//     gun2.draw(context);

//     line.update(mouseX, mouseY);
//     particleSystem.draw(context);
//     particleSystem.update(width, height);
//     enemySystem.update(width, height);
//     enemySystem.draw(context);

//     line.draw(context);
//     CollisionSystem.checkCollisions(particleSystem, enemySystem);
//     requestAnimationFrame(update);
//   }

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
  const player = new Player(50, 50, "yellow", width, height);
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
    
  // Spawn enemies at a specific location, time, and number
  enemySystem.spawnEnemies(100, 100, width / 2, height / 2, 3)
    requestAnimationFrame(update);
  }

  window.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;

    // gun1.updatePosition(mouseX - 50, mouseY);
    // gun2.updatePosition(mouseX + 50, mouseY);
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
};