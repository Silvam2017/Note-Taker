const api = require('./routes/apiRoutes/notes');

const html = require('./routes/htmlRoutes/html');

const express = require('express');

const fs = require('fs');

const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

const router = require('express').Router();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true }));

app.use('/api', api);

app.use('/', html);

app.listen(PORT, () => {
    console.log(`Server is now active on port ${PORT}.`);
});

module.exports =  router;