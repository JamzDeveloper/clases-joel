// // const newNumber =()=>

// function newUser1(name) {
//   //fksadikonfianfnsdaunfdasunf
//   //llave a una base de datos

//   //crea usuario

//   const user = {
//     name,
//     role:'ADMIN'
//   };

//   return user;
// }

// function newUser2(age) {
//   //fksadikonfianfnsdaunfdasunf
//   //llave a una base de datos

//   //crea usuario

//   //asigne un plane

//   if (age < 18) {
//     console.log("el sistema no permite menores de edad");
//   }
// }

// console.log(newUser2(10));

// const newAdmin = newUser1("juan")

// console.log(newAdmin)

const validateDoctor = require("./db");

function hacerReceta(dni, receta) {
  const result = validateDoctor(dni);
  if (result == 0) {
    console.log("error no puede hacer recetas medicas");
  } else {
    console.log(
      `Bienvenido doctor:${result.name} usted tiene acceso al sistema de recetas`
    );
  }

  //   console.log("Usted si puede realizar una receta porque es un doctor valido");
}

// hacerReceta(3232, "paracetamol");

// function givemeaNumber1(number) {
//   return 5 + number;
// }

// const givemeaNumber = (number) => number == number;

// // crli

// //]

// console.log(givemeaNumber(10));

//----

function suma(number1, number2) {
  // console.log(result)

  return number1 + number2;
}

const resultFunction = suma(1, 2);

console.log(resultFunction);
