"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const post = require("../article.json");
    post.forEach((el) => {
      el.updatedAt = el.createdAt = new Date();
    });
    await queryInterface.bulkInsert("Posts", post, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
