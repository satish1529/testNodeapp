var mongoose = require('mongoose');

var studenGradeSchema = new mongoose.Schema({
  student_id: Number,
  type: String,
  score: String,
});

studenGradeSchema.statics.getAllStudents = function(filter,options,cb)
{
	return this.find(filter,options,cb);
}


studenGradeSchema.statics.insertStudent = function(newStudent,cb)
{
	return newStudent.save(cb);
}

var studentModel = mongoose.model('grades', studenGradeSchema);

module.exports = studentModel;

/*Allowed schema types
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array*/
