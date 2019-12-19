module.exports = (app, db) => {

    app.get('/tables', (req, res) => {
        db.tables.findAll()
            .then( result => res.send(result))  
            .catch( err => {
                console.log(`get tables ps error`)
                res.status(501).send(err.message)
            })
    })

}