const express = require('express');

const app = express();
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbUser:dbUserPassword@pacluster.gzl5d.mongodb.net/PaDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);


module.exports = app;