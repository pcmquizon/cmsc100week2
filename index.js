//for cmsc131 .asm highlight mode http://stackoverflow.com/questions/17003401/gedit-syntax-highlighting-for-assembler-files-asm
//chrome extension -> advanced rest client
//for lolcode syntax highlights https://gist.github.com/Lucki/2409d96cae36e1856ef8


var express = require('express');
var app = express(); //instance of express

//require additional modules body parser & method override
app.use(require('body-parser')());
app.use(require('method-override')());
app.use(require(__dirname+'/config/router')(express.Router())); // __dirname -> where running script is located

app.use(express.static(__dirname+'/public'));	//static pages found in public folder

//what the modules do
//body-parser -> accept input from user
//method-override -> have put & delete methods 

/*
//route handlers
app.get('/', function(req,res){ // / == localhost
 res.send('Hello World!');
});

app.get('/students', function(req,res){
 res.send('meow~');
});
*/

/*
app.route('/students')
 .get(function(req,res){
  res.send('Get a student');
 };
 
 .post(function(req,res){
  res.send('Add a student ');
 };
 
 .put(function(req,res){
  res.send('Update a student ');
 };
*/ 
 
 
var server = app.listen(5000, function(){
 var host = server.address().address;
 var port = server.address().port;
 console.log('Example app listening at http://%s:%s', host, port);
});