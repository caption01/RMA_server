module.exports = (app, db) => {

    app.get('/menus', async (req, res) => {

        try {
            const resultFromMenusTable = await db.menus.findAll()

            const newMenusList = resultFromMenusTable
                .map(menu => {
                    let menus = {
                        name: menu.name,
                        description: menu.description
                    }
                    return menus
                })


            res.status(200).send(newMenusList)
        } catch (err) {
            console.log(`get menus ps error`)
            res.status(501).send(err.message)
        }

    })

}