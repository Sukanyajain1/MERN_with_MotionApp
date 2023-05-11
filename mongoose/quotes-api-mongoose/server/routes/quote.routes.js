const QuoteController = require("../controllers/quote.controller");

// "no matchy, no worky" --> the callback function from the controller must be the same name as the function name in the controller file.
module.exports = (app)=> {
    app.get("/api/hello", QuoteController.sayHello);
    app.get("/api/quotes", QuoteController.findAllQuotes);
    app.post("/api/quotes", QuoteController.createQuote);
    app.get("/api/quotes/random", QuoteController.findRandomQuote);  // find a random quote

    /* 
    
    Best Practice: Keep all the static routes on the top and all the dynamic routes with path variables on the bottom so the paths with the same roots and routing syntax don't get confused
            ---> (get route with /api/quotes/someVariable --> the findRandom and findOne routes conflict with each other)
    
    */

    app.get("/api/quotes/:id", QuoteController.findOneQuote);
    app.put("/api/quotes/:id", QuoteController.updateQuote);
    app.delete("/api/quotes/:id", QuoteController.deleteQuote);




}