'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('menus', [{
      menu_id: '10001',
      name: 'eggSalad',
      description: 'organic vegetable with fresh eggs boild in bowl',
      availiable: true
    },{
        menu_id: '10002',
        name: 'waguSteak',
        description: 'super juice meet wagu grill with secrete source',
        availiable: true 
    },{
        menu_id: '10003',
        name: 'watermelonJuice',
        description: 'sweet watermelon juice with ice brain freezeing',
        availiable: true
    },{
        menu_id: '10004',
        name: 'brownRice',
        description: 'sofl rice from farmmer culture upder sunny',
        availiable: true
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('menus', [{}])
  }
};
