const fetch         =   require('node-fetch');

module.exports = (app, db) => {

    app.get('/users', (req, res) => {
        db.users.findAll()
            .then( result => res.send(result))  
            .catch( err => {
                console.log(`get users ps error`)
                res.status(501).send(err.message)
            })
    })

    app.post('/users', async (req, res) => {

        try {

        // set restaurant id
        const restaurantObj = await db.restaurants.findAll()
        const restaurantId = restaurantObj[0].restaurant_id

        req.body.restaurant_id = restaurantId
        req.body.date = `${new Date()}`

        // create user
        const resultFromUsersTable = await  db.users.create(req.body)
        const date = new Date()
        date.setHours(date.getHours() + 1)
        const userKey = resultFromUsersTable.user_key
        const sizeCustomer =  resultFromUsersTable.size

        // set data to create bill for user
        const dateToBills = {
            user_id : userKey,
            bill_endTime: date.toISOString(),
            price: sizeCustomer * 200,
            bill_status: 'open'
        }

        // create bill
        const resultFromBillsTable = await db.bills.create(dateToBills)

        // update selected-table status
        const selectedTable = req.body.table_number

        db.tables.update({
            status: false
        }, {
            where: {
                number: selectedTable
            }
        })


        res.status(200).send(`customer table number is : ${resultFromUsersTable.table_number} \n time-end : ${new Date(resultFromBillsTable.bill_endTime) }`)
        } catch (err) {
            console.log(`create user error ${err.message}`)
            res.status(500).send(err.message)
        }

    })

    
}