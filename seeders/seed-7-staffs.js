'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('staffs', [{
        staff_key: 'SEED-STAF-ABCD-0001',
        staff_id: 'stafffoh01',
        staff_password: 'foh01pass',
        role: 'foh'
    },{
        staff_key: 'SEED-STAF-ABCD-0002',
        staff_id: 'staffboh01',
        staff_password: 'boh01pass',
        role: 'boh'
    },{
        staff_key: 'SEED-STAF-ABCD-0003',
        staff_id: 'staffown01',
        staff_password: 'own01pass',
        role: 'owner'
    }
  ], {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('staffs', [{}])
  }
};
