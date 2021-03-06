// /config/router.js
var student = require('./../controllers/student'); //controllers -> response, callbacks
var teacher = require('./../controllers/teacher'); //controllers -> response, callbacks

/*
 export functions on other modules --> module.exports
 without, local use only
 
 use only 1 module.exports and return
*/
module.exports = function(router){
 router.route('/students') //app.route('/students') , route handler
  .get(student.find)      //'get' http method, callback function
  .post(student.insert);  //student.find is function(req,res){}
 
 router.route('/students/:id')
  .get(student.findOne)
  .put(student.update)
  .delete(student.remove);
 
 //when chaining routes do not add ';' only at last route 
 router.route('/teachers')
  .get(teacher.find)
  .post(teacher.add);
  
  return router;
};