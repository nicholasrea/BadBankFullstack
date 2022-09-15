var express     = require('express');
var app         = express();
var cors        = require('cors');
var dal         = require('./dal.js');


// serves static files from the public directory
app.use(express.static('public'));
app.use(cors());

//create user account
app.post('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name, req.params.email, req.params.password)
        .then((user) => {
            console.log(user);
            res.send(user);
        });
});

//login user
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email:       req.params.email,
        password:    req.params.password
    });
});

//all accounts
app.get('/account/all', function (req, res){
    dal.all().then((docs) => {
        console.log(docs);
        res.send(docs);
    });
});

//deletes all users
app.delete('/account/deleteall', function (req, res) {
    dal.deleteAll().then(() => {
        console.log('Database Deleted');

    });
})

var port = 3000;
app.listen(port);
console.log('Running express server on port: ' + port);