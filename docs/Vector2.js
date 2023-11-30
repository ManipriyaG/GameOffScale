class Vector2 {
    constructor(x, y) {
      this.x = x || 0;
      this.y = y || 0;
    }
  
    // Method to set the x component of the vector
    setX(value) {
      this.x = value;
      return this;
    }
  
    // Method to get the x component of the vector
    getX() {
      return this.x;
    }
  
    // Method to set the y component of the vector
    setY(value) {
      this.y = value;
      return this;
    }
  
    // Method to get the y component of the vector
    getY() {
      return this.y;
    }
  
    // Method to add another vector to this vector
    add(otherVector) {
      this.x += otherVector.x;
      this.y += otherVector.y;
      return this;
    }
  
    // Method to subtract another vector from this vector
    subtract(otherVector) {
      this.x -= otherVector.x;
      this.y -= otherVector.y;
      return this;
    }

    multiply(scalar){
      this.x *= scalar;
      this.y *= scalar;
      return this;
    }
  
    // Method to get the angle of the vector in radians
    getAngle() {
      return Math.atan2(this.y, this.x);
    }
  
    // Method to set the angle of the vector in radians
    setAngle(angle) {
      const magnitude = this.getMagnitude();
      this.x = magnitude * Math.cos(angle);
      this.y = magnitude * Math.sin(angle);
      return this;
    }
  
    // Method to get the magnitude (length) of the vector
    getMagnitude() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  
    // Method to set the magnitude (length) of the vector
    setMagnitude(magnitude) {
      const angle = this.getAngle();
      this.x = magnitude * Math.cos(angle);
      this.y = magnitude * Math.sin(angle);
      return this;
    }
  }
