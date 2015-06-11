var mongoose = require('mongoose');
/*mongoose.connect('mongodb://localhost/m101');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("connected successfully!!!")
});*/

module.exports = function dbconnection(){
mongoose.connect('mongodb://localhost/student', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});
}