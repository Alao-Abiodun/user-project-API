'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@doe.com',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
