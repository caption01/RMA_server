module.exports = (app, db) => {

    app.get('/restaurants', (req, res) => {
        db.restaurants.findAll()
            .then( result => res.send(result))  
            .catch( err => {
                console.log(`get restaurants ps error`)
                res.status(501).send(err.message)
            })
    })

    app.post('/restaurants', (req, res) => {
        db.restaurants.create(req.body)
            .then(result => res.status(200).send(result))
            .catch( err => {
                console.log(`post restaurants ps error`)
                res.status(501).send(err.message)
            })
    })

    
}