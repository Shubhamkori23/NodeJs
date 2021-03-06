var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
    res.render('indexx');
});

app.get('/contact', function (req, res) {
    res.render('contactss', { qs: req.query });
});

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact-success', { data: req.body });
});

app.get('/profile/:name', function (req, res) {
    var data = { age: 24, job: 'Software Engineer', hobbies: ['chess', 'sketching', 'travelling'] };
    res.render('profilee', { person: req.params.name, data: data });
});

app.listen(3000);