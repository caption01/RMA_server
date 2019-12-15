// import main libraly
const express       =   require('express');
const mysql         =   require('mysql2');
const bodyParser    =   require('body-parser');
const cors          =   require('cors');
const fetch         =   require('node-fetch');
const moment        =   require('moment');

// import database to create model
const db            =   require('./models');

//import model service
const Users         =   require('./service/users.service');
const Restaurants   =   require('./service/restaurants.service');
const Menus         =   require('./service/menus.service');
const Tables        =   require('./service/tables.service');
const Orders        =   require('./service/orders.service');
const Bills         =   require('./service/bills.service')

// port setting
const PORT         =   3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

db.sequelize.sync({force: true})
    .then( () => {
        
        Users(app, db);
        Restaurants(app, db);
        Tables(app, db);
        Menus(app, db);
        Orders(app, db);
        Bills(app, db);

        app.listen(PORT, console.log(`server is running at PORT ${PORT}`));
    })

