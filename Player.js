class Player {
    constructor(width, height, imageUrl, canvasWidth, canvasHeight) {
      this.width = width;
      this.height = height;
      this.image = new Image();
      this.image.src = imageUrl;
      // this.color = color;
      this.x = (canvasWidth / 2)- (this.width/2) ;
      this.y = (canvasHeight / 2) - (this.height/2) ;
      this.healthData = new HealthData(100);
      this.position = new Vector2(this.x,this.y);
      this.radius = 32;
    }
  
    draw(context) {
      // context.fillStyle = "yellow";
      //context.fillRect(this.x, this.y, this.width, this.height);
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }