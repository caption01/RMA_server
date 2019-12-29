'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('historys', [{
        history_id: 'SEED-HSRY-ABCD-0001',
        menu_name: 'eggSalad',
        quantity: 2,
        type: 'food',
        createdAt: new Date().toISOString(),
        bill_id: 'SEED-BILL-ABCD-ABCD'
    },{
        history_id: 'SEED-HSRY-ABCD-0002',
        menu_name: 'waguSteak',
        quantity: 4,
        type: 'food',
        createdAt: new Date().toISOString(),
        bill_id: 'SEED-BILL-ABCD-ABCD'
    },{
        history_id: 'SEED-HSRY-ABCD-0003',
        menu_name: 'brownRice',
        quantity: 4,
        type: 'food',
        createdAt: new Date().toISOString(),
        bill_id: 'SEED-BILL-ABCD-ABCD'
    },{
        history_id: 'SEED-HSRY-ABCD-0004',
        menu_name: 'eggSalad',
        quantity: 7,
        type: 'food',
        createdAt: new Date().toISOString(),
        bill_id: 'SEED-BILL-ABCD-ABCD'
    },{
        history_id: 'SEED-HSRY-ABCD-0005',
        menu_name: 'waguSteak',
        quantity: 2,
        type: 'food',
        createdAt: new Date().toISOString(),
        bill_id: 'SEED-BILL-ABCD-ABCD'
    },{
        history_id: 'SEED-HSRY-ABCD-0006',
        menu_name: 'softcream',
        quantity: 4,
        type: 'desert',
        createdAt: new Date().toISOString(),
        bill_id: 'SEED-BILL-ABCD-ABCD'
    },{
        history_id: 'SEED-HSRY-ABCD-0007',
        menu_name: 'coca-cola',
        quantity: 8,
        type: 'drink',
        createdAt: new Date().toISOString(),
        bill_id: 'SEED-BILL-ABCD-ABCD'
    }], {})
    },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('historys', [{}])
  }
};