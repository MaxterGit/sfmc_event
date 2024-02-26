var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index', { title: 'Express'});
});


router.post('/execute', async function (req, res, next){
    res.status(200).json({ "error": false, "message": "todo OK", "data": null})
});

module.exports = router;