const fetch         =   require('node-fetch');
const QRCode        =   require('qrcode');

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

        const date = new Date()
        req.body.date = date.toISOString();

        // create user
        const resultFromUsersTable = await  db.users.create(req.body)
        
        const userKey = resultFromUsersTable.user_key;

        // crate QR-code generater function
        const generateQR = async (userKey) => {
            try {
                return await QRCode.toDataURL(`http://localhost:3001/qrlogin/${userKey}`)
            } catch (err) {
                console.error('create QR-Code error')
            }
          }

        
        date.setHours(date.getHours() + 1)
        const sizeCustomer =  resultFromUsersTable.size
        const billQRcode = await generateQR(userKey)

        // set data to create bill for user
        const dateToBills = {
            user_key : userKey,
            bill_endTime: date.toISOString(),
            price: sizeCustomer * 200,
            bill_status: 'open',
            bill_qrcode: `${billQRcode}`
        }

        // create bill
        const resultFromBillsTable = await db.bills.create(dateToBills)

        // update selected-table status
        const selectedTable = req.body.table_number

        db.tables.update({
            status: false,
            user_key: resultFromBillsTable.user_key,
            time_end: resultFromBillsTable.bill_endTime,
            qrcode: resultFromBillsTable.bill_qrcode
        }, {
            where: {
                number: selectedTable
            }
        })


        res.status(200)
            .send(`customer table number is : ${resultFromUsersTable.table_number} 
                \n time-end : ${new Date(resultFromBillsTable.bill_endTime) }`)
        } catch (err) {
            console.log(`create user error ${err.message}`)
            res.status(500).send(err.message)
        }

    })

    
}