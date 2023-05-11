const QuoteController = require("../controllers/quote.controller");

// "no matchy, no worky" --> the callback function from the controller must be the same name as the function name in the controller file.
module.exports = (app)=> {
    app.get("/api/hello", QuoteController.sayHello);
    app.get("/api/quotes", QuoteController.findAllQuotes);
    app.post("/api/quotes", QuoteController.createQuote);
}