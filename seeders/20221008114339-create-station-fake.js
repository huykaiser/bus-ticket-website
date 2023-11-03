'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('stations',
      [
        {
          name: 'ben xe mien tay',
          address: '395 kinh duong vuong',
          province: 'HCM',
          createdAt: "2022-10-06 08:36:17",
          updatedAt: "2022-10-06 08:36:17",
        },
        {
          name: 'ben xe da nang',
          address: 'ton duc thang',
          province: 'DN',
          createdAt: "2022-10-06 08:36:17",
          updatedAt: "2022-10-06 08:36:17",
        },
        {
          name: 'ben xe mien dong',
          address: '395 kinh duong vuong',
          province: 'HCM',
          createdAt: "2022-10-06 08:36:17",
          updatedAt: "2022-10-06 08:36:17",
        },
        {
          name: 'ben xe ha noi',
          address: 'ton duc thang',
          province: 'HN',
          createdAt: "2022-10-06 08:36:17",
          updatedAt: "2022-10-06 08:36:17",
        },
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('stations', null, {});
  }
};
