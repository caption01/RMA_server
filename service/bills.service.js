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

    app.get('/qrlogin/:user_id/:user_pass', (req, res) => {

        db.users.findAll({
            where: {
                user_id: req.params.user_id,
                user_password: req.params.user_pass
            }
        }).then(result => res.send(result[0]))
        .catch(err => res.status(500).send(`QRcode login ps error ${err}`))


    })
    
}