'use strict';

const dayPresent = new Date()
const dayPast = new Date().setDate(dayPresent.getDate() - 5)
const dayFuture = new Date().setDate(dayPresent.getDate() + 5)

const generateDataPast = (pastNum) => {

    const dataPastFake = []
  
    for(let i=0; dataPastFake.length<=pastNum; i++ ){

        let object1 = {
            history_id: `SEED-HSRY-PAST-F0${i}`,
            menu_name: 'eggSalad',
            quantity: i,
            createdAt: new Date(dayPast).toISOString(),
            type: 'food',
            bill_id: 'SEED-BILL-ABCD-ABCD'
        }

        let object2 = {
            history_id: `SEED-HSRY-PAST-D0${i}`,
            menu_name: 'cola',
            quantity: i,
            createdAt: new Date(dayPast).toISOString(),
            type: 'drink',
            bill_id: 'SEED-BILL-ABCD-ABCD'
        }

        let object3 = {
            history_id: `SEED-HSRY-PAST-S0${i}`,
            menu_name: 'pudding',
            quantity: i,
            createdAt: new Date(dayPast).toISOString(),
            type: 'desert',
            bill_id: 'SEED-BILL-ABCD-ABCD'
        }

        dataPastFake.push(object1)
        dataPastFake.push(object2)
        dataPastFake.push(object3)
    }
    return dataPastFake
}


const generateDataPrest= (prestNum) => {
    const dataPresFake = []

    for(let i=0; dataPresFake.length<=prestNum; i++ ){
        let object1 = {
            history_id: `SEED-HSRY-PRES-00${i}`,
            menu_name: 'waguSteak',
            quantity: i,
            createdAt: dayPresent.toISOString(),
            type: 'food',
            bill_id: 'SEED-BILL-ABCD-ABCD'
        }

        let object2 = {
            history_id: `SEED-HSRY-PRES-D0${i}`,
            menu_name: 'soda',
            quantity: i,
            createdAt: dayPresent.toISOString(),
            type: 'drink',
            bill_id: 'SEED-BILL-ABCD-ABCD'
        }

        let object3 = {
            history_id: `SEED-HSRY-PRES-S0${i}`,
            menu_name: 'sofe-cream',
            quantity: i,
            createdAt: dayPresent.toISOString(),
            type: 'desert',
            bill_id: 'SEED-BILL-ABCD-ABCD'
        }

        dataPresFake.push(object1)
        dataPresFake.push(object2)
        dataPresFake.push(object3)
    }

    return dataPresFake
}


const generateDataFutur= (futurNum) => {
    const dataFuTuFake = []

    for(let i=0; dataFuTuFake.length<=futurNum; i++ ){
        let object1 = {
            history_id: `SEED-HSRY-FUTU-00${i}`,
            menu_name: 'brownRice',
            quantity: i,
            createdAt: new Date(dayFuture).toISOString(),
            type: 'food',
            bill_id: 'SEED-BILL-ABCD-ABCD'
        }
        let object2 = {
            history_id: `SEED-HSRY-FUTU-D0${i}`,
            menu_name: 'water',
            quantity: i,
            createdAt: new Date(dayFuture).toISOString(),
            type: 'drink',
            bill_id: 'SEED-BILL-ABCD-ABCD'
        }

        let object3 = {
            history_id: `SEED-HSRY-FUTU-S0${i}`,
            menu_name: 'orange-cake',
            quantity: i,
            createdAt: new Date(dayFuture).toISOString(),
            type: 'desert',
            bill_id: 'SEED-BILL-ABCD-ABCD'
        }

        dataFuTuFake.push(object1)
        dataFuTuFake.push(object2)
        dataFuTuFake.push(object3)
    }

    return dataFuTuFake
}

const setOfDataPast = generateDataPast(30)

const setOfDataPrest = generateDataPrest(30)

const setOfDataFutu = generateDataFutur(30)

const setOfHistory = setOfDataPast.concat(setOfDataPrest).concat(setOfDataFutu)


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('historys', 
    // [{
    //     history_id: 'SEED-HSRY-ABCD-0001',
    //     menu_name: 'eggSalad',
    //     quantity: 2,
    //     type: 'food',
    //     createdAt: new Date().toISOString(),
    //     bill_id: 'SEED-BILL-ABCD-ABCD'
    // },{
    //     history_id: 'SEED-HSRY-ABCD-0002',
    //     menu_name: 'waguSteak',
    //     quantity: 4,
    //     type: 'food',
    //     createdAt: new Date().toISOString(),
    //     bill_id: 'SEED-BILL-ABCD-ABCD'
    // },{
    //     history_id: 'SEED-HSRY-ABCD-0003',
    //     menu_name: 'brownRice',
    //     quantity: 4,
    //     type: 'food',
    //     createdAt: new Date().toISOString(),
    //     bill_id: 'SEED-BILL-ABCD-ABCD'
    // },{
    //     history_id: 'SEED-HSRY-ABCD-0004',
    //     menu_name: 'eggSalad',
    //     quantity: 7,
    //     type: 'food',
    //     createdAt: new Date().toISOString(),
    //     bill_id: 'SEED-BILL-ABCD-ABCD'
    // },{
    //     history_id: 'SEED-HSRY-ABCD-0005',
    //     menu_name: 'waguSteak',
    //     quantity: 2,
    //     type: 'food',
    //     createdAt: new Date().toISOString(),
    //     bill_id: 'SEED-BILL-ABCD-ABCD'
    // },{
    //     history_id: 'SEED-HSRY-ABCD-0006',
    //     menu_name: 'softcream',
    //     quantity: 4,
    //     type: 'desert',
    //     createdAt: new Date().toISOString(),
    //     bill_id: 'SEED-BILL-ABCD-ABCD'
    // },{
    //     history_id: 'SEED-HSRY-ABCD-0007',
    //     menu_name: 'coca-cola',
    //     quantity: 8,
    //     type: 'drink',
    //     createdAt: new Date().toISOString(),
    //     bill_id: 'SEED-BILL-ABCD-ABCD'
    // }]
    setOfHistory
    , {})
    },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('historys', [{}])
  }
};