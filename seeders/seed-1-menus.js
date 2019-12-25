'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('menus', [{
      menu_id: '10001',
      name: 'eggSalad',
      type: 'food',
      description: 'organic vegetable with fresh eggs boild in bowl',
      availiable: true,
      imageUrl: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Egg-Salad-3.jpg'
    },{
        menu_id: '10002',
        name: 'waguSteak',
        type: 'food',
        description: 'super juice meet wagu grill with secrete source',
        availiable: true,
        imageUrl: 'https://thegoldenox.com.au/wp-content/uploads/2015/06/wagu-steak.jpg'
    },{
        menu_id: '10003',
        name: 'watermelonJuice',
        type: 'drink',
        description: 'sweet watermelon juice with ice brain freezeing',
        availiable: true,
        imageUrl: 'https://petekonline.com/wp-content/uploads/2018/12/WATERMELON-JUICEE.jpg'
    },{
        menu_id: '10004',
        name: 'brownRice',
        type: 'food',
        description: 'sofl rice from farmmer culture upder sunny',
        availiable: true,
        imageUrl: 'https://chowhound1.cbsistatic.com/assets/recipe_photos/29186_basic_brown_rice.jpg'
    },{
      menu_id: '10005',
      name: 'softcream',
      type: 'desert',
      description: 'sofl sweet cream vanila',
      availiable: true,
      imageUrl: 'https://i.pinimg.com/originals/13/bb/d2/13bbd2e1d79fb2a56785d1a185d0996e.jpg'
    },{
      menu_id: '10006',
      name: 'pudding',
      type: 'desert',
      description: 'yummy jel with sweet soruce',
      availiable: true,
      imageUrl: 'https://thepioneerwoman.com/wp-content/uploads/2016/04/how-to-make-chocolate-pudding-00a.jpg?fit=2000%2C1335'
    },{
      menu_id: '10007',
      name: 'orange-cake',
      type: 'desert',
      description: 'pure orange source on top cake',
      availiable: true,
      imageUrl: 'https://cleobuttera.com/wp-content/uploads/2018/07/full-orange-cake-less-bright.jpg'
    },{
      menu_id: '10008',
      name: 'coca-cola',
      type: 'drink',
      description: 'coca-cola',
      availiable: true,
      imageUrl: 'https://wallpaperstock.net/coca-cola-%3F%3F%3F%3F%2C-store-wallpapers_56297_1920x1200.jpg'
    },{
      menu_id: '10009',
      name: 'soda',
      type: 'drink',
      description: 'pure soda',
      availiable: true,
      imageUrl: 'http://tpf564.com/wp-content/uploads/2019/05/dr6.png'
    }
  ], {})
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('menus', [{}])
  }
};
