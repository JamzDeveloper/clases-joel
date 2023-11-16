class Vehicle {
  //viecol
  brand = "";
  color = "";
  year = "";

  //   constructor(...properties) {
  //     // console.log(properties);
  //     const { brand, year, color } = properties[0];

  //     if (brand) {
  //       this.brand = brand;
  //     }
  //     if (year) {
  //       this.year = year;
  //     }
  //     // this.year = anio;
  //     if (color) {
  //       this.color = color;
  //     } else {
  //       this.color = "Gray";
  //     }
  //   }

  constructor(marca, anio) {
    this.brand = marca;
    this.year = anio;
    this.color = "Gray";
  }

  changeColor(color) {
    this.color = color;
  }

  showAttributes() {
    console.log(`Marca:${this.brand}\nColor:${this.color}\nAño:${this.year}`);
  }
}

// const auto = new Vehicle({ brand: "Toyota", year: "2023", color: "yellow" });
const auto = new Vehicle("Toyota", 2023);

// auto.changeColor("blue");

auto.showAttributes();
auto.changeColor("gree");

auto.showAttributes();

console.log("------------------------");

// const moto = new Vehicle("Honda", 2019);

// moto.showAttributes();

//herencia
class Moto extends Vehicle {
  typeFuel = "";
  numberOfWheels = 0;
  constructor(marca, anio, combustible) {
    super(marca, anio);
    this.typeFuel = combustible;
  }

  asignarLlantas(number) {
    this.numberOfWheels = number;
  }
}

//objetos de una clases
const moto = new Moto("Honda", 2019, "Gasolina 84");
const moto2 = new Moto("Pulsar", 2018, "Gasolina 90");

moto.showAttributes();
moto.changeColor("red red");

moto.showAttributes();
moto.asignarLlantas(2);

console.log(moto);
