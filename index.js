'use strict'
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const apiRoute = require('./router/apiRoute');
const redirect = require('./middlewares/redirect');
const PORT = process.env.PORT || 3000;


// MONGODB CONNECT 
mongoose.connect(`mongodb://mongo:27017/stapes`, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('DB CONNECTED'));


app.use(express.static('public'))

app.use(express.json());
app.use('/api', apiRoute);
app.get('/', (req, res) => {
	res.status(200).sendFile(path.join(__dirname + '/templates/index.html'));
} );
app.get('/:id', redirect);


app.listen(PORT, '0.0.0.0',() => {
	console.log(`Listening on port ${PORT}`);
});
