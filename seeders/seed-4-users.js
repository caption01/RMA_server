'use strict';

// const moment = require('moment')
// const date = moment().format('LLL')

const dayPresent = new Date()
const dayPast = new Date().setDate(dayPresent.getDate() - 3)
const dayFuture = new Date().setDate(dayPresent.getDate() + 3)

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
        user_key: 'ABCD-ABCD-ABCD-ABCD',
        role: 'customer',
        size: 4,
        date: dayPresent.toISOString(),
        table_number: 3,
        restaurant_id: '0001'
    },{
      user_key: 'ABCD-ABCD-ABCD-ABC2',
      role: 'customer',
      size: 8,
      date: new Date(dayPast).toISOString(),
      table_number: 1,
      restaurant_id: '0001'
    },{
      user_key: 'ABCD-ABCD-ABCD-ABC3',
      role: 'customer',
      size: 2,
      date: new Date(dayFuture).toISOString(),
      table_number: 5,
      restaurant_id: '0001'
    }
  
  ], {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('users', [{
    }])
  }
};
