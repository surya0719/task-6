class circle{
    constructor(radius,colour){
        this.radius=radius;
        this.colour=colour;
    }
    getRadius(){
        console.log(this.radius)
    }
    getcolour(){
        console.log(this.colour)
    }
    getarea(){
       const pi=3.14;
        console.log(pi*(this.radius*this.radius))
    }
    getcircumference(){
        const pi=3.14;
        console.log(2*pi*this.radius)
    }
}
let circle1=new circle(5.8,"green")
circle1.getRadius();
circle1.getcolour();
circle1.getarea();
circle1.getcircumference();