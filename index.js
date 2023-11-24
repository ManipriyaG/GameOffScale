window.onload = function () {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = 0;
    let mouseY = 0;
    let lineY = height / 2; //vertically starting point of line
    let lineLength = 40;
    let line = new Line(lineY, lineLength);
    let sample = new Particle(0, 0, 10);
    sample.acceleration.setX(2);
    update();
  
    function update() {
      context.clearRect(0, 0, width, height);
      line.update(mouseX, mouseY);
      sample.update();
  
      sample.draw(context);
      line.draw(context);
  
      requestAnimationFrame(update);
    }
    window.addEventListener("mousemove", function (event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });
  };
  
  // window.onload = function () {
  //   let canvas = document.getElementById("canvas");
  //   let context = canvas.getContext("2d");
  //   let width = (canvas.width = window.innerWidth);
  //   let height = (canvas.height = window.innerHeight);
  
  //   let sample = new Particle(0, 0, 10);
  //   sample.acceleration.setX(2);
  
  //   let rectangle = new Rectangle(width / 2 - 50, height / 2 - 25, 100, 50);
  
  //   update();
  
  //   function update() {
  //     context.clearRect(0, 0, width, height);
  
  //     sample.update();
  //     rectangle.update();
  
  //     sample.draw(context);
  //     rectangle.draw(context);
  
  //     requestAnimationFrame(update);
  //   }
  
  //   // Mouse move event listener
  //   window.addEventListener("mousemove", function (event) {
  //     // Update the rectangle's position based on mouse movement
  //     rectangle.setPosition(
  //       event.clientX - rectangle.width / 2,
  //       event.clientY - rectangle.height / 2
  //     );
  //   });
  // };