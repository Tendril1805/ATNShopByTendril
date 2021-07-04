// Nhớ cài Mongoose
//  npm      i       --S      mongoose
const mongoose = require("mongoose");


/// Thông tin Database Collection / Tables
const userName = "Tendril";
const userPassword = "domaybiet";

const dbName = "ATN_Shop";

const url = "mongodb+srv://" +
    userName + ":" + userPassword +
    "@cluster0.siez9.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";

function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}


module.exports = {
    connectDB: connectDB,
    xURL: url,
}