'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('restaurants', [{
      restaurant_id: '0001',
      name: 'bombayHomemade'
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('restaurants', [{}])
  }
};
