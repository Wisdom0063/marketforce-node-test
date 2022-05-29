'use strict';
const {customAlphabet} = require("nanoid")

const nanoid = customAlphabet("1234567890", 16)
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Wallets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      balance: {
        type: Sequelize.FLOAT,
        default:0,
        allowNull:false
      },
      phoneNumber: {
        type: Sequelize.STRING(12),
        allowNull:false,
        unique:true
      },
      accountNumber: {
        type: Sequelize.STRING(16),
        allowNull:false,
        unique:true,
        // defaultValue: nanoid()
      },
      version: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Wallets');
  }
};