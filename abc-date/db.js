class DataBase {
  users = [];

  constructor() {}

  createUser(data) {
    const newUser = {
      email: data.email,
      firstName: data.firstName,
    };

    this.users.push(newUser);

    return newUser;
  }
}

const newDataBase = new DataBase();

module.exports = newDataBase;
