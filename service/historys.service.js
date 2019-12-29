module.exports = (app, db) => {

    // get all order
    app.get('/history', async (req, res) => {

        try {
            const resultFromHistory= await db.historys.findAll({
                order:  [['createdAt', 'ASC']]
            })
            res.status(200).send(resultFromHistory)
        } catch (err) {
            console.log(`get history ps error`)
            res.status(501).send(err.message)
        }

    })

    // get history static

    app.get('/history/static', async (req, res) => {

        try {

            const FoodTypeFromHistory = await db.historys.findAll({
                attributes: ['menu_name', 'quantity', 'type']
            })

            const foodMap = new Map()

            FoodTypeFromHistory.forEach(food => {
                if(foodMap.get(food.type)){
                    let checkArr = []
                    foodMap.get(food.type).forEach((foodInMap, idx) => {
                        foodInMap.name === food.menu_name ?
                        checkArr.push(true) :
                        checkArr.push(false)
                    })
                    if(checkArr.includes(true)){
                        let index = checkArr.indexOf(true)
                        foodMap.get(food.type)[index].count = foodMap.get(food.type)[index].count + food.quantity
                    } else {
                        foodMap.set(food.type, [
                                ...foodMap.get(food.type),
                                    {
                                        name: food.menu_name,
                                        count: food.quantity
                                    }
                        ])
                    }       
                } else {
                    foodMap.set(food.type, [
                        {
                            name: food.menu_name,
                            count: food.quantity
                        }
                    ])
                }
            })

            const foodStatic = JSON.stringify([...foodMap])


            res.status(200).send(foodStatic)

        } catch (err) {
            console.log(`get history static ps err ${err.message}`)
            res.status(501).send(err.message)
        }
    })


}


