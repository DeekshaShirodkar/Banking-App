var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

app.use('/cssFiles',express.static(__dirname+ '/src/styles'));
app.use('/images',express.static(__dirname+ '/src/resources/images'));
app.use('/scripts',express.static(__dirname+ '/src/script'));


router.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/src/views/index.html'));
});

router.get('/accountList',function(req,res) {
    res.sendFile(path.join(__dirname+'/src/views/savingsDashboard.html'));
});

router.get('/accountDetails',function(req,res) {
    res.sendFile(path.join(__dirname+'/src/views/accountDetails.html'));
});

router.get('/accountCreation',function(req,res) {
    res.sendFile(path.join(__dirname+'/src/views/accountCreation.html'));
});



app.use('/', router);
app.listen(8080);

