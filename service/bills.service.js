module.exports = (app, db) => {

    app.get('/bills/:userKey', (req, res) => {

        const userKey = req.params.userKey;

        db.bills.findAll({
            where: {
                user_key: userKey
            }
        }).then(result => res.send(result[0]))
            .catch(err => res.send(err))

    })

    app.get('/qrlogin/:user_key', async (req, res) => {

        try {

            const resultFromUsersTable = await db.users.findAll({
                where: {
                    user_key: req.params.user_key
                }
            });

            const resultFromBillsTable = await db.bills.findAll({
                where: {
                    user_key: req.params.user_key
                }
            });

            const bills = resultFromBillsTable[0]
            const users = resultFromUsersTable[0]
    
            const dataRespond = {
                status: bills.bill_status,
                timeEnd: bills.bill_endTime,
                billId: bills.bill_id,
                Price: bills.price,
                tableNumber: users.table_number,
                userKey: bills.user_key
            };
    
            res.status(200).send(dataRespond);

        } catch(err) {

            res.status(500).send(`QRcode login ps error ${err}`)

        }
    
    })

    app.put('/bills/:userKey', (req, res) => {

        db.bills.update({
            status: 'close'
        }, {
            where: {
                user_key: req.params.userKey
            }
        })

        db.tables.update({
            status: true,
            user_key: null,
            time_end: null,
            qrcode: null
        },{
            where: {
                user_key: req.params.userKey
            }
        })

        res.status(200).send('bill closed')
        
    })

}