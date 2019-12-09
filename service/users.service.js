module.exports = (app, db) => {

    app.get('/users', (req, res) => {
        db.users.findAll()
            .then( result => res.send(result))  
            .catch( err => {
                console.log(`get users ps error ${err.message}`)
                res.status(501).send(err.message)
            })
    })

    app.post('/users', (req, res) => {
        db.users.create(req.body)
            .then(result => res.status(200).send(result))
            .catch( err => {
                console.log(`post users ps error ${err.message}`)
                res.status(501).send(err.message)
            })
    })

    
}