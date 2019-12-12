module.exports = (app, db) => {

    app.get('/restaurants', (req, res) => {
        db.restaurants.findAll()
            .then( result => res.send(result))  
            .catch( err => {
                console.log(`get restaurants ps error`)
                res.status(501).send(err.message)
            })
    })

}