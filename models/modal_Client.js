

const mongoose = require("mongoose");

const clientDBschema = new mongoose.Schema({
    id:Number,
    clientusername: String,
    bookprice: String,
    bookauthor: String,
    bookemail:String,
    createdby:String,
    createdon:String  
}, { collection: "masClient" });

const client = mongoose.model("masClient", clientDBschema);

module.exports = client;