'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('services', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
      },
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      duration: Sequelize.INTEGER,
      price: Sequelize.DECIMAL,
      // user_id: {
      //   type: Sequelize.UUID,
      //   references: {
      //     model: 'users', // name of Target model
      //     key: 'id', // key in Target model that we're referencing
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL',
      // }
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('services');
  }
};
