'use strict';

const date = 	new Date()
date.setHours(date.getHours() + 1)

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('tables', [{
        table_id: '0001',
        name: 'A-zone',
        number: '01',
        status: true
    },{
        table_id: '0002',
        name: 'A-zone',
        number: '02',
        status: true
    },{
        table_id: '0003',
        name: 'B-zone',
        number: '03',
        status: false,
        user_key: 'ABCD-ABCD-ABCD-ABCD',
        time_end: date.toISOString(),
        qrcode: 'data:image/png;base64,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'
    },{
        table_id: '0004',
        name: 'B-zone',
        number: '04',
        status: true
    },{
        table_id: '0005',
        name: 'C-zone',
        number: '05',
        status: true
    },{
        table_id: '0006',
        name: 'C-zone',
        number: '06',
        status: true
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('tables', [{
    }])
  }
};
