//variables
const dato = "";

let usuario = "jose";
usuario = "pedro";

// var articulo = "programacio";
// articulo = "lectura";

{
  let articulo = "arquitectura";

  if (4 < 5) {
    let articulo = "lectura";

    if (6 > 3) {
      console.log(articulo);
    }
  }

  console.log(articulo);
}

// console.log(articulo);

//tipos de datos

const texto = `string`;
const numeros = 1;
const booleano = false;
const objectos = {
  nombre: "jose",
};
const arreglos = [{}, {}, {}];

//sentencias

if (numeros > 10) {
  console.log(`el numero: ${numeros} es mayor que 10`);
} else {
  console.log(`el numero: ${numeros} no es mayor que 10`);
}

const dia = 100;

switch (dia) {
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("martes");
    break;
  default:
    console.log("dia no aceptado");
}

//bucles

// for(variable_inicializacion, condicion, iteracion){

// }

const arreglo = [1, 2743, 6, 3, 4242, 782, 232];

// for (let i = 0; i <= 10; i ++) {
//   console.log(i);
// }
console.log("///////////////////////////////////");
// console.log(arreglo[1]);

const tamanio = arreglo.length - 1;

// console.log(arreglo[tamanio]);

for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}

// }
// for (let i = 0; i < 10; i = i + 2) {
//   console.log(i);
// }

let j = 0;

while (j < 10) {
  console.log("while:", j);
  j++;
}

let k = 0;

// do {
//   console.log(" do while:", k);
//   k++;
// } while (k < 10);
