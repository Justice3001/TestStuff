//classes in javascript example of inheriitenc

class Person {
  constructor(name, age, FavCar) {
    this.name = name;
    this.age = age;
    this.FavCar = FavCar;
  }

  //funtion 1 or Parent function
  greet() {
    console.log(
      `hello my name is ${this.name} and i am ${this.age} years old and my favorite car
      is ${this.FavCar}`
    );
  }
}

//child class that extends parent
class Info extends Person {
  constructor(name, age, FavCar, FavFood) {
    //call the parent class contructor using super
    super(name, age, FavCar);
    this.FavFood = FavFood;
  }

  MoreInfo() {
    console.log(
      `name is ${this.name} and i am ${this.age} i like ${this.FavCar} and i eat alot of ${this.FavFood}`
    );
  }
}

//create an instance of person
const Student1 = new Person("john", 23, "Mustang");
const Student2 = new Info("tom", 19, "BMW", "pizza");

//call the greet method of the student1 instance
Student1.greet();
//call the more info function 
Student2.MoreInfo();
