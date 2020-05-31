const { notes } = require('../db/db.json')

const fs = require('fs');

const path = ('path');

const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    // local variable
    const note = req.body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    res.json(note);
});

module.export = router;