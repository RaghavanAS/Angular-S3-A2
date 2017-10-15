//defining an interface Drivable
interface Drivable{
    //interface properties
    wheels: number;
    speed: number;
    name: string;
    position: number;
    //interface methods with no body but only declaration
    start(): void;
    drive(): string;
    getPosition(): number;
}
// declaring a class which implements the interface Drivable
class Car implements Drivable{
    wheels: number;
    speed: number;
    name: string;
    position: number;
    direction: string;
    //constructor which takes 5 parameters
    constructor(wheels: number, speed: number, name: string, position: number,direction:string) {
        this.wheels = wheels;
        this.speed = speed;
        this.name = name;
        this.position = position;
        this.direction = direction;
    }
    //body for the interface method start()
    start(): void{
        console.log(`Name of the car is ${this.name}`);
    }
    //body for the interface method drive()
    drive(): string{
        return "Car is driving at a speed " + this.speed;
    }
    //body for the interface method getPosition()
    getPosition() {
        return this.position;
    }
}
//object reference
let Audi= new Car(4, 80, "Audi A8", 220,"West");
//calling the methods using the object
Audi.start();
console.log(Audi.drive());
console.log(`Position of the car is ${Audi.getPosition()} degrees ${Audi.direction}`);
