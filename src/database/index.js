const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });

mongoose.createConnection('mongodb+srv://admin:mongodb2020@cluster0-cjprp.gcp.mongodb.net/test?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(response => console.log('Conected to Database..'))
.catch(error => console.log('error ->', error.message));

mongoose.Promise = global.Promise;

module.exports = mongoose; 