'use strict';
const uuid = require('uuid')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: uuid.v4.uuid(),
      login: 'admin',
      password: 'admin',
      isProfessional: false
    }], {});

    await queryInterface.bulkInsert('users', [{
      id: uuid.v4.uuid(),
      login: 'professional',
      password: '123456',
      isProfessional: true
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
