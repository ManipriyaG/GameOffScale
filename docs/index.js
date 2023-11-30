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
  update();

  function update() {
    width = canvas.width;  // Update width and height here
    height = canvas.height;

    context.clearRect(0, 0, width, height);
    line.update(mouseX, mouseY);
    particleSystem.draw(context);
    particleSystem.update(width, height);
    enemySystem.update(width, height);
    enemySystem.draw(context);

    line.draw(context);
    CollisionSystem.checkCollisions(particleSystem, enemySystem);
    requestAnimationFrame(update);
  }

  window.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  window.addEventListener("mousedown", function (event) {
    const angle = Math.atan2(
      event.clientY - height / 2,
      event.clientX - width / 2
    );
    const speed = 50;
    particleSystem.emitParticle(4, width / 2, height / 2, Math.cos(angle) * speed, Math.sin(angle) * speed);
  });

  window.addEventListener("mouseup", function () {
    isMouseDown = false;
  });
};