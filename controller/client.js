const client = require("../models/modal_Client");


const handleBooks = async (req,res) => {
    const {id,clientusername,bookprice,bookauthor,bookemail} = req.body;

    const date = new Date();
    const getMonth = date.getMonth();
    const getYear = date.getFullYear();
    const getDate = date.getDate();

    const dates = {
        getMonth,
        getYear,
        getDate
    }
    const getCreateOn = dateFormat(dates)

      const body = {
        id,
        clientusername,
        bookprice,
        bookauthor,
        bookemail,
        createdby:clientusername,
        createdon:getCreateOn
      }

      console.log(body);
      
      
      await client.create(body)
      return res.status(200).json({ response: "success" });
 }


 const dateFormat = (value) => {
    const month = (value.getMonth).toString().padStart(1,0);
    return `${value.getYear}-${month}-${value.getDate}`
 }

 module.exports = {handleBooks}