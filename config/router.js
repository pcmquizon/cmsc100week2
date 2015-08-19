// /config/oruter.js
var student = require('./../controllers/student'); //controllers -> response, callbacks
var teacher = require('./../controllers/teacher'); //controllers -> response, callbacks

/*
 export functions on other modules --> module.exports
 without, local use only
*/
module.exports = function(router){
 router.route('/students') //app.route('/students')
  .get(student.find);      //'get' http method, callback function
                           //student.find is function(req,res){}
 
 //when chaining routes do not add ';'
 router.route('/teachers')
  .get(teacher.find)
  .post(teacher.add);
  
  return router;
};