// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius;
        this.pi = Math.PI;
    }
    get diameter() {
        return this.radius * 2 
    }
    get circumference() {
        // console.log(this.pi * (this.radius * 2) )
        return this.pi * (this.radius * 2)
    }
    get area() {
        // console.log(this.pi * (this.radius * this.radius))
        return this.pi * (this.radius * this.radius)  
    }

    set diameter(diameter) {
         this.radius = diameter / 2
    }
    set circumference(circumference) {
        this.radius = (circumference / this.pi) / 2

    }
    set area(area) {
        this.radius = Math.sqrt((area / this.pi))
    }


}


const redCircle = new Circle(2.5)
redCircle.area