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

    app.post('/users', (req, res) => {

        fetch('http://localhost:3000/tables')
            .then(result => result.json())
            .then(tablesList => {
                if (tablesList.length) {
                    fetch('http://localhost:3000/restaurants')
                        .then(result => result.json())
                        .then(result => {
                            req.body.restaurant_id = result[0].restaurant_id
                            
                            db.users.create(req.body)
                            .then(result => res.status(200).send(result))
                            .catch( err => {
                                console.log(`post users ps error`)
                                res.status(501).send(err.message)
                            }) 

                        })
                        .catch( err => {
                            console.log(`get restaurant id error}`)
                            res.status(501).send(err.message)
                        })
                } else {
                    res.status(200).send('Table is not availiable')
                }
            })
            .catch(err => {
                console.log(`get tables ps error`)
                 res.status(501).send(err.message)
            })


        
    })

    
}