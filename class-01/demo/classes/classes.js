
function Car(name, numCylinders, manufacturer){
  this.name = name;
  this.numCylinders = numCylinders;
  this.manufacturer = manufacturer;
}


//new way: classes

class Car {
  constructor(name, numCylinders, manufacturer){
    this.name = name;
    this.numCylinders = numCylinders;
    this.manufacturer = manufacturer;
  }
  goVr

}


let myCar = new Car ('Civic', 4, 'honda');
console.log(myCar);