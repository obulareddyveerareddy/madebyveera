'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Codes', [{
        name: 'Vechicle Type',
        description: 'App Supported Passenger Vechicles',
        refId: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Services',
        description: 'App Provided Services',
        refId: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Codes', null, {});
  }
};
