// const user = {
//     age: 70,
//     seniority: 16,
//     profession: "engineer"
//     };

// if(user.age>60 && user.seniority >10 && user.profession == "engineer"){// ====  1
//     // 1		        1		            1	 	        = 1

//     console.log("usted se merece una precion")
//     }
//     else{
//     console.log("usted todavia no tiene una pencion")

//     }

// if (9 > 10 || 8 > 9) {
//   //=== 1
//   // 0         0 === 0

//   console.log("cumplio");
// } else {
//   console.log("no cumplio");
// }

// const user = {
//   age: 78,
//   seniority:7 ,
//   profession: "engineer",
// };

// if ((user.age > 60 || user.seniority > 10) && user.profession == "engineer") { //1
//     // 1                     1                           1
//     // 1                                     1
//                                     //    1

//   console.log("usted merece una buena pension por sus servicios prestados");
// } else {
//   console.log("siga trabajando ");
// }

const users = [
  {
    age: 78,
    seniority: 7,
    profession: "engineer",
    name: "juan",
    salary: 2732,
  },
  {
    age: 38,
    seniority: 29,
    profession: "engineer",
    name: "pedro",
    salary: 432,
  },
  {
    age: 32,
    seniority: 9.5,
    profession: "doctor",
    name: "ricardo",
    salary: 121,
  },
  {
    age: 89,
    seniority: 37,
    profession: "mechanic",
    name: "luis",
    salary: 8732,
  },
  {
    age: 32,
    seniority: 7,
    profession: "doctor",
    name: "ramon",
    salary: 890,
  },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].age > 40 && users[i].profession == "engineer") {
    console.log(`${users[i].name} es beneficiario de una pension`);
  }

  if(users[i].salary<2000 || users[i].profession=="doctor"){
    console.log(`${users[i].name} merece 100, sueldo total: ${users[i].salary+100}`)
  }
  // console.log(users[i])
}
