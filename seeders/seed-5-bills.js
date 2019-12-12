'use strict';

const date = 	new Date()
// const moment = require('moment')
// const date = moment().format('LLL')
date.setHours(date.getHours() + 1)

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('bills', [{
        bill_id: 'SEED-BILL-ABCD-ABCD',
        bill_endTime: date.toISOString(),
        price: 800,
        bill_status: 'open',
        user_id: 'ABCD-ABCD-ABCD-ABCD'
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('bills', [{}])
  }
};
