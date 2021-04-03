const { notes } = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    console.log(req.body);
    req.body.id = notes.length.toString();
    console.log(req.body.id);
    //const note = saveNote(req.body);
    //res.json(req.body);
})

module.exports = router;