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
  let sample = new Particle(10, width / 2, height / 2);
  let isMouseDown = true;

  update();

  function update() {
    context.clearRect(0, 0, width, height);
    line.update(mouseX, mouseY);

    sample.update();

    if (isMouseDown) {
      sample.draw(context);
    }
    line.draw(context);

    requestAnimationFrame(update);
  }

  window.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  window.addEventListener("mousedown", function (event) {
    // Reset particle position to the center
    sample.position.setX(width / 2);
    sample.position.setY(height / 2);

    const angle = Math.atan2(
      event.clientY - sample.position.getY(),
      event.clientX - sample.position.getX()
    );
    const speed = 100;
    sample.velocity.setAngle(angle).setMagnitude(speed);
    isMouseDown = true;
  });

  window.addEventListener("mouseup", function () {
    isMouseDown = false;
  });
};
