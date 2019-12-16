module.exports = (app, db) => {

    app.get('/staff', (req, res) => {
        
        const staff_id = req.body.staff_id;
        const staff_pass = req.body.staff_pass;

        db.staffs.findAll({
            where: {
                staff_id : staff_id,
                staff_password : staff_pass
            }
        }).then(result => res.status(200).send(result))
        .catch(err => {
            console.log('get staff ps error');
            
        })


    })
    
    
}