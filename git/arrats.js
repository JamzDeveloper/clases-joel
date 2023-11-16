const arreglo = [33, 3223];

// const existsElement = arreglo.includes(33223)
// arreglo.pop()//--> elimina el ultimo arreglo de la lista
// arreglo.shift()//--> elimina el primer elemento de la lista
// arreglo.unshift(3,2); //-->  agrega uno o mas elemento a un arreglo al inicio
// arreglo.push(999) // --> agrega un elemento al final del arreglo
// console.log(arreglo);

const arreglo2 = [1, 11, 1, 0];

const newArray = arreglo2.concat(arreglo); // conbinar 2 arreglos

const copia = arreglo2.slice(0, 2); // copia de un arreglo por indices

// arreglo2.splice(0,3)//cortar

// console.log(arreglo2)

// arreglo2.forEach(function (item) {
//   console.log(item);
// });

// function element(item) {
//   console.log(item);
// }

const usuario = {
  name: "pedro",
  age: 34,
  address: "Las palmeras",
};

const arrayUsers = [
  {
    name: "pedro",
    age: 34,
    address: "Las palmeras",
  },
  {
    name: "luis",
    age: 23,
    address: "peru - lima",
  },
  {
    name: "juan",
    age: 32,
    address: "los olivos",
  },
];

let age = 30;
let userFilter = [];

for (let i = 0; i < arrayUsers.length; i++) {
  if (arrayUsers[i].age > age) {
    userFilter.push(arrayUsers[i]);
  }
}

console.log(userFilter);
