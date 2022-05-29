'use strict';
const {customAlphabet} = require("nanoid")

const nanoid = customAlphabet("1234567890", 16)

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Wallets', [{
      balance: 10000,
       phoneNumber: "233508546701",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      balance: 0,
       phoneNumber: "233508546702",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      balance: 0,
       phoneNumber: "233508546703",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      balance: 0,
       phoneNumber: "233508546704",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      balance: 0,
       phoneNumber: "233508546705",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      balance: 0,
       phoneNumber: "233508546706",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      balance: 0,
       phoneNumber: "233508546707",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      balance: 0,
       phoneNumber: "233508546708",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      balance: 0,
       phoneNumber: "233508546709",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      balance: 0,
       phoneNumber: "233508546710",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      balance: 0,
       phoneNumber: "233508546711",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      balance: 0,
       phoneNumber: "233508546712",
       accountNumber: nanoid(),
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Wallets', null, {});
  }
};
