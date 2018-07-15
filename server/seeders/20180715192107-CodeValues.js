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
    return queryInterface.bulkInsert('CodeValues', [{
      name: 'Bus',
      description: 'App Supported Passenger Vechicle Bus',
      codeId: 300,
      codeValueId:3001,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Mini Van',
      description: 'App Supported Passenger Vechicle Mini Van',
      codeId: 300,
      codeValueId:3002,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Car',
      description: 'App Supported Passenger Vechicle Car',
      codeId: 300,
      codeValueId:3003,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rental Service',
      description: 'App Provided Rental Service',
      codeId: 400,
      codeValueId:4001,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lease Service',
      description: 'App Provided Lease Service',
      codeId: 400,
      codeValueId:4002,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Daily Service',
      description: 'App Provided Daily Service',
      codeId: 400,
      codeValueId:4003,
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
    return queryInterface.bulkDelete('CodeValues', null, {});
  }
};
