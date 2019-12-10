module.exports = (app, db) => {

    let fakeMenus = [
        {
            name: 'egg-star',
            description: 'soft creamy egg from orgainic'
        },
        {
            name: 'steak',
            description: 'kobe rib medium rare steak'
        },
        {
            name: 'orange-juice',
            description: 'freshly ice orange juice from farm'
        }
    ]

    app.get('/menus', (req, res) => {
        db.menus.findAll()
            .then( result => res.send(result))  
            .catch( err => {
                console.log(`get menus ps error`)
                res.status(501).send(err.message)
            })
    })

    app.post('/menus', (req, res) => {

        fakeMenus.forEach( menu => {
            req.body = {
                name: menu.name,
                description: menu.description
            }
            db.menus.create(req.body)
                .then(result => {
                    console.log(`menu ${result} has add to Menus`)
                })
                .catch(err => {
                    console.log('create menu ps error')
                    res.status(501).send(err.message)
                })
        })

    })

    
}