'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('tables', [{
        table_id: '0001',
        name: 'A-zone',
        number: '01',
        status: true
    },{
        table_id: '0002',
        name: 'B-zone',
        number: '02',
        status: true
    },{
        table_id: '0003',
        name: 'C-zone',
        number: '03',
        status: false
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('tables', [{
    }])
  }
};
