const { faker } = require('@faker-js/faker');
const { use } = require('../api/routes/products.router');

class UsersService {
  constructor() {
    this.users = [];

    const limit = 5;
    this.generate(limit);
  }

  generate(limit) {
    for (let index = 0; index < limit; index++) {
      this.users.push({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
      });
    }
  }

  create( data ) {
    const newUser = {
      userId : faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  find(limit) {
    return this.users.slice(0, limit);
  }

  findOne(id) {
    return this.users.find((item) => item.id === id);
  }

  update( id, changes ) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    }

  }
  delete( id ) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    this.users.splice(index, 1);
    return{message: 'User deleted', id}
  }
}

module.exports = UsersService;

