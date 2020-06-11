// change db.json to named entity
const { notes } = require('../../db/db.json')

const fs = require('fs');

const path = require('path');

const router = require('express').Router();

// retrieves notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POSTS notes and writes to file system as JSON
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    // local variable
    const note = req.body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    res.json(note);
});

module.exports = router;