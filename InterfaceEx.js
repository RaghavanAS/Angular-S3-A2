// declaring a class which implements the interface Drivable
var Car = /** @class */ (function () {
    //constructor which takes 5 parameters
    function Car(wheels, speed, name, position, direction) {
        this.wheels = wheels;
        this.speed = speed;
        this.name = name;
        this.position = position;
        this.direction = direction;
    }
    //body for the interface method start()
    Car.prototype.start = function () {
        console.log("Name of the car is " + this.name);
    };
    //body for the interface method drive()
    Car.prototype.drive = function () {
        return "Car is driving at a speed " + this.speed;
    };
    //body for the interface method getPosition()
    Car.prototype.getPosition = function () {
        return this.position;
    };
    return Car;
}());
//object reference
var Audi = new Car(4, 80, "Audi A8", 220, "West");
//calling the methods using the object
Audi.start();
console.log(Audi.drive());
console.log("Position of the car is " + Audi.getPosition() + " degrees " + Audi.direction);
