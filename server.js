// import main libraly
const express       =   require('express');
const mysql         =   require('mysql2');
const bodyParser    =   require('body-parser');
const cors          =   require('cors');
const fetch         =   require('node-fetch');

// import database to create model
const db            =   require('./models');

//import model service
const Users         =   require('./service/users.service');
const Restaurant    =   require('./service/restaurants.service')

// port setting
const PORT         =   3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

db.sequelize.sync({force: true})
    .then( () => {
        
        Users(app, db);
        Restaurant(app, db)

        app.listen(PORT, console.log(`server is running at PORT ${PORT}`));
    })

