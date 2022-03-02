const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//routes and controller
const monsterRoutes = require('./routes/monster');
const noData = require('./controller/404');

const mongoose = require('mongoose');
const session = require('express-session'); //setting up express session
const MongoDBStore = require('connect-mongodb-session')(session);
const MONGODB_URI = 'mongodb+srv://monster:061617@monsterapp.oevuz.mongodb.net/monster?retryWrites=true&w=majority';

app.use(bodyParser.json());
app.use((req, res, next)=>{ //
    res.setHeader('Access-Control-Allow-Origin', '*'); //connection for all is allowed *
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); //auth method that can be use
    res.setHeader('Access-Control-Allow-Headers', 'Contenty-Type, Authorization'); //setup auth
    next();
})

const datastore = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: datastore
    })
);


//routes
app.use(monsterRoutes);

//no data found
app.use(noData.get404);

mongoose.connect(MONGODB_URI)   
.then(con =>{
    app.listen(PORT,  () => {
        console.log(`Server running on port ${PORT}`)
    })
})
.catch(err =>{
    console.log('Error connecting to database');
    console.log(err);
})

