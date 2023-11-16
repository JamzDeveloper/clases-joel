const doctors = [
  {
    license: 894895,
    name: "ricardo",
    age: 48,
  },
  {
    license: 3232,
    name: "pedro",
    age: 59,
  },
];

function validateDoctor(license) {
  // let doctorExists = null;

  const doctorExists = doctors.find((doctor) => {
    if (doctor.license == license) {
    } else {
    }
    return doctor.license == license ? doctor : null;
  });

  // for (let i = 0; i < doctors.length; i++) {
  //   if (license == doctors[i].license) {
  //     doctorExists = doctors[i];
  //   }
  // }

  if (doctorExists == null) {
    return 0;
  } else {
    return doctorExists;
  }

  // if (doctorExists == null) {
  //   throw new Error("Doctor doesn't exists");
  // }
}

module.exports = validateDoctor;
