const express = require('express');

const fs = require('fs');

const path = ('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true }));

const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = req.body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    res.json(note);
});

fetch('/api/notes', {
    method:  'POST',
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    },
    body: JSON.stringify(notes)
})
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        alert('Error: ' + response.statusText);
    })
    .then(postResonse => {
        console.log(postResponse);
        alert('Animal added.')
    });
    
    module.exports = router;