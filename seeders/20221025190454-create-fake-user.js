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
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: "John Doe",
          email: "vogiahuy97@gmail.com",
          password: "123456",
          numberPhone: "123456",
          avatar: "",
          type: "ADMIN",
          createdAt: "2021-06-13 08:30:00",
          updatedAt: "2021-06-13 08:30:00"
        },
        {
          name: "Huy Kai",
          email: "vogiahuy1997@gmail.com",
          password: "123456",
          numberPhone: "123456",
          avatar: "",
          type: "ADMIN",
          createdAt: "2021-06-13 08:30:00",
          updatedAt: "2021-06-13 08:30:00"
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
