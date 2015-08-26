// /controllers/student.js

//import mysql
var db = require(__dirname+'/../lib/mysql');

//function(req,res) -> lambda function, callback chuchu a while ago
// res.send('Hello World'); in localhost:5000/students

//retrieve all
exports.find = function(req,res,next){ 
	 db.query("SELECT * FROM student", function(err, rows){ //for error handling (err)
	 	if(err) return next(err);	//next(err) --> skip all route handlers 
	 	res.send(rows);
	 });
};

//? will have 3 param
//query itself, last 2 other stuff you'll need
//[req.params.id] gets the id in  router.route('/students/:id')
exports.findOne = function(req,res,next){ 
	 db.query("SELECT * FROM student WHERE id=?", [req.params.id], function(err, rows){
	 	if(err) return next(err);
	 	if(rows.length===0) res.status(404).send('Student not found.');
	 	else res.send(rows[0]);	//returns first instance
	 });
};

//info client sent
exports.insert = function(req,res,next){ 
	 db.query("INSERT INTO student(studno,name) VALUES (?,?)", [req.body.studno, req.body.name], function(err, rows){
	 	if(err) return next(err);
	 	res.send(rows);
	 });
};

//in adv rest client http://localhost:5000/students/id param 1 will be used in id=?
// SET ? for colname=value pairing
exports.update = function(req,res,next){ 
	 db.query("UPDATE student SET ? WHERE id=?", [req.body, req.params.id], function(err, rows){
	 	if(err) return next(err);
	 	res.send(rows);
	 });
};

exports.remove = function(req,res,next){ 
	 db.query("DELETE FROM student WHERE id=?", [req.params.id], function(err, rows){
	 	if(err) return next(err);
		res.send(rows);
	 });
};

