const express = require("express");
const dbConnect = require("./config/database")
const cors = require('cors');
const bodyParser = require('body-parser')


const { getBooks } = require("./controller/books");
const { handleBooks } = require("./controller/client");
const BookCollection = require("./models/modal_Books");
require('dotenv').config()
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json())
app.use(cors())
dbConnect()
app.get("/api/books",getBooks)
app.post("/api/client",handleBooks)


const a = () => {

    BookCollection.create({
        "id": 1,
        "bookImg": "https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg",
        "booktitle": "Making India Awesome",
        "bookauthor": "Chetan Bhagat",
        "bookprice": 250,
        "bookdescription": "“Everything was beautiful and nothing hurt.”"
      },
      {
        "id": 2,
        "bookImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxuIle6zmjShGM_n2IQ2EnIY0wjr1OKVKWg&s",
        "booktitle": "Naked Triangle",
        "bookauthor": "Balwant Gargi",
        "bookprice": 300,
        "bookdescription": "The word’s suffix means “to eat,” but the word doesn’t mean that someone is eating books."
      },
      {
        "id": 3,
        "bookImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUEqrTmUXlENyjyj4M2BkpBDVV21DZGpykw&s",
        "booktitle": "A Million Mutinies Now",
        "bookauthor": "V.S. Naipaul",
        "bookprice": 500,
        "bookdescription": "The Bible is one such book, but this can apply to any other book, especially popular ones."
      }
    
    
    
      )
}
app.listen(port, () => {
    console.log("running port", port)
})


