const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://Albinsermongo:Albinsermongo@cluster0.ivesr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
};

module.exports = connect;