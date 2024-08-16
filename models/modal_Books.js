const mongoose = require("mongoose");

const booksModal = new mongoose.Schema({
    id:Number,
    bookImg: String,
    booktitle: String,
    bookauthor: String,
    bookprice:Number,
    bookdescription:String,
}, { collection: "masBooks" });

const BookCollection = mongoose.model("masBooks", booksModal);

module.exports = BookCollection;