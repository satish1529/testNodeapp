/**
 * New node file
 */

var mongoose = require('mongoose');
var studentModel = require('../models/student.js');

var getAllRules = function(req,res,next)
{
	/*student.find({},{_id:0},function (err, studentGrade) {
		    if (err) return next(err);
		  //  console.log(studentGrade[0].student_id[0])
		    for (var i=0; i<studentGrade.length; i++){
		    	console.log(studentGrade[i].student_id)
		    }
		    res.json(studentGrade);
		  });*/
	
	studentModel.getAllStudents({},{_id:0},function (err, studentGrade) {
		    if (err) return next(err);
		 /*   for (var i=0; i<studentGrade.length; i++){
		    	console.log(studentGrade[i].student_id)
		    }
		 */ 
		   
		    		
		    res.json(studentGrade);
		  });
}

var createRule = function(req,res,next)
{
	 var newStudent = new studentModel({ student_id: req.body.id,
   	  type: req.body.type,
   	  score: req.body.score});
	 
     studentModel.insertStudent(newStudent,function (err){
    	    if(!err){
   			   console.log("student created successfully!!!")
   			   res.json({status:"S0000",message:"success"})
    	    }
   			else
   				{
   				console.log(err)
   				res.json({status:"E0000",message:"insertion failed"})
   				}
   		})
   	//	next();
}

module.exports = {getAllRules:getAllRules,
		          createRule:createRule};
