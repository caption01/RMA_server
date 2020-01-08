module.exports = (app, db, Op) => {

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

    // get history static of food

    app.get('/history/static/food', async (req, res) => {

        try {

            const FoodTypeFromHistory = await db.historys.findAll({
                attributes: ['menu_name', 'quantity', 'type', 'createdAt']
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

    // get history static of food with Date

    app.get('/history/static/food/:datePast/:dateFuture', async (req, res) => {

        const reqParamsDatePast = req.params.datePast
        const reqParamsDateFuture = req.params.dateFuture

        const dayPast = new Date(reqParamsDatePast)
        const dayFuture = new Date(reqParamsDateFuture)

        try {

            const FoodTypeFromHistory = await db.historys.findAll({
                attributes: ['menu_name', 'quantity', 'type', 'createdAt'],
                where: {
                    createdAt: {
                        [Op.and]: [{[Op.gte]: dayPast}, {[Op.lte]: dayFuture}]
                    }
                }
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


    // get history static of user
    app.get('/history/static/user', async (req, res) => {

        try {
            const resultFromUser= await db.users.findAll({
                attributes: ['size', 'date'],
                order:  [['date', 'ASC']]
            })
            const user = new Map()
            resultFromUser.forEach( (data, idx) => {
                if (!user.size) {
                    user.set('total', [
                        {
                            size: data.size,
                            date: data.date
                        }
                    ])
                } else {
                    user.set('total', [
                        ...user.get('total'),
                        {
                            size: user.get('total')[idx-1].size + data.size,
                            date: data.date
                        }
                    ])
                }
            })
            const userStatic = user.get('total')
            res.status(200).send(JSON.stringify(userStatic))
        } catch (err) {
            console.log(`get user history ps error`)
            res.status(501).send(err.message)
        }

    })

    // get history static of user with date

    app.get('/history/static/user/:datePast/:dateFuture', async (req, res) => {

        const reqParamsDatePast = req.params.datePast
        const reqParamsDateFuture = req.params.dateFuture

        const resetDayPast = new Date().setDate(new Date(reqParamsDatePast).getDate() - 1)
        const resetDayFuture = new Date().setDate(new Date(reqParamsDateFuture).getDate() + 1)

        const dayPast = new Date(resetDayPast)
        const dayFuture = new Date(resetDayFuture)

        try {
            const resultFromUser= await db.users.findAll({
                attributes: ['size', 'date'],
                where: {
                    date: {
                        [Op.and]: [{[Op.gte]: dayPast}, {[Op.lte]: dayFuture}]
                    }
                },
                order:  [['date', 'ASC']]
            })

            if (resultFromUser.length) {
                const user = new Map()
                resultFromUser.forEach( (data, idx) => {
                    if (!user.size) {
                        user.set('total', [
                            {
                                size: data.size,
                                date: data.date
                            }
                        ])
                    } else {
                        user.set('total', [
                            ...user.get('total'),
                            {
                                size: user.get('total')[idx-1].size + data.size,
                                date: data.date
                            }
                        ])
                    }
                })
                const userStatic = user.get('total')
                res.status(200).send(JSON.stringify(userStatic))
            } else {
                res.status(200).send([])
            }
        } catch (err) {
            console.log(`get user history ps error`)
            res.status(501).send(err.message)
        }

    })
}


