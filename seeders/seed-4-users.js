'use strict';

// const moment = require('moment')
// const date = moment().format('LLL')
const date = new Date()

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
        user_key: 'ABCD-ABCD-ABCD-ABCD',
        role: 'customer',
        size: 4,
        date: date,
        table_number: 3,
        restaurant_id: '0001'
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('users', [{
    }])
  }
};
