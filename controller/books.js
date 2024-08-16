
const BookCollection = require('../models/modal_Books');

const getBooks = async (req, res) => {
    try {
        const data = await BookCollection.find();
        return res.status(200).json({ response: "success", data:  data });
    } catch (error) {
        return res.status(500).json({ response: "failure", response_message: "Internal Server Error" });
    }
}



module.exports = {getBooks}