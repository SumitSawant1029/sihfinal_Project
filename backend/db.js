const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://sumitsawant1029:sumit1029@cluster0.98osrip.mongodb.net/";

const connectToMongo = () => {
    mongoose.connect(mongoURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("Connected Successfully to database sir ");
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:",error);
    });
}

module.exports = connectToMongo;