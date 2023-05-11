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

module.exports.findOneQuote = (req, res)=>{
    // req.body represents the form information
    Quote.findOne({_id: req.params.id})
        .then(foundQuote => {
            res.json({results: foundQuote})
        })
        .catch(err=> {
            res.json({msg: "Somthing went wrong: ", error: err})
        })
}

module.exports.updateQuote = (req, res)=>{
    // req.body represents the form information
    Quote.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updateQuote => {
            res.json({results: updateQuote})
        })
        .catch(err=> {
            res.json({msg: "Somthing went wrong: ", error: err})
        })
}

module.exports.deleteQuote = (req, res)=>{
    // req.body represents the form information
    Quote.deleteOne({_id: req.params.id})
        .then(deletedQuote => {
            res.json({results: deletedQuote})
        })
        .catch(err=> {
            res.json({msg: "Somthing went wrong: ", error: err})
        })
}

module.exports.findRandomQuote = (req, res) =>{
    Quote.find()
        .then(allQuotes=>{
            // get a random index number from index 0 up to but not including the allQuotes.length
            let randomIdx = Math.floor(Math.random()*allQuotes.length)

            res.json({results: allQuotes[randomIdx]})
        })
        .catch(err=>{
            res.json({msg: "Somthing went wrong: ", error: err})
        })
}