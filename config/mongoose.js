//(11) install mongoose create config create this intializing file
const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://sb7acc1:sb7acc1@cluster0.eacbebf.mongodb.net/?retryWrites=true&w=majority');

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);
// mongodb://127.0.0.1:27017


//(11) go connection in db  
const db = mongoose.connection;

db.on('error',console.error.bind(console,"can't connect db"));
db.once('open',function(){
    console.log(`db connected`);
});