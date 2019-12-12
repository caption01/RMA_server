'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('orders', [{
        order_id: 'SEED-ORDER-ABCD-0001',
        status: true,
        table_number: 3,
        menu_name: 'waguSteak',
        quantity: 3,
        bill_id: 'SEED-BILL-ABCD-ABCD',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_id: 'SEED-ORDER-ABCD-0002',
        status: false,
        table_number: 3,
        menu_name: 'brownRice',
        quantity: 4,
        bill_id: 'SEED-BILL-ABCD-ABCD',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_id: 'SEED-ORDER-ABCD-0003',
        status: true,
        table_number: 3,
        menu_name: 'watermelonJuice',
        quantity: 2,
        bill_id: 'SEED-BILL-ABCD-ABCD',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('orders', [{}])
  }
};
