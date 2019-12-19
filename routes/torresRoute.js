var express = require('express');
var router = express.Router();
const R = require('r-script');

// Relatorio index page route.
router.get('/', (req, res) =>
    R("Rscripts/script_torres.R")
    // .data({df: attitude, nGroups: 3, fxn: "mean" })
        .call(function(err, d) {
            if (err) throw err;
            console.log(d);
        }));
// res.render('torres'));

// Relatorio about page route.
router.get('/about', function (req, res) {
    res.send('About RELATORIOS HOME PAGE ');
});

module.exports = router;