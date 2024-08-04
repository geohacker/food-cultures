const express = require('express');
const router = express.Router();

router.get("/", renderHome)

module.exports = router;

function renderHome(req, res, next){
    res.render('home');
}