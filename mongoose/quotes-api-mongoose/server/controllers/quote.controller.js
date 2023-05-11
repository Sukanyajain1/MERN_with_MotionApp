const Quote = require("../models/quote.model");

module.exports.sayHello = (req, res)=>{
    res.json({msg: "Hello to one"})
}

module.exports.findAllQuotes = (req, res) =>{
    Quote.find()
        .then(allQuotes=>{
            res.json({results: allQuotes})
        })
        .catch(err=>{
            res.json({msg: "Somthing went wrong: ", error: err})
        })
}

module.exports.createQuote = (req, res)=>{
    // req.body represents the form information
    Quote.create(req.body)
        .then(newCreatedQuote => {
            res.json({results: newCreatedQuote})
        })
        .catch(err=> {
            res.json({msg: "Somthing went wrong: ", error: err})
        })
}