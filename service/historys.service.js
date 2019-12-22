module.exports = (app, db) => {

    // get all order
    app.get('/history', async (req, res) => {

        try {
            const resultFromHistory= await db.historys.findAll()
            res.status(200).send(resultFromHistory)
        } catch (err) {
            console.log(`get history ps error`)
            res.status(501).send(err.message)
        }

    })

}