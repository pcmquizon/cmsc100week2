// /test/student.js
//will contain test cases

//import modules; these instead of assert
var should = require('should-http'),
	request = require('supertest');	
	

describe('student', function(){

	var url = "http://localhost:5000";
	
	describe('find()', function(){
		
		it('should retrieve all student record',function(done){
			request(url)
			.get('/students')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			})
			
		
		});
		
	});
	
	describe('findOne()', function(){
		
		it('should retrieve a specific student record',function(done){
			request(url)
			.get('/students/2')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object);
				done();
			})
		});
		
	});
	
	describe('insert()', function(){
		
		var studrec = {
			name: 'Betel',
			studno: '2007-12345'
		};
		
		it('should insert a specific student record',function(done){
			request(url)
			.post('/students')
			.send(studrec)
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				done();
			})
			
		});
		
	});
	
});